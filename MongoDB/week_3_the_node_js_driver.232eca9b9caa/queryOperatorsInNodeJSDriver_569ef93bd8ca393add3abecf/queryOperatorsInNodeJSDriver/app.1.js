var MongoClient = require('mongodb').MongoClient,
  commandLineArgs = require('command-line-args'),
  assert = require('assert')

var options = commandLineOptions()

MongoClient.connect('mongodb://localhost:27017/crunchbase', function (err, db) {
  var numOfDocs = 0

  assert.equal(null, err)
  console.log('Successfully connected to MongoDB.')

    // var query = {"category_code": "biotech"},

    // call function to create query, programaticcaly
  var query = queryDoc(options)
  var projections = {'name': 1}

  var cursor = db.collection('companies').find(query, projections)

  cursor.forEach(
        function (doc) {
          console.log(doc)
          console.log(numOfDocs += 1)
        },
        function (err) {
          assert.equal(null, err)
          console.log('Query was ' + JSON.stringify(query))
          console.log('Matching docs ' + numOfDocs)

          return db.close()
        }
    )
})

function queryDoc (options) {
  console.log(options)

  var query = {
    'founded_year': {
      '$gte': options.firstYear,
      '$lte': options.lastYear
    }
  }

  if ("employees" in options) {
      query.number_of_employees = {"$gte": options.employees}
  }

  return query
}


function commandLineOptions () {
  var cli = commandLineArgs([
        {name: "firstYear", alias: 'f', type: Number},
        {name: "lastYear", alias: 'l', type: Number},
        {name: "employees", alias: 'e', type: Number}
  ])

  var options = cli.parse()

  console.log(options)

  if (("firstYear" in options)) {
      console.log(options.firstYear)
  }

  if (!(('firstYear' in options) && ('lastYear' in options))) {
    console.log(cli.getUsage({
      title: 'Usage',
      description: 'The first two options are required'

    }));

    process.exit();
  }

  return options
}

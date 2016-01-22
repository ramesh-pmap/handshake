const bodyParser = require('body-parser');
const express = require('express');
const r = require('rethinkdb');


const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json()); // handle Content-Type 'application/json' requests
app.use(bodyParser.text()); // handle Content-Type 'text/plain' requests
// Static middleware is not needed when using webpack-dev-server (npm start).
app.use(express.static('build'));

// rethinkdb import -f src/static/data/documents-data-SKF.json --table pmap_skf.documents
r.connect({
  host: 'localhost',
  port: 28015,
  db: 'pmap_skf'
}, (err, conn) => {
  if (err) {
    if (err.name === 'RethinkDBError' &&
      err.message.includes('ECONNREFUSED')) {
      console.error('RethinkDB server may not be running');
    }
    throw err;
  }

  // r.db('pmap').table('documents').run(conn).then(cursor => cursor.toArray());
  // Gets all documents.
    // Curl command to test:
    // curl -XGET http://localhost:8081/documents
  app.get('/documents', (req, res) => {
    r.table('documents').run(conn).then(cursor => cursor.toArray()).then(
      // documents => res.send(JSON.stringify(documents)),
      documents => res.send(documents),
      error => res.status(500).send(error));
  });
});


const PORT = 3001;
app.listen(PORT, () => console.log('browse http://localhost:' + PORT));

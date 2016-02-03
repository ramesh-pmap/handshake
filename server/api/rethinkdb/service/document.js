import r from 'rethinkdb';
import fs from 'fs';
import path from 'path';

// Sample on how to import data into rethinkdb at compose.io.
// r.db('pmap').table("demo").insert(r.http("http://cosmos.pmapconnect.com:8081/api/0/documents", {resultFormat:"json"}))

// SSL certificate from compose.io.
const caCert = fs.readFileSync(path.join(__dirname, './cacert'));

function connect() {
  return r.connect({
    'host': 'aws-us-east-1-portal.4.dblayer.com',
    'port': 10950,
    'db': 'pmap',
    'authKey': 'O6wPPCIm314je8UJQcIXJjKvpkKLsb5ecgqRc0ZDGGk',
    'ssl': {
      'ca': caCert
    }
  });
}

export function getDocuments() {
  return connect()
  .then(conn => {
    return r
    .table('demo')
    .run(conn)
    .then(cursor => cursor.toArray().then(data => data[0]));
  });
}

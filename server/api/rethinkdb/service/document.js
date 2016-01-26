import r from 'rethinkdb';
import config from '../config.json';

function connect() {
  return r.connect(config);
}

export function getDocuments() {
  return connect()
  .then(conn => {
    return r
    .table('documents')
    .run(conn)
    .then(cursor => cursor.toArray());
  });
}

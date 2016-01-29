import * as service from './rethinkdb/service/document';
// import * as service from './firebase/service/document';
// import * as service from './json/service/document';

// RethinkDB and Firebase returnes a promise.
const isPromise = true;

export function getDocuments(req, res) {
  // Rethinkdb and firebase return a promise.
  if (isPromise) {
    service.getDocuments()
    .then((documents) => res.json(documents))
    .catch(err => {
      res.status(400);
      res.json({error: err});
    });
  } else {
    // Direct access to a local json returns the file itself.
    res.json(service.getDocuments());
  }
}

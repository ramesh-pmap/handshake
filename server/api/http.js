import * as service from './rethinkdb/service/document';
// import * as service from './firebase/service/document';
// import * as service from './json/service/document';


export function getDocuments(req, res) {
  service.getDocuments()
  .then((documents) => res.json(documents))
  .catch(err => {
    res.status(400);
    res.json({error: err});
  });
}

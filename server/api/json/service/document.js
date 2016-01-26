import fetch from 'node-fetch';

const sourceData = 'http://localhost:2016/static/data/documents-data-DEMO.json';

export function getDocuments() {
  return fetch(sourceData)
    .then(response => {
      return response.json();
    });
}

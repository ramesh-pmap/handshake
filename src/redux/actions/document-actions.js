import {
  FETCH_DOCUMENT_REQUEST,
  FETCH_DOCUMENT_SUCCESS,
  FETCH_DOCUMENT_FAILURE
} from '../constants/document-constants';

// DATA - Async Action creators
// Documents
export function fetchDocumentRequest(documentId, consumerId, token) {
  return {
    type: FETCH_DOCUMENT_REQUEST,
    documentId,
    consumerId,
    token
  };
}

export function fetchDocumentSuccess(documentId, json) {
  return {
    type: FETCH_DOCUMENT_SUCCESS,
    documentId,
    document: json,
    receivedAt: Date.now()
  };
}

export function fetchDocumentFailure(documentId, error) {
  return {
    type: FETCH_DOCUMENT_FAILURE,
    documentId,
    error
  };
}

export function fetchDocument(documentId, token, consumerId) {
  let url = `https://devsvc.pmapconnect.com/papi/dm/document/${documentId}`;

  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('ApplicationType', '1');
  sHeaders.append('Authorization', token);
  sHeaders.append('ConsumerId', consumerId);
  // sHeaders.append('LocationId', 8840); // many documents
  sHeaders.append('LocationId', 10918); // one subfolder and one document
  sHeaders.append('UserId', 10918);
  sHeaders.append('ModuleId', 16);

  let sInit = { method: 'GET',
             headers: sHeaders};

  return (dispatch) => {
    dispatch(fetchDocumentRequest(documentId, consumerId, token));

    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          dispatch(fetchDocumentFailure(documentId, json));
        } else {
          dispatch(fetchDocumentSuccess(documentId, json));
        }
      })
      .catch(error =>
        dispatch(fetchDocumentFailure(documentId, error))
      );
  };
}

import {
  FETCH_FOLDER_REQUEST,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDER_FAILURE
} from '../constants/folder-constants';

// DATA - Async Action creators
// Folders
export function fetchFolderRequest(folderId, consumerId, token) {
  return {
    type: FETCH_FOLDER_REQUEST,
    folderId,
    consumerId,
    token
  };
}

export function fetchFolderSuccess(folderId, json) {
  return {
    type: FETCH_FOLDER_SUCCESS,
    folderId,
    folder: json,
    receivedAt: Date.now()
  };
}

export function fetchFolderFailure(folderId, error) {
  return {
    type: FETCH_FOLDER_FAILURE,
    folderId,
    error
  };
}

export function fetchFolder(folderId, token, consumerId) {
  let url = `https://devsvc.pmapconnect.com/papi/dm/folder/${folderId}`;
  // let url = `https://devsvc.pmapconnect.com/papi/dm/folder/root`;

  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('ApplicationType', '1');
  sHeaders.append('Authorization', token);
  sHeaders.append('ConsumerId', consumerId);
  // sHeaders.append('LocationId', 8840); // many documents
  sHeaders.append('LocationId', 10918); // one subfolder and one document

  let sInit = { method: 'GET',
             headers: sHeaders};

  return (dispatch) => {
    dispatch(fetchFolderRequest(folderId, consumerId, token));
    // return fetch(`http://cosmos.pmapconnect.com:8081/api/0/documents/${folderId}`)
    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          dispatch(fetchFolderFailure(folderId, json));
        } else {
          dispatch(fetchFolderSuccess(folderId, json));
        }
      })
      .catch(error =>
        dispatch(fetchFolderFailure(folderId, error))
      );
  };
}

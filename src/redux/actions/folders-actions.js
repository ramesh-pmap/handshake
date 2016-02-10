import {
  FETCH_FOLDERS_REQUEST,
  FETCH_FOLDERS_SUCCESS,
  FETCH_FOLDERS_FAILURE
} from '../constants/folders-constants';

// DATA - Async Action creators
// Folders
export function fetchFoldersRequest(folderId) {
  return { type: FETCH_FOLDERS_REQUEST, folderId };
}

export function fetchFoldersSuccess(folderId, json) {
  return {
    type: FETCH_FOLDERS_SUCCESS,
    folderId,
    folders: json,
    // folders: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

export function fetchFoldersFailure(folderId, error) {
  return {
    type: FETCH_FOLDERS_FAILURE,
    folderId,
    error
  };
}

export function fetchFolders(folderId) {
  let url = `https://devsvc.pmapconnect.com/papi/v1/dm/folder/${folderId}`;
  // let url = `http://cosmos.pmapconnect.com:8081/api/0/documents/`;

  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('ApplicationType', '1');
  sHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMDM3ODlkOC02ZDk5LTRjMzYtOTI1OS04NTI2OGJlM2YzOGYiLCJjaWQiOiIxMDMyNjc1IiwidXNyIjoibW9oYnVsbCIsImlzcyI6Imh0dHA6Ly93d3cucHJvY2Vzc21hcC5jb20iLCJhdWQiOiJkZXYucG1hcGNvbm5lY3QuY29tIiwiZXhwIjoxNDU1MTM5MDE0LCJuYmYiOjE0NTUxMzE2MzR9.eF3IM7bpURU05EjvLozL5vjJWe-ZraDsJCHBOaq1LOE');
  sHeaders.append('ConsumerId', '1032675');

  let sInit = { method: 'GET',
             headers: sHeaders};

  return (dispatch) => {
    dispatch(fetchFoldersRequest(folderId));
    // return fetch(`http://cosmos.pmapconnect.com:8081/api/0/documents/${folderId}`)
    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          dispatch(fetchFoldersFailure(folderId, json));
        } else {
          dispatch(fetchFoldersSuccess(folderId, json));
        }
      })
      .catch(error =>
        dispatch(fetchFoldersFailure(folderId, error))
      );
  };
}

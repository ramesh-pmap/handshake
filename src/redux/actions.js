import {
  WINDOW_DIMENSIONS,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  TOGGLE_MODAL,
  CHANGE_FOLDER,
  SELECT_FILE,
  SET_FILE_MANAGER_DATA,
  SET_CONTENT_AREA_VIEW,
  SET_RIGHT_PANEL_AREA_VIEW,
  SET_MODAL_VIEW,
  SET_FIREBASE_URL,
  IFRAME_SOURCE,
  SEARCHING_FOR,
  // Data / Async
  FETCH_FOLDERS_REQUEST,
  FETCH_FOLDERS_SUCCESS,
  FETCH_FOLDERS_FAILURE
} from './constants';

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


// UI - Sync Action creators
export function getWindowDimensions(value) {
  return { type: WINDOW_DIMENSIONS, value };
}

export function toggleLeftSidebar(value) {
  return { type: TOGGLE_LEFT_SIDEBAR, value };
}

export function toggleRightSidebar(value) {
  return { type: TOGGLE_RIGHT_SIDEBAR, value };
}

export function toggleModal(value) {
  return { type: TOGGLE_MODAL, value };
}

export function changeFolder(id) {
  return { type: CHANGE_FOLDER, id};
}

export function selectFile(value) {
  return { type: SELECT_FILE, value };
}

export function setFileManagerData(dataMaster, dataFolders, dataFiles) {
  return { type: SET_FILE_MANAGER_DATA, dataMaster, dataFolders, dataFiles};
}

export function setContentAreaView(value) {
  return { type: SET_CONTENT_AREA_VIEW, value };
}

export function setRightPanelAreaView(value) {
  return { type: SET_RIGHT_PANEL_AREA_VIEW, value };
}

export function setModalView(value) {
  return { type: SET_MODAL_VIEW, value };
}

export function setFirebaseUrl(value) {
  return { type: SET_FIREBASE_URL, value };
}

export function changeFrameSource(value) {
  return { type: IFRAME_SOURCE, value };
}

export function changeSearchingFor(value) {
  return { type: SEARCHING_FOR, value };
}

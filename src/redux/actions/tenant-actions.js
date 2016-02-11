import {
  FETCH_TENANT_REQUEST,
  FETCH_TENANT_SUCCESS,
  FETCH_TENANT_FAILURE
} from '../constants/tenant-constants';


// Async Action creators
// Tenant
export function fetchTenantRequest(paramUrl) {
  return { type: FETCH_TENANT_REQUEST, paramUrl };
}

export function fetchTenantSuccess(paramUrl, json) {
  return {
    type: FETCH_TENANT_SUCCESS,
    paramUrl,
    tenant: json,
    receivedAt: Date.now()
  };
}

export function fetchTenantFailure(paramUrl, error) {
  return {
    type: FETCH_TENANT_FAILURE,
    paramUrl,
    error
  };
}

export function fetchTenant(paramUrl) {
  // let url = `https://devsvc.pmapconnect.com/papi/tenant/url/productfacelift.pmapconnect.com`;
  let url = `https://devsvc.pmapconnect.com/papi/tenant/url/${paramUrl}`;

  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('ApplicationType', '1');

  let sInit = { method: 'GET',
             headers: sHeaders};

  return (dispatch) => {
    dispatch(fetchTenantRequest(paramUrl));
    // return fetch(`http://cosmos.pmapconnect.com:8081/api/0/documents/${folderId}`)
    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          return dispatch(fetchTenantFailure(paramUrl, json));
        }
        return dispatch(fetchTenantSuccess(paramUrl, json));
      })
      .catch(error => {
        return dispatch(fetchTenantFailure(paramUrl, error));
      });
  };
}

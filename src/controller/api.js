const API_URL = 'https://bq-niennis.herokuapp.com';

export const signIn = (route, user) => {
  return fetch(`${API_URL}${route}`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    },
  })
    .then(resp => resp.json())
}

export const getItems = (route, authToken) => {
  return fetch(`${API_URL}${route}`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const sendOrder = (route, body, authToken) => {
  return fetch(`${API_URL}${route}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const updateItem = async (route, itemId, body, authToken) => {
  const response = await fetch(`${API_URL}${route}${itemId}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  });
  const resp = await response.json();
  return resp;
}
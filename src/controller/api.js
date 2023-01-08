const API_URL = "https://bakery-queen.onrender.com";

export const signIn = (route, user) => {
  return fetch(`${API_URL}/${route}`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    },
  })
    .then(resp => {
      return resp.json()})
}

export const getItems = (route, authToken) => {
  return fetch(`${API_URL}/${route}`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const sendOrder = (route, body, authToken) => {
  return fetch(`${API_URL}/${route}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const getItemById = (route, id, authToken) => {
  return fetch(`${API_URL}/${route}/${id}`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const newItem =  (route, body, authToken) => {
  return fetch(`${API_URL}/${route}`, {
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
  const response = await fetch(`${API_URL}/${route}/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  });
  const resp = await response.json();
  return resp;
}


export const deleteItem = (route, id, authToken) => {
  return fetch(`${API_URL}/${route}/${id}`, {
    method: 'DELETE',
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}
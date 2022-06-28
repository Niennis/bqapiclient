export const signIn = (url, route, user) => {
  return fetch(`${url}${route}`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    },
  })
    .then(resp => resp.json())
}

export const getItems = (url, route, authToken) => {
  return fetch(`${url}${route}`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const sendOrder = (url, route, body, authToken) => {
  return fetch(`${url}${route}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      authorization: 'Bearer ' + authToken,
    }
  })
    .then(response => response.json())
}

export const updateItem = async (url, route, itemId, body, authToken) => {
  const response = await fetch(`${url}${route}${itemId}`, {
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
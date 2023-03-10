import axios from 'axios'

export const api = axios.create({
  baseURL: ' http://localhost:5000',
});

export const createSession = (email, password) => {
  return api.post('/sessions', { email, password })
}

export const getRespositories = async(userId, query) => {
  let url = `/users/${userId}/repositories/`

  if(query !== '') {
    url += `?q=${query}`;
  }

  return api.get(url);
}

export const createRepository = async (userId, respositoryUrl) => {
  const repositoryName = getRepositoryName(respositoryUrl);
  const url = `/users/${userId}/repositories`

  return api.post(url, { name: repositoryName, url: respositoryUrl })
}

const getRepositoryName = url => {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)/;

  const match = url.match(regex);

  if(match[2]) {
    const values = match[2].split('/');
    return `${values[1]}/${values[2]}`
  }
}

export const destroyRepository = async (userId, id) => {
  const url = `/users/${userId}/repositories/${id}`

  return api.delete(url)
}
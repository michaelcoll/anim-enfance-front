import axios from 'axios';

const baseUrl = 'http://localhost:8082/structure';

export function list() {
  return axios
    .get(baseUrl)
    .catch((e) => {
      console.error(e);
    });
}

export function save(structure) {
  return axios
    .put(baseUrl, structure)
    .catch((e) => {
      console.error(e);
    });
}

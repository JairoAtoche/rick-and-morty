const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  // apiURL contendrá una nueva url donde se le agregará la especificidad en caso exista una llamada con id sino trae todo
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(`fetch error: ${err}`);
  }
}

export default getData;
//const DATA_URL = '../../data/data.json';
const DATA_URL = 'https://gist.githubusercontent.com/CodeDraken/c867f39113c76e3065c099baf5fdd57b/raw/c1fce946732a3c7a5709baa9eae9b3afe73a06dc/idea-data.json';

function getData(callback) {
  fetch(DATA_URL)
    .then( blob => blob.json() )
    .then( data => callback(data) );
}

export default getData;
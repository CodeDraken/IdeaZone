//const DATA_URL = '../../data/data.json';
const DATA_URL = 'https://gist.githubusercontent.com/CodeDraken/c867f39113c76e3065c099baf5fdd57b/raw/ae654ccfbe9c20f9a908c35ef3a0991f0aa1da57/idea-data.json';

function getData(callback) {
  fetch(DATA_URL)
    .then( blob => blob.json() )
    .then( data => callback(data) );
}

export default getData;
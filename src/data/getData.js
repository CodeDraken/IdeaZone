//const DATA_URL = '../../data/data.json';
const DATA_URL = 'https://gist.githubusercontent.com/CodeDraken/c867f39113c76e3065c099baf5fdd57b/raw/708cfc6923505945c53475a634f5e771cb089b6c/idea-data.json';

function getData(callback) {
  fetch(DATA_URL)
    .then( blob => blob.json() )
    .then( data => callback(data) );
}

export default getData;
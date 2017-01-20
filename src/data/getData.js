//const DATA_URL = '../../data/data.json';
const DATA_URL = 'https://gist.githubusercontent.com/AnisaIshmail/d224fcdd5e6531027067af7c783232d5/raw/533f627efcab7fe7089f0f4d1fe92b573688b46e/idea-data.json';

/*global fetch*/

function getData(callback) {
  fetch(DATA_URL)
    .then( blob => blob.json() )
    .then( data => callback(data) );
}

export default getData;
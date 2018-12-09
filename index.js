(function() {
    'use strict';

    const API_URL = "https://starwars.egghead.training/";

    const output = document.getElementById('output');
    const spinner = document.getElementById('spinner');

    function queryAPI(endpoint) {
      return fetch(API_URL + endpoint).then(response => {
        return response.ok
          ? response.json()
          : Promise.reject(Error("Unsuccessful response"));
      });
    }

    const promise = Promise.all([
      queryAPI('films'),
      queryAPI('planets')
    ])

    promise.then(([films, planets]) => {
      output.innerText =
        `${films.length} films, ` +
        `${planets.length} planets`
    })
    .finally(() => {
      spinner.remove();
    });



})();
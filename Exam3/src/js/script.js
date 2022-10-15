let url = 'http://www.omdbapi.com/';
let apiKey = '346c279c'

$.ajax(url, {
    type: 'GET',
    data: {
        s: 'Bond',
        i: '',
        apikey: apiKey
    },
    success: function (data, status, xhr) {
        innerMovies (data);
    },
    error: function (jqXhr, textStatus, errorMessage) {
        console.log(errorMessage)
    }
});

function innerMovies (data) {
    let items = data.Search;
    let newTag = document.createElement('div');
    let body  = document.getElementsByTagName('body');
    document.body.prepend(newTag);

    items.forEach(function (value) {
        newTag.insertAdjacentHTML(
            'beforeend',
            `<div class="items">
                 <div class="year">${value.Year}</div>
                 <div class="title">${value.Title}</div>
                 <img class="poster" src="${value.Poster}"</img>
                 </div>`
        );
    });
}

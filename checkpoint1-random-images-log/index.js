'use strict';

function getDogImage() {
    var n = $('#entry').val();
    fetch('https://dog.ceo/api/breeds/image/random/' + n)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});
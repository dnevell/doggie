'use strict';

function getDogImage() {
    var n = $('#entry').val();
    fetch("https://dog.ceo/api/breeds/image/random/" + n)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    let element=document.querySelector('section')
    
    responseJson.message.map(img =>
    //replace the existing image with the new one
   
    // $('.results-img').replaceWith(
    //     `<img src="${img}" class="results-img">`
    // )
    {
    let i = document.createElement("img")
    i.class = "results-img"
    i.src = img
    element.appendChild(i)
    });

    //display the results section
    $('.results').removeClass('hidden');
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
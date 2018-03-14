'use strict';

function createNewCheckbox(name, id) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = name;
    checkbox.id = id;
    return checkbox;
}

function createCheckboxLabel(forname, text) {
    var label = document.createElement('label');
    label.htmlFor = forname;
    label.appendChild(document.createTextNode(text));
    return label;
}

function changeCheckboxHandler(event) {
    if (event.target.checked) {

    }
    else console.log('hi');
}

window.addEventListener("load", function () {
    document.body.appendChild(createNewCheckbox('removePromoFromSearch', 'removePromoFromSearch'));
    document.body.appendChild(createCheckboxLabel('removePromoFromSearch', 'Remove Promo Items from Search Results'));

    document.body.querySelector('#removePromoFromSearch').addEventListener('change', changeCheckboxHandler);
});




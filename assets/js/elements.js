const cardName = document.querySelector('#cardName');
const cardNumber = document.querySelector('#cardNumber');
const cardDateMonth = document.querySelector('#cardExpDataMonth');
const cardDateYear = document.querySelector('#cardExpDataYear');
const cardCVC = document.querySelector('#cardCvc');
const sentButton = document.querySelector('.sentButton');
const inputs = document.querySelectorAll('input');
const sucessArea = document.querySelector('.sucess-sent');
const formArea = document.querySelector('.form-area');
const spans = document.querySelectorAll('span[aria-hidden="true"]');


export  {
    cardName,
    cardNumber,
    cardDateMonth,
    cardDateYear,
    cardCVC,
    sentButton,
    inputs,
    sucessArea,
    formArea,
    spans
}
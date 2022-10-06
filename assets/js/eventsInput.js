import {
    cardName,
    cardNumber,
    cardDateMonth,
    cardDateYear,
    cardCVC,
    sentButton,
    spans,
} from './elements.js';

export default function ({utilities}) {

    const nameCardFront = document.querySelector('.name-card-front');
    const numberCardFront = document.querySelector('.number-card-front');
    const monthCardFront = document.querySelector('.month');
    const yearCardFront = document.querySelector('.year');
    const cvcCardBack = document.querySelector('.code-card-back');

    cardName.addEventListener('input', ()=>{
        nameCardFront.innerText = cardName.value.toUpperCase();
    });
    
    cardNumber.addEventListener('input', ()=>{
        numberCardFront.innerText = utilities.breakString(cardNumber.value);
    });
    
    cardDateMonth.addEventListener('input', ()=>{
        monthCardFront.innerText = cardDateMonth.value;
    });
    
    cardDateYear.addEventListener('input', ()=>{
        yearCardFront.innerText = cardDateYear.value;
    });
    
    cardCVC.addEventListener('input', ()=>{
        cvcCardBack.innerText = cardCVC.value;
    });
    
    
    sentButton.addEventListener('click', (e) =>{
        e.preventDefault();
        utilities.validate();
        let valid = 0;
        spans.forEach((spanItem)=>{
            if(spanItem.ariaHidden === 'true'){
                valid += 1;
            }
            if (valid === 5){
                utilities.sentSucess();
            }
        });
    });
}





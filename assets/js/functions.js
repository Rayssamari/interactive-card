export default function Utilities({
    cardName, 
    cardNumber, 
    cardDateMonth, 
    cardDateYear, 
    cardCVC, 
    formArea, 
    sucessArea})
    {
    function breakString(value){
        let number = value;
        return `${number.slice(0,4)} ${number.slice(4,8)} ${number.slice(8,12)} ${number.slice(12,16)}`
    }
    
    function showError(input){
        let spanErro = input.nextElementSibling;
        spanErro.classList.add('visible');
        spanErro.setAttribute("aria-hidden", false);
        input.classList.add('error');
    }
    
    function removeError(input){
        let spanErro = input.nextElementSibling;
        spanErro.classList.remove('visible');
        spanErro.setAttribute("aria-hidden", true);
        input.classList.remove('error');
    }
    
    function requiredInput(input){
        if(input.value === ""){
            showError(input);
        }
        input.addEventListener('input', () => {
            removeError(input);
        });
    }
    
    function onlyNumber(input){
        let test = /^-?\d+$/.test(input.value);
        if(test === true){
            return true;
        } else {
            showError(input);
        }
        input.addEventListener('input', () => {
            removeError(input);
        });
    }
    
    function validate() {
        requiredInput(cardName);
        onlyNumber(cardNumber);
        requiredInput(cardDateMonth);
        requiredInput(cardDateYear);
        requiredInput(cardCVC);
    }
    
    function sentSucess(){
        formArea.classList.add('display');
        sucessArea.classList.remove('display');
    }

    return {
        breakString,
        showError,
        removeError,
        requiredInput,
        onlyNumber,
        validate,
        sentSucess
    }
}

import {
    cardName,
    cardNumber,
    cardDateMonth,
    cardDateYear,
    cardCVC,
    sucessArea,
    formArea,
} from "./elements.js";

import Utilities from "./functions.js";
import Events from "./eventsInput.js";


const utilities = Utilities({
    cardName, 
    cardNumber, 
    cardDateMonth, 
    cardDateYear, 
    cardCVC, 
    formArea, 
    sucessArea
});

Events({
    utilities
});

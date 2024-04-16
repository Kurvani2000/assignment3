/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;
let calculatedCost = document.getElementById("calculated-cost");

let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickMondayButton(){
    if(mondayButton.classList.contains("clicked")) {
        calculate();
    }
    else {
        numberOfDays += 1;
        calculate();

        mondayButton.classList.add("clicked");
    }
}

function clickTuesdayButton(){
    if(tuesdayButton.classList.contains("clicked")) {
        calculate();
    }
    else {
        numberOfDays += 1;
        calculate();
        
        tuesdayButton.classList.add("clicked");
    }
}

function clickWednesdayButton(){
    if(wednesdayButton.classList.contains("clicked")) {
        calculate();
    }
    else {
        numberOfDays += 1;
        calculate();
        
        wednesday.classList.add("clicked");
    }
}

function clickThursdayButton(){
    if(thursdayButton.classList.contains("clicked")) {
        calculate();
    }
    else {
        numberOfDays += 1;
        calculate();
        
        thursdayButton.classList.add("clicked");
    }
}

function clickFridayButton(){
    if(fridayButton.classList.contains("clicked")) {
        calculate();
    }
    else {
        numberOfDays += 1;
        calculate();
        
        fridayButton.classList.add("clicked");
    }
}

mondayButton.addEventListener("click", clickMondayButton);
tuesdayButton.addEventListener("click", clickTuesdayButton);
wednesdayButton.addEventListener("click", clickWednesdayButton);
thursdayButton.addEventListener("click", clickThursdayButton);
fridayButton.addEventListener("click", clickFridayButton);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearButtonClick(){
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
    fullButton.classList.remove("clicked");
    halfButton.classList.remove("clicked");

    numberOfDays = 0;
    costPerDay = 0;
    calculate();
}

clearButton.addEventListener("click", clearButtonClick);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfButtonClick(){
    costPerDay = 20

    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");

    calculate();
}

halfButton.addEventListener("click", halfButtonClick);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullButtonClick(){
    costPerDay = 35

    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");

    calculate();
}

fullButton.addEventListener("click", fullButtonClick);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    weeklyCost = numberOfDays * costPerDay;
    calculatedCost.innerHTML = weeklyCost;
}

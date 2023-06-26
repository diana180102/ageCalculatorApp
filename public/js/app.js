//inputs
const inDay = document.querySelector('#day');
const inMonth = document.querySelector('#month');
const inYear = document.querySelector('#year');

//form
const form = document.querySelector('form');

//button

const btn = document.querySelector('.btn');

const result = document.querySelector('.result');

//events

btn.addEventListener('click', validation);

inDay.addEventListener('blur', saveDate);
inMonth.addEventListener('blur', saveDate);
inYear.addEventListener('blur', saveDate);

 // Object
const calendar = {
    day: '',
    month: '',
    year: ''
}

//functions

//save date of inputs in object
function saveDate(e) {
    
    for(let input in calendar){
        if(input === e.target.id){
            calendar[input] = e.target.value;
            
        }
    }
}


//validation of inputs
function validation(e) {
    e.preventDefault();

    
    
    const {day, month, year} = calendar;
    
    for(let input in calendar){
        if(calendar[input] === ''){
            alertText('This field is required', input);
            // console.log(input);
        }
    }
            calculator(day, month, year);

            
    
}

// alert of error
function alertText(text, input) {
    console.log(text, '+', input);
    clearAlert();

    const p = document.createElement('p');
    const inputs = document.getElementById(input);

    p.textContent = text;
    p.classList.add('error');
    inputs.insertAdjacentElement('afterend', p);

    inputs.style.borderColor = 'hsl(0, 100%, 67%)';
    inputs.parentNode.style.color = 'hsl(0, 100%, 67%)';

    

    

}

function calculator(day, month, year) {
    
  const currentDate = new Date();

  const currentDay =  currentDate.getDate();
  const currentMonth =  currentDate.getMonth() + 1;
  const currentYear =  currentDate.getFullYear();
  

  let lastDayIn = new Date(year,month, 1-1);
  let validationDay = day > lastDayIn.getDate(); //verification day correct
  let validationMonth = month > 12;

    let dayResult = 0;
    let monthResult = 0;
    let yearResult = 0;

    //validation of values 
  
    if(validationDay){
         alertText('Must be a valid day', inDay.id );
        

    }else{
        if(day > currentDay){
            let daysMonth = lastDayIn.getDate();
            
            dayResult = currentDay - day;
            dayResult = daysMonth - (-dayResult);
        } else{

            dayResult = currentDay - day;
        }
    }


    if(validationMonth){
        alertText('Must be a valid month', inMonth.id );
    }else{
        
        
         if(month > currentMonth){
            monthResult = currentMonth - month;
            monthResult = 12 - (-monthResult);
            
         } else{
            monthResult = currentMonth - month;
         }
    }

    if(year > currentYear){
        alertText('Must be is the past', inYear.id );

    }else if(month > currentMonth){
        yearResult = currentYear - year;
        yearResult = yearResult - 1;
       
    }
    else{
        yearResult = currentYear - year;
    }
     
     // output day
    const days = document.querySelector('.days');
    
    const spanD = days.getElementsByTagName('span')[0];
    const previousD = spanD.previousSibling;
    previousD.nodeValue = `${dayResult} `;
    
    
     
    //output months 
    const months = document.querySelector('.months');
    
    const spanM = months.getElementsByTagName('span')[0];
    const previousM = spanM.previousSibling;
    previousM.nodeValue = `${monthResult} `;
    
    //output year

    const years = document.querySelector('.years');
    
    const spanY = years.getElementsByTagName('span')[0];
    const previousY = spanY.previousSibling;
    previousY.nodeValue = `${yearResult} `; 
    
     
     

     


}


function clearAlert() {
    
    const alert = document.querySelector('.error');

    if(alert){
        alert.remove();
    }
}




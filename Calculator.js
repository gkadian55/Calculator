let calculation = localStorage.getItem('calculation');

function updateCalculation(value){
  if (value === 'Clear'){
    calculation = '';
    localStorage.setItem('calculation', calculation);
    document.querySelector('.js-display').innerHTML = 0;
  }
  else{
    if (value === '=') {
      calculation = eval(calculation);
    }
    else{
      calculation += value;
    }
    document.querySelector('.js-display').innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
  }
}
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');
const errorInfo = document.querySelector('.error');
let costPerPerson;

const calculateCost = () => {
  if (price.value == '' || people.value == '' || tip.value == 0) {
    errorInfo.textContent = 'Provide all details';
    costInfo.style.display = 'none';
  } else {
    errorInfo.textContent = '';
    showCost();
  }
};

const showCost = () => {
  const newPrice = Number(price.value);
  const newPeople = Number(people.value);
  const newTip = Number(tip.value);

  if (newPrice <= 0 || newPeople <= 0) {
    errorInfo.textContent = 'Please provide positive numbers';
    costInfo.style.display = 'none';
  } else if (newPeople == 1) {
    errorInfo.textContent = 'Please provide more than 1 person';
    costInfo.style.display = 'none';
  } else {
    costPerPerson = (newPrice + newPrice * newTip) / newPeople;
    cost.innerHTML = costPerPerson;
    costInfo.style.display = 'block';
  }
};

countBtn.addEventListener('click', calculateCost);

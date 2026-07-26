function showWeather( city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}
showWeather(`Астрахань`,45);


const speedOfLigt = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLigt) {
    console.log(`Сверхсветовая скорость`);
  } else if (speed < speedOfLigt) {
    console.log(`Субсветовая скорость`);
  } else {
    console.log(`Скорость света`);
  }
}
checkSpeed(150000000);
checkSpeed(299792458);
checkSpeed(400000000);


const product = `Ноутбук`;
const price = 55000;

function buyProduct(budget) {
  if (budget > price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct(30000);


function greetUser(name) {
  console.log(`Привет, ${name}! Добро пожаловать.`);
}
greetUser(`Друг`);


const userName = `Вася`;
const userAge = 35;
let isProgrammer = true
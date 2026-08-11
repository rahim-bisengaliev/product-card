const person = {
  firstName: "Рахим",
  lastName: "Бисенгалиев",
  email: "rach1m@mail.ru",
  position: "Frontent Developer",
  age: 35,
  country: "Россия",
  city: "Тюмень",
  relationshipStatus: "женат"
};

console.log("задание 3:", person);


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2021,
  color: "белый",
  transmission: "автомат",
};

car.owner = person;

console.log("Задание 4:", car);


function setMaxSpeed(carObj) {
  if (carObj.hasOwnProperty("maxSpeed")) {
    return;
  }
  carObj.maxSpeed = 260; // km/h
}

setMaxSpeed(car);
console.log("Задание 5, максимальная скорость:", car);


function printProperty(obj, property) {
  console.log(obj[property]);
}

printProperty(car, "brand");
printProperty(person, "city");


const products = ["Молоко", "Хлеб", "Яйца", "сыр", "Яблоки"];
console.log("Задание 7:", products);


const movies = [
  {
    title: "Молчание ягнят",
    director: "Джонатан Демме",
    year: 1991, coverColor: "тёмно-синий",
    genre: "триллер"
  },

  {
    title: "Семь",
    director: "Дэвид Финчер",
    year: 1995,
    coverColor: "жёлтый",
    genre: "триллер"
  },

  {
    title: "Побег из Шоушенка",
    director: "Фрэнк Дарабонт",
    year: 1994, coverColor: "серый",
    genre: "драма"
  },
];

movies.push({
  title: "Игра в кальмара",
  director: "Хван Дон Хёк",
  year: 2021,
  coverColor: "розовый",
  genre: "триллер",
});
console.log("Задание 8:", movies);


const moreMovies = [
  {
    title: "Ford против Ferrari",
    director: "Джеймс Мэнголд",
    year: 2019,
    coverColor: "синий",
    genre: "драма"
  },

  {
    title: "Одержимость",
    director: "Дэмьен Шазелл",
    year: 2014,
    coverColor: "чёрный",
    genre: "драма"
  },
  {
    title: "Прочь",
    director: "Джордан Пил",
    year: 2017,
    coverColor: "красный",
    genre: "триллер"
  },
];

const allMovies = [...movies, ...moreMovies];
console.log("Задание 9:", allMovies);


function markRareMovies(moviesArray) {
  return moviesArray.map((movie) => {
    return {
      ...movie,
      isRare: movie.year > 2000,
    };
  });
}

const moviesWithRarity = markRareMovies(allMovies);
console.log("Задание 10:", moviesWithRarity);
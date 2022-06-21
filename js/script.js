"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");



const personalMovieDb = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film = prompt("Один из последних просмотреных фильмов:", ""),
    mark = +prompt("На сколько оцените его:", ""),
    film2 = prompt("Один из последних просмотреных фильмов:", ""),
    mark2 = +prompt("На сколько оцените его:", "");

    personalMovieDb.movies[film] = mark;
    personalMovieDb.movies[film2] = mark2;

console.log(personalMovieDb);










//alert('Putin Huylo')

//let rezult = confirm('putin huylo?');
//console.log(rezult);

//if (rezult === true) {
//    alert('Слава Україні');
/*} 
else {
    alert("putin huylo");
}*/




/* leftBorderWidth = 12;
console.log(leftBorderWidth);*/


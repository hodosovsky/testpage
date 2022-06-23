"use strict";



let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");


if (numberOfFilms >0 && numberOfFilms < 10){alert('просмотрено довольно мало фильмов');} 
  else  if (numberOfFilms >= 10 && numberOfFilms < 30 ){alert('вы класический зритель');}
  else  if (numberOfFilms >= 30){ alert('Вы киноман');}
       else{alert('Произошла Ошибка');
                
           
    }




const personalMovieDb = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const film = prompt("Один из последних просмотреных фильмов:", ""),
//     mark = +prompt("На сколько оцените его:", ""),
//     film2 = prompt("Один из последних просмотреных фильмов:", ""),
//     mark2 = +prompt("На сколько оцените его:", "");

    // personalMovieDb.movies[film] = mark;
    // personalMovieDb.movies[film2] = mark2;
metka: for (let i=0; i<2; i++){
   const film = prompt("Один из последних просмотреных фильмов:", "");
   const mark = +prompt("На сколько оцените его:", "");
   if (film != '' && mark != '' & mark != 0 && film != null && mark !=null && film.length < 50 )
   {personalMovieDb.movies[film] = mark;} 
   else {alert('Введите название фильма:');
   i--;                                            
   continue metka;} 
    
         

     
}

console.log(personalMovieDb); 
console.log(numberOfFilms);
// // console.log(5 === 5 && 3 > 1 || 5);
// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0){
//         continue;
//     } else { console.log(i);

// }
// }

//  for (let i = 2; i <= 16; i++){
//       if (i % 2 === 0){
//           continue;
//       } else { console.log(i); }
//      }    

// }

// for (let i = 2; i <= 10; i++){
//         if (i % 2 === 0){
//             console.log(i); 
//          } else { continue; }
        
//          if (i === 13) {break;}
//      }


    //const arrayOfNumbers = [];

    // Пишем решение вот тут
    // for (let i = 0; i<=5; i++){
    //     arrayOfNumbers[i] = i + 5;
    //     console.log(arrayOfNumbers);

    // } 
    
    // Не трогаем

    // for (let i = 20; i>=10; i--){
        
    //     if (i === 13) {break;
    // }
    // console.log(i);
    // }
    
    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for (let i = 0; i<50; i++){
    //    if (arr[i]) {result[i] = arr[i];}
    //    else {break;}
       
    // }

    //  const data = [5, 10, 'Shopping', 20, 'Homework'];
    // for(let i = 0; i<5; i++){
    //     if ('number' == typeof data[i]) { data[i] = data[i] * 2; }
    //         else {data[i] = data[i] + ' - done';}
            
    //     console.log(data);
    // }

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];
    
    // for (let i=data.length; i >= 0; i--){
        
    //     result[data.length - i] = data[i];
       
        
    // }
    // console.log(result);  
    
//     const lines = 5;
//     let result = '      *';
      
//     for (let i = 0; i<=lines; i++){
//         console.log(result);
//         if (result.length(i) == ' ' && result.length(i-1) ) {
//             result.length(i) = '*';
//             result.length(i-1) = '*';

//         }


//         let lines = 7;
//         let str = " ";
//         let star = "*";
//         for (var i = 0; i < lines; i++) {
//         str += star;
//         console.log(str);
// }



// let i = 0,
//   j = 0;
// // Желаемое количество строк
// let max = 6;
// let lines = "",
//   result = "";

// while (i < max) {
//   lines = "";
//   result = "";
//   for (let j = 0; j < max - i; j++) lines += " ";
//   for (j = 0; j < 2 * i + 1; j++) result += "*";
//   console.log(lines + result);
//   i++;
// }


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

       // console.log(result);
        //k = k.slice(0, -1);
      //  result =result +'**';
        
    


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


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


function sayHello(name) {
return 'Привет, ${name}';
}
sayHello('Антон');

function returnNeighboringNumbers(a) {
    const  arr = [a-1, a, a+1 ];
    return arr;

}

returnNeighboringNumbers(5);


function getMathResult(a, b) {
    if (b !== 0 && b > 0 && typeof(b) !== null){
        let result = a;
        let c = a;
        for (let i=1; i < b; i++)
        {            
            result = `${result}---${c + a}`;
            c = c + a;             
        } 
        return result;
        
    } else {return a;}

}

getMathResult(3,  10);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    console.log(str);
    return str;
}

getMathResult(10, 5);

function calculateVolumeAndArea(a){
if (a <= 0 || a == null || a % 2 != 0 ){
    console.log('При вычислении произошла ошибка');
} else {
    console.log(`Объем куба: ${Math.pow(a, 3)}, Площадь всей поверхности: ${6 * Math.pow(a, 2)}`);
}

}

calculateVolumeAndArea(0);

function getCoupeNumber(coupe) {
    if (typeof(coupe) !== 'number' || !Number.isInteger(coupe) || coupe < 0)   {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (coupe === 0 || coupe > 36 ){
        return "Таких мест в вагоне не существует";
    }else{
        let numb;
        if (coupe % 4 === 0) {
            numb = coupe / 4;
        } else {
            numb = Math.floor(coupe / 4) + 1;
        }

        return numb;
    }}


   console.log(getCoupeNumber(35)) ;

   function getTimeFromMinutes(time) {
    if (typeof(time) !== 'number' || !Number.isInteger(time) || time <= 0)   {
        return "Ошибка, проверьте данные";
    } else {
        let strTime;
        let hour = Math.floor(time / 60);
        let minutes = time - (hour * 60);
        let hourstr;

        switch (hour){
        case 0: hourstr = 'Часов';
                break;
        case 1: hourstr = 'Час';
                break;
        case 2:
        case 3:
        case 4: hourstr = 'Часа';
                break; 
        default: hourstr = 'Часов';
                 break;
                }  

    strTime = `Это ${hour} ${hourstr} и ${minutes} минут` 
        return strTime;
            }         
    }
   console.log(getTimeFromMinutes(100)) ;

   function findMaxNumber() {
    for (let i = 1; i<=4; i++){
        a[i] = +prompt(`Введите ${i} число:`, "");
        if (typeof(a[i - 1]) !== 'number'){
            return console.log("0");
        } else {let min;
        min = math.min[a] 
        return console.log(min);}
    }

   findMaxNumber();
            
            
            
            
            return console.log("ok");}


       
    
    findMaxNumber(1, 2, 3, 5 );

    


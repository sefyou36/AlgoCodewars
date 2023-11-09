// const stringToNumber = function(str){
//     // put your code here
//     return str - "";
//     return null ;
//   }

// //   //Grasshopper - Grade book
//   function getGrade (s1, s2, s3) {
//     var average = Math.round(s1 + s2 + s3)/3;
//      if(average <= 100 && average >= 90){
//      return 'A';
//    } else if(average <= 90 && average >= 80){
//      return 'B';
//    } else if(average <= 80 && average >= 70 ){
//      return 'C';
//    } else if(average <= 70 && average >= 60){
//      return 'D';
//    } else {
//      return 'F';
//  }
//  }

// //Will there be enough space?
// function enough(cap, on, wait) {
//     // your code here
    
//   if(on + wait <= cap){
//       return 0
//       }
//     else if(on + wait > cap){
//       return (  (on + wait) - cap )
//     }
  
//   }


// // Difference of Volumes of Cuboids
// function findDifference(a, b) {
//     //loading...
    
//    var d = 0;
//     d= a[0]*a[1]*a[2] - b[0]*b[1]*b[2];
//     if(d < 0){
//       d= d* -1
//     }
//     return d
      
//   }

// // L1: Set Alarm
// function setAlarm(employed, vacation){
//     return employed && !vacation 
// }

// // You only need one - Beginner
// function check(a, x) {
//     // your code here
//    return a.includes(x)
//   }

// //   Convert a string to an array
function stringToArray(string){

  let myletter = "";
  let myarr = [];
  
  for(let i = 0 ; i < string.length; i++){
  //  console.log(string[i])
   if( string[i] !== " "){
      myletter = myletter + string[i];
   }else{
      myarr.push(myletter)
      myletter = "";
   }
  } myarr.push(myletter)
     return myarr;
  }

// // Simple multiplication
// function simpleMultiplication(number) {
//     // your code........
//   if(number % 2 === 0){
//     return number*8;
//   }else {
//     return number*9;
//   }
// }


// // Regex validate PIN code

// function validatePIN (pin) {
//   //return true or false
//     if (pin.length === 4 || pin.length === 6) {
      
//         for (let i = 0; i < pin.length; i++) {
//             if (isNaN(parseInt(pin[i])) ) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return false;
// }


// var isAnagram = function(test, original) {
//   let objtest = {};
//   let objorig = {};
//    if (test.length !== original.length) {
//       return false;
//    }
//     for(let i = 0 ; i< test.length; i++){  
//       if(objtest[test[i]])
     
//    }


// const stringToNumber = function(str){
//     // put your code here
//     return str - "";
//     return null ;
//   }

  //Grasshopper - Grade book
  function getGrade (s1, s2, s3) {
    var average = Math.round(s1 + s2 + s3)/3;
     if(average <= 100 && average >= 90){
     return 'A';
   } else if(average <= 90 && average >= 80){
     return 'B';
   } else if(average <= 80 && average >= 70 ){
     return 'C';
   } else if(average <= 70 && average >= 60){
     return 'D';
   } else {
     return 'F';
 }
 }
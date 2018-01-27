function centuryFromYear(year) {
  const len = year.length;
  const first2 = year.slice(0, 1);
  let output = 1;

  console.log(first2);
  
  if(len == 4){
      output += first2; 
  } else if(len == 3){
      output += first2[0];
  }
  
  return output;
}

centuryFromYear(2017);

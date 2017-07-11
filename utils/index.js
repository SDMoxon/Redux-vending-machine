exports.changeCalculator = function (num) {
  const coinage = [2,1,0.50,0.20,0.10,0.05];
  const Obj = {};
  
  coinage.forEach((elem) => {
    if (elem <= num) {
      if (num % elem === 0) {
        Obj[elem] = (num / elem);
        num -= elem * (num / elem);
      }
      else {
        Obj[elem] = 1;
        num -= elem;
      }
      
    }
  });
  
  return Obj;  
};

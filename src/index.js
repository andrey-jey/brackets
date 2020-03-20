module.exports = function check(str, config) {

  let option = config.map(item => item.join(''));
  let testItem = "";
  let sub = str;

  for (let j = 0; j < str.length; j++) {
      for (let i = 0; i < option.length; i++) {
          if (sub.includes(option[i])) { 
              testItem = option[i];

              sub = sub.replace(testItem, "");
              i--;
          }
      }
  }
  if (sub === '') return true;
   else return false;
}
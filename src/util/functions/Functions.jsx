/*
-* Module to export resusable functions
*/

//Global function to filter Table
export const FilterTable = (array, word) => {
  word = word.toLowerCase();
  var finded = [];
  let added = false;
  array.forEach(element => {
    Object.keys(element).forEach(item => {
      try {
        if (element[item].toLowerCase().indexOf(word) !== -1) {
          added = true;
          return true;
        }
      } catch (error) {
        // console.log("catch "+error);
      }
    });
    if (added) {
      finded.push(element);
      added = false;
    }
  });
  return finded;
};

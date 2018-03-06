'use strict'

function sort(input) {
  for (var i = 0; i < input.length; i++) {
     for (var j = i + 1; j < input.length  ; j++) {
       if (input[i] > input[j]) {
         var tmp = input[i];
         input[i] = input[j];
         input[j] = tmp;
       }
     }
  }
  return input;
}

module.exports = sort

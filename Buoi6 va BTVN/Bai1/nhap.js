var myFunction = {
    Author: 'my name ',
    date: '15-12-2012',
    questionAnswer :["yes","yes","no","no","no","yes","no"],
}    

i = 0
 
myFunction.questionAnswer.forEach(function(current_value, index, initial_array) {
    if (current_value == "yes") {
            i = i +1 ;
        }   
    });

console.log(i)

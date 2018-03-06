// console.log("Hello")
//
// var print  = (callback) => {
//   console.log("Hello Hello");
//   setTimeout(() => {
//     console.log("Count done");
//     callback();
//   },1000 );
// }
//
// var callbackFuntion = () => {
//   console.log("End");
// }
//
// console.log("Start");
//
// print(callbackFuntion);
//
// // console.log("End")

var countDown = (time) => {
  for (let i = time; i > 0 ; i=i-1) {
    setTimeout(() => {
      console.log(i);

    }, (time-i)*1000);
  }
}

var time = 5 ;

countDown(time);

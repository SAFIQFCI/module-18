// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }

// var roastGiven = 1;
// while(roastGiven < 10){
//     console.log('Roast Den, gift item ansi');
//     roastGiven++
//     if(roastGiven > 4){
//         break;
//     }
// }

// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'hes']
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'pen'){
//         break
//     }
//     console.log(item);
// }

// var numbers = [85, 96, 35, 68, 78, 32, 15, 25, 38, 258];

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if(number > 100){
//         break;
//     }
//     console.log(number);
// }

var numbers = [85, 96, 35, 68, 78, 32, 15, 25, 38, 258];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}
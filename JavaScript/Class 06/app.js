console.log("JavaScript Connected!");





// var fruit1 = "Apple";
// var fruit2 = "Banana";
// var fruit3 = "Mango";
// var fruit4 = "Grapes";
// var fruit5 = "Strawberry";





// array === > Collection of data.


var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes" , "Strawberry" , "Pineapple" , "Kiwi" ];

// console.log(fruits);
// console.log(fruits[4]);

// var lastItem = fruits.pop()

// console.log(fruits);

// console.log(lastItem);

// fruits.push("dragonfruit" , "Peach");

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// fruits.unshift("Watermelon" , "Cherry");

// console.log(fruits);


// Array Methods!

// .pop() ====> removes an item from the end of the array and returns it!
// .push() ====> adds an item to the end of the array!
// .shift() ====> removes an item from the start of the array and returns it!
// .unshift() ====> adds an item to the start of the array!

// .splice(start,deleteCount,add....) ===> modification to the array.


// console.log(fruits);

// fruits.splice(4,0,"coconut");

// console.log(fruits);

// .slice(start , end) ===> copy of an array;


// var fruitCopy = fruits.slice(2,4);
// var fruitCopy = fruits.slice(-4);

// console.log(fruitCopy);






// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);



// for(init;condition;inc/decre (updation)){
//     //block of code
// }


// for(var i = 1; i <= 5; i++){
//     console.log("Hello World!");
    
// }




// for(var i = 1; i <= 10;i++){
//     console.log(i);  
// }



// for(var i = 10; i >= 1; i--){
//     console.log(i);
    
// }


var userTable = +prompt("Which table");
var userTimes = +prompt("how many times?");


for(var i =1 ; i <= userTimes;i++){

    // console.log(userTable + " x " + i + " = " + (userTable * i));

    document.write(userTable + " x " + i + " = " + (userTable * i) + "<br />")
    



}
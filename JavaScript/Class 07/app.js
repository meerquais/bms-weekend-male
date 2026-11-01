console.log("JavaScript Connected!");




// var userCity = prompt("type your city name");
// var cities = ["karachi" , "lahore" , "islamabad","quetta"];
// var isFound = false;

// for(var i = 0; i < cities.length; i++){

//     if(userCity === cities[i]){
//         console.log("City Found!");
//         isFound = true;
//         break;
        
//     }
//     // else{
//     //     console.log("Not Found!");
        
//     // }
// };

// if(!isFound){
//     console.log("Not Found!");
    
// }


// for(var i = 1; i <= 5 ; i++){


//     console.log("Outer Loop! " + i);
    
//     for(var j =1 ; j <=5 ; j++){


//         console.log("Inner Loop " + j + " " + "Outer Loop " + i);
        

//     }





// }
















// var userCity = prompt("type your city name");
// var cities = ["karachi" , "lahore" , "islamabad","quetta"];
// var isFound = false;

// for(var i = 0; i < cities.length; i++){

//     if(userCity.toLowerCase() === cities[i]){
//         console.log("City Found!");
//         isFound = true;
//         break;
        
//     }
// };

// if(!isFound){
//     console.log("Not Found!");
    
// }


// var msg = "Hello World";


// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());


// var msg = "Hello World!"

// // console.log(msg[0]);

// var msgCopy = msg.slice(0,5);

// console.log(msgCopy);


var text = `It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth,world war ii the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his.`


console.log(text);


// for(var i = 0; i < text.length;i++){

//     if(text.slice(i, i + 12) === "World War II"){
//         console.log("True " + i);

//         text = text.slice(0, i) + "Second World War" + text.slice(i + 12)
        
//     }
// }

// console.log(text);


// var copy = text.replace("World War II" , "Second World War")
// var copy = text.replaceAll("World War II" , "Second World War")
var copy = text.replace(/World War II/gi , "Second World War")

console.log(copy);






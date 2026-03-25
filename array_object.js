// let prices = [100, 200, 300];
// let taxed = prices.map(p => p * 1.18);

// let arr=[1,2,3,4,5]
// arr.splice(0,2);
// console.log(arr)


// let nums=[1,2,3,4,5]
// nums.forEach(n => console.log(n * 2));


// let arr=[1,2,3,4,5]
// let newarr= arr.map(function(val){
//     return newarr.puch(69);
// })
// console.log(newarr);



// const prices = [100, 200, 300];

// function addTx(prices){
//     let tax= prices *0.18;
//     return prices+tax;
// }

// let finalPrice= prices.map(addTx);
// console.log(finalPrice);



// let arr=[1,2,3,4,5,6,7,8,9]

// function tryFilter(val){
//     if(val<4) return true;

// }
// let newArr=arr.filter(tryFilter)

// console.log(newArr)



// //add "mango" at the end of the and "pineapple" at begnning of the array

// let fruits =["apple", "banana"];
// fruits.push("mango");
// fruits.unshift("pineapple");
// console.log(fruits);


// // // Replace "banana" with "kiwi"
// let fruits =["pineapple","apple", "banana","mango"];
// fruits.splice(2,1,"kiwi");
// console.log(fruits);


// // // insert "red" and "blue" at the index "1"in the array given below
// let colour =["green","yellow"];
// colour.splice(1,0,"red","blue");
// console.log(colour);



// //Extract only middel 3 elements from array
// let items= [1,2,3,4,5,6]
// let newItem=items.slice(1,4);
// console.log(newItem);

// // sort this array alphabatically and then reverse it 

// let names= ["zara","arjun","mira","bhavya"]
// // let arr =
// names.sort();
// console.log(names);
// names.reverse();
// console.log(names);

// // use .map() to square each number
// let arr=[1,2,3,4]
// let newArr= arr.map(function(n){
//     return n*n
// })

// console.log(newArr)

// // Use filter to keep number greater then 10
// let arr =[5,12,8,20,3]






// //                          OBJECT


// let student = {
//     name: "Vidit",         
//     age: 20,                
//     isLearningMERN: true,
//     greet: function() {     
//         console.log("Hello!");
//     }
// };

// console.log(student.name);





// const user = {
//     firstName: "Vidit",
//     age: 20,
//     city: "Jaipur",
//     profession: "B.Tech Student"
// };
// const { profession: job } = user;

// console.log("\nRenamed Variable:");
// console.log(job); // "B.Tech Student"


const student = {
    name: "Vidit",
    college: "B.Tech",
    city: "Jaipur"
};

for (let key in student) {
    // key is "name", then "college", then "city"
    // student[key] gives the value
    console.log(`${key}: ${student[key]}`);
}

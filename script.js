// let x= 10
// console.log(x)

// let a=5;
// let b=2;
// let z=a%b;
// console.log(z)

// let age= 18
// console.log(age<18||age>18)

// let user = null;
// console.log(user?.name);

// let user1 = {
//   name: "Vidit",
//   address: {
//     city: "Delhi"
//   }
// };

// console.log(user1?.address?.city);

// let name = "Vidit";
// console.log("Hello, " + name + "!");

// console.log(`Hello, ${name}!`);

// console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991
// let a=(Number.MAX_SAFE_INTEGER.n);
// console.log(BigInt(a)+1n);

// let a= true+false
// let a= null+1
// let a= "5"+5
// let a= !!undefined
// let a= 10/"hello"
// console.log(a)

// let loggin= true;
// let hasToken =false;
// let asked= loggin && hasToken ? "Allowed":"deny";
// console.log(asked)

// let a= 5
// a++
// console.log(a)

// function getGrade(score){
//     if (score==100 &&score>90) return "A+";
//     else if(score<=89&&score>=80)return"A";
//     else if(score<=79&&score>=70)return"B";
//     else if(score<=69&&score>=60)return"C";
//     else if(score<=33&&score>=50)return"D";
//     else if(score<=0&&score>=32)return"Fail";
//     else return "Error"
// }
// console.log(getGrade(66))


// let name = "vidit";
// let hasName = !!name;
// console.log(hasName);


// // Print Numbers from 1 to 10
// for (let i =1;i<=10;i++){
//     console.log(i)
// }


// // Print Even Numbers
// for (let i=1;i<=20;i++){
//     if (i%2==0) {
//         console.log(i)
//     }
// }

// Print Odd Numbers
// for (let i=1;i<=20;i++){
//     if (i%2!=0){
//         console.log(i)
//     }
// }

// // Sum of Numbers
// sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i
// }
// console.log(sum)

// // Multiplication Table Print the table of 5.
// for (let i=1;i<=10;i++){
//     mul=i*5
//     console.log(mul)
// }

// // Reverse Numbers Print numbers from 10 to 0.
// for(let i=10;i>=0;i--){
//     console.log(i)
// }


// // Factorial of a Number Calculate the factorial of 5.
// fact=1
// for (let i=5;i>0;i--){
//     fact*=i
// }
// console.log(fact)




// // Print Stars Pattern
 //// *
// // **
// // ***
// // ****
// //*****

// for (let i =1;i<=5;i++){
//     let row= "";
//     for (let j=1;j<=i;j++){
//         row+="*"                             //wasn't able to solve this because of (row="")
//     }
//     // console.log("*");
//     console.log(row);
// }

// // How to get input in browser
// let val=number(prompt("give the no."));
// console.log(typeof val)


// for (let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// }




// let car = { make: "Toyota", model: "Corolla", year: 2020 };

// for (let keys in car) {
//   console.log(keys); // Prints: make, model, year
// }


// for(let i=1;i<=100;i++){
//     console.log(i)
//     if (i%7===0){
//         break
//     }
// }


// for (let i=1;i<=100;i++){
//     if(i%3===0){
//         continue
//     }
//     console.log(i)
// }



// count=0
// for (let i=1;i<=100;i++){
//     if(i%2===1){
//         count++
//         console.log(i)
//     }
//     else if(count===5){
//         break
//     }
// }


// //                                   FUNCTION

// The "Modern" way Arrow Functions
// const subtract = (a, b) => a - b;
// console.log(subtract(10, 5));


// function add(a, b){
//     return a + b;
// }

// console.log(add(5, 3));

// const greet=(a) =>{
//     console.log("hi")
// }

// greet();




// function dance(name){
//     console.log(`${name} naach rha hai`)
// }

// dance("ghoda");
// dance("kutta");
// dance("Chutiya");
// dance("Gadha");
// dance("Billa");
// dance("Hiran");



// function checkEven(a){
//     if(a%2===0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// checkEven(7)

// const checkEven=(v1)=> v1%2===0;
// console.log(checkEven(7)?"even":"odd");

// function max(a,b){
//     if (a===b){
//         console.log("both r same")
//     }
//     console.log((a>b)?"a is greater":"b is greater");
// }

// let val1=Number(prompt("enter the value a"));
// let val2=Number(prompt("enter the value b"));
// max(val1,val2)



// //Factorial Write a function to calculate the factorial of a number.
// function factorial(n){
//     if(n>0){
//         fact=1
//         for (let i=n;i>0;i--){
//             fact*=i
//         }
//         console.log(fact);
//     }
//     else{
//         console.log("in valid n");
//     }

// }

// factorial(6);


// // First Class function
// function abcd(val){
//         val();
// }
// abcd(function(){
//     console.log("hello")
// })


// let nums = [1,2,3,4];
// nums.forEach(function(num){
//     console.log(num);
// });

//            // IIMF
// (function(){
//     console.log("hello")
// })();


// // Q.2convert below func into arrow
// function multiply(a,b){
//     return a*b
// }

// let multiply= (a,b) =>a*b;
// console.log(multiply(10,5));





// // use rest parameter to accept any number of score and return the total

// function totalScore(...score){
//     sum=0
//     for(let i=0 ;i<score.length;i++ ){
//         sum+=score[i];
//     }
//     return sum;
// }

// console.log(totalScore(1,2,3,4,5,6));



// // fix the func using early return
// function checkAge(age){
//    return (age<18)?"too young":"allowed";

// }

// console.log(checkAge(6));



// function abcd(val){
//     val();
    
// }
// abcd(function(){
//     console.log("hey");
// });


// (function(){
//     console.log("hello");
// })();



// // write the code for BMI calculator

// function bmi(w,h){
//     return w/(h**2);
// }
// console.log(bmi(61,1.6).toFixed(2));



// function discountCalculstor(discount){
//     return function(price){
//         return price=price - price * (discount/100);
//     }
// }
// let discounter =discountCalculstor(10)
// console.log(discounter(200)) 




// const x= 42;
// x=34;
// console.log(x);


// let a=23;
// if(a!=99){
//     console.log(a);
    
// }
// console.log(a);


// let a=11;
// console.error("bhag jaa");

// let name= "balbasaur";
// let text = `We are the so-called ${name} from the north.`;
// console.log(text)


// arr= [1,2,3,4,5]
// newArr= arr.add 
// console.log(newArr)

// arr=[5,2,9,1];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// };
// console.log(max);

// arr=[1,2,3,4,5]
// let count=0;
// for (let i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         // newArr=arr[i]
//         count+=1
//     }
// }
// console.log(count)

// arr=[2,3,4];
// let total=0;
// for (let i=0;i<arr.length;i++){
//     total+=arr[i];
// }
// console.log(total/arr.length);

// arr=[2,8,3,10];
// for (let i=0;i<arr.length;i++){
//     if(arr[i]>=5){
//         console.log(arr[i])
//     }
// }

// arr=[1,2,3,4];
// let mul=1;
// for(let i=0;i<arr.length;i++){
//     mul*=arr[i];
// }
// console.log(mul)

// arr=[5,2,9,1];
// // let min=[0]
// // for (let i=0;i<arr.length;i++){
// // }
// let sr= arr.sort(function(a,b){
//     return a-b;
// })
// console.log(sr[1])
// // console.log(sr)




// arr=[5,2,9,1];
// let min= Infinity;
// let secondMin=Infinity;
// for (let i=0; i<arr.length;i++){
//     if (arr[i]<min){
//         secondMin=min;
//         min=arr[i];
//     }
//     else if(arr[i]<secondMin && arr[i]!==min){
//         secondMin=arr[i];
//     }
// }
// console.log(secondMin);




// 7️ Check if array contains duplicates

// arr=[1,2,3,2];
// let i=0;
// for (let j =0;j<arr.length;j++){
//     if (){}
// }

// let aName = "vidit";
// console.log(aName.substring(1))

// let averageOf=(num1,num2) => {
//     let avg= (num1+num2)/arguments.length;
//     return avg;
// }
// console.log(averageOf(6,2));


// let obj={
//     name: "vidit",
//     age:21,
//     address:{
//         city:"jaipur",
//         pincode: 213441,

//     // lat: 123,
//         //     long:432
//     }
// };
// console.log(obj.address.pincode);


// let college = "JECRC"; // Outer

// if (true) {
//     let college = "University"; // Shadowing happens here
//     console.log(college); // Output: "University"
// }

// console.log(college); // Output: "JECRC" (Outer is still there, just hidden)


// var x = 10;

// if (true) {
//     let x = 20; 
//     console.log(x)
// }


// const numbers = [10, 20, 30, 40];

// const totalSum = numbers.reduce((acc, curr) => {
//     return acc + curr;
// }, 0); // 0 is the initialValue for the accumulator

// console.log(totalSum); // Output: 100


// const cart = [
//     { item: "Laptop", price: 50000, quant:6 },
//     { item: "Mouse", price: 1500 ,quant:7 },
//     { item: "Keyboard", price: 3000 ,quant:3 }
// ];

// const bill = cart.reduce((total, product) => (total + product.price), 0);

// console.log(`Total Bill: ₹${bill}`); // Output: ₹54500


// const users = [
//   { name: 'Alice', premium: true },
//   { name: 'Bob', premium: false },
//   { name: 'Charlie', premium: true }
// ];

// const premiumUsers = users.filter(user => user.premium);
    

// // Result: [{ name: 'Alice'... }, { name: 'Charlie'... }]

// let students = [
//     {name: "Hema", rollnumber: 1, marks: 50},
//     {name: "Mahe", rollnumber: 2, marks: 40},
//     {name: "Priya", rollnumber: 3, marks: 80},
//     {name: "Kayal", rollnumber: 4, marks: 90}
//     ];

// const newStu= students.filter(( )=>{
//     const totalMarks= students.marks<60;
//     return totalMarks;
// });
// const add= totalMarks.map ((n)=>{
//     return totalMarks+20;
// })

// const newArr= add.reduce((acc,cur)=>{
//     return acc+cur;
// });
// console.log(newArr);


// function greet(){
//     console.log("hello");
// }
// let hello=greet;
// hello();

// console.log(greet);

// let greet= function(){
//     console.log("hello ji")
// }

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside'); 
// Logs: 
// Outer Variable: outside
// Inner Variable: inside

function createCounter() {
    let count = 0; // This is "private"

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    }
}

const myCounter = createCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.increment(); // 3
myCounter.decrement(); // 4
console.log(myCounter.count); // undefined (You can't touch it directly!)


function makeGreeting(name) {
    const message = "Hello " + name;

    // We WRAP the return inside a new function
    return function() {
        return message; 
    };
}

const greetHema = makeGreeting("Hema"); 
// 'greetHema' is now a FUNCTION. 
// It "captured" the message variable.

console.log(greetHema()); // "Hello Hema"
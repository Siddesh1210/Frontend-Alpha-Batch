//Return statment in function
// function add(num1,num2)
// {
//     return (num1+num2);
//     console.log("function is working after return stmt");
// }

// let result=add(10,30)
// console.log(result);

// Array - fetch , add , delete , update
// let students=["siddesh","Raj","Aniket","Rahul","Smruti"]
// console.log(students[4]);
// for(let i=0;i<students.length;i++)
// {
//     console.log(students[i]+" is present at index "+i);
// }
//Add
// let students=["siddesh","Raj","Aniket","Rahul","Smruti"]
// students.push("Aman"); // add at the end of array
// students.unshift("Aman"); //add at the begining of array
//Delete
// students.pop() //Last element will be deleted
// students.shift(); //Starting element get deleted
//Update
// students[4]="smruti";
//splice
// arrName.splice(1,2,"Rakesh")
// students.splice(1,2,"Rakesh")
// console.log(students);

// (a,b,c)=>
// {

// }
//Map --> Point to each element and return one new array
// let numbers=[1,2,3,4,5];
// let newArray=numbers.map((x)=>
// {
//     return (x*x);
// }
// )
// console.log(newArray);
// (x)=>
// {

// }
//Filter --> Point to each element and return new array based on certain condition 
// let numbers=[1,2,3,4,5];
// let bigNumber=numbers.filter((x)=>
// {
//     console.log(x);
//     return x>3;
// })
// console.log(bigNumber);
//Reduce --> return one value based on certain condition
// let numbers=[1,2,3,4,5];
// x1=1; //previous element
// x2=2 //current element
// // 2nd Iteartion
// x1=3
// x2=3
// // 3rd Iteration
// x1=6
// x2=4
// //4th Iteration
// x1=10
// x2=5
// x1=15
// let numbers=[1,2,3,4,5];
// let answer=numbers.reduce((x1,x2)=>
// {
//     return x1+x2;
// })
// console.log(answer);
//object -- fetch , update ,delete , add
// let car={
//     name:"kia",
//     price:1000000,
//     color:"White",
//     mileage:"30km/hr",
// }
//Update your key from your object
// car.mileage="20km/hr";
//Delete 
// delete car.color;
//add
// car.seats=7;
// console.log(car);

//Array of object
// let stocks=[
//     {
//         name:"MRF",
//         price:80000,
//     },
//     {
//         name:"JSW",
//         price:50000,
//     },
//     {
//         name:"Birla",
//         price:100000,
//     },
//     {
//         name:"Tata",
//         price:10000
//     }
// ]

// console.log(stocks[0].price)
// stocks.map((x)=>
// {
//     console.log(x.name)
// })

//Lucky Draw Winner
let users=[
    {
        name:"Siddesh",
    },
    {
        name:"Pranati",
    },
    {
        name:"Jay",
    },
    {
        name:"Anurag",
    },
    {
        name:"Ankita",
    },
    {
        name:"Rahul",
    }
]
let random=Math.floor(Math.random()*6)
console.log("Winner is : "+users[random].name)
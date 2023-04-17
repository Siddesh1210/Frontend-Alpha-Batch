function check()
{
    let tempEmail=document.getElementById("email").value;
    let tempPswd=document.getElementById("password").value;
    // alert(tempEmail)

    let allUsers=[];


    fetch('https://js-project-alpha-default-rtdb.firebaseio.com/users.json').then(response => response.json() ).then( data => {
        // console.log(data) //Nested Object

        for(let x in data)
        {
            tempUser={
                ...data[x]
            }

            allUsers.push(tempUser);
        }
        // console.log(allUsers); //Array of object
        let testUser=allUsers.filter((x)=>
        {
            return x.email==tempEmail && x.password==tempPswd
        })

        if(testUser.length==1)
        {
            alert("Login successfull")
        }
        else
        {
            alert("No such user exist!!!")
        }

    } )
}


//Data 1.Json 2.Nested Object 3.Array of Object 4.Filter

//Rest function 
// function sum(...args)
// {
//     console.log(args) //[1,2,3,4,5]
// }

// sum(1,2,3,4,5)
// sum(2,4,6,8,10,12,14)

// Spread Operator
// let arr1=[1,2,3];
// let arr2=[1,2,3,4,5,6];
// console.log(arr2); //[1,2,3,4,5,6]
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[...arr1,...arr2];
// console.log(arr3);


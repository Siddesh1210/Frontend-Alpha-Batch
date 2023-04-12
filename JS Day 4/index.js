//Element selector by ID
// let elemList1=document.getElementById("list1");
// elemList1.innerHTML="List1 is Updated!!!"
// console.log(elemList1);

//Element selector by Class
// let ele=document.getElementsByClassName("list");
// // console.log(ele.innerHTML);
// for(let i=0;i<ele.length;i++)
// {
//     ele[i].innerHTML="List has been Modified";
// }

//Element selector by Tag
// let ele=document.getElementsByTagName("h1");
// console.log(ele);
// for(let i=0;i<ele.length;i++)
// {
//     ele[i].innerHTML="Heading Tag has been Modified";
// }

//QuerySelector
// document.querySlectorAll("tagname.className")
// let ele=document.querySelectorAll("p.para");
// console.log(ele);

// let head1=document.getElementById("head1");
// head1.style.color="white";
// head1.style.backgroundColor="blueviolet";
// head1.style.fontSize="50px";
// head1.style.fontWeight="bolder";

// function btnClick()
// {
//     // console.log("Button was clicked");
//     let ele=document.getElementById("btn");
//     ele.innerHTML="I'm Modified";
// }
//Disappearing Ball Game
// function boxover()
// {
//     console.log("Event is working!!!")
//     let box=document.getElementById("box");
//     box.style.display="none";
// }

// function boxOut()
// {
//     alert("Event is working");
// }

// function keyDown()
// {
//     alert('Key is pressed!!!')
// }

// function keyUp()
// {
//     alert('Key is Released!!!')
// }


// let btn=document.getElementById('btn');
// btn.addEventListener("click",()=>
// {
//     alert("Button was clicked!");
// }
// )

function yes()
{
    let heading=document.getElementById("heading");
    heading.innerHTML="Thankyou for joining my class!!!"
}

function no()
{
    let heading=document.getElementById("heading");
    heading.innerHTML="No worry! You can join my next class."
}
//Create Element
// 1.Parent Element Target
// 2.Create Element
// 3.Append/ Add

// let parent=document.getElementById("container");
// let divTag=document.createElement('div');
// parent.appendChild(divTag);
// // divTag.innerHTML='Child Element has been created!';
// // divTag.classList.add('new-child');
// let headTag=document.createElement('h1');
// divTag.appendChild(headTag);
// let paraTag=document.createElement('p');
// divTag.appendChild(paraTag);

let usersEmail=[];
let temp=1;
function register()
{
    let name=document.getElementById("userName").value;
    let email=document.getElementById("userEmail").value;
    // console.log(name,email);
    usersEmail.map((x)=>
    {
        if(x==email)
        {
            temp=0;
        }
    })
    if(temp==0)
    {
        // alert("You have already registered")
        let exist=document.getElementById("exist");
        document.getElementById("p-success").classList.add('d-none');
        exist.classList.remove('d-none');
        exist.classList.add('d-alert');
        setTimeout(()=>
        {
            exist.classList.add('d-none');
            exist.classList.remove('d-alert');
        },3000)
    }
    else{
        usersEmail.push(email);
        let parent=document.getElementById("parent");
        let divTag=document.createElement('div');
        let h3Tag=document.createElement('h3');
        let paraTag=document.createElement('p');
        h3Tag.innerHTML=name;
        paraTag.innerHTML=email;
        parent.appendChild(divTag);
        divTag.appendChild(h3Tag);
        divTag.appendChild(paraTag);
        divTag.classList.add('div-card');
        h3Tag.style.margin="5px 0px";
        paraTag.style.margin="5px 0px";
        document.getElementById("userName").value="";
        document.getElementById('userEmail').value="";
        let sucess=document.getElementById("p-success");
        sucess.classList.remove('d-none');
        sucess.classList.add('success');
        setTimeout(()=>
        {
            sucess.classList.remove('success');
            sucess.classList.add('d-none');
        },3000)
    }   
}


function register()
{
    let userName=document.getElementById("name").value;
    let userEmail=document.getElementById("email").value;
    let pswd1=document.getElementById("pswd").value;
    let pswd2=document.getElementById("cpswd").value;
    // alert(userEmail);

    if(pswd1==pswd2 && userName!="" && userEmail!="")
    {
        users={
            name:userName,
            email:userEmail,
            password:pswd1,
        }

        fetch('https://js-project-alpha-default-rtdb.firebaseio.com/users.json',{
            method:'post',
            body:JSON.stringify(users)
        }).then(()=>
        {
            alert("Data has been added!!!");
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("pswd").value="";
            document.getElementById("cpswd").value="";
        })


    }
    else if(pswd1!=pswd2)
    {
        alert("Please enter the same password")
    }
    else
    {
        alert("Please fill all the input fields")
    }

    



}
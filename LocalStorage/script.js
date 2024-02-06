function adddata()
{
    const id=document.getElementById("id11");
    const idvalue=id.value;
    const email=document.getElementById("email11");
    const emailvalue=email.value;
    const name=document.getElementById("name11");
    const namevalue=name.value;
     const phone=document.getElementById("phone11");
     const phonevalue=phone.value;

     if(idvalue=="")
     {
        alert("User Id field Can't be Empty");
        return false;
     }
     else if(name.value=="")
     {
        alert("User name field Can't be Empty");
        return false;
     }
     else if(email.value=="")
     {
        alert("User email field Can't be Empty");
        return false;
     }
     else if(phone.value=="")
     {
        alert("User Phone Field can't be empty");
        return false;

     }
     else{

    const myarray={
        "name":namevalue,
        "email":emailvalue,
        "phone":phonevalue
    };
    let temp=localStorage.getItem(idvalue);
    if(temp!=null)
    {
        alert("User Already Exist with Same id");
        return false;
    }
    else{
        localStorage.setItem(idvalue,JSON.stringify(myarray));

    }
    
     }
    }

function deletedata(key)
{

    localStorage.removeItem(key);


}
function updateuser()
{

 const id=document.getElementById("id11");
    const idvalue=id.value;
    const email=document.getElementById("email11");
    const emailvalue=email.value;
    const name=document.getElementById("name11");
    const namevalue=name.value;
     const phone=document.getElementById("phone11");
     const phonevalue=phone.value;

     localStorage.removeItem(idvalue);

     const myarray={
        "name":namevalue,
        "email":emailvalue,
        "phone":phonevalue
    };

    localStorage.setItem(idvalue,JSON.stringify(myarray));

}
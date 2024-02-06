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
    var myarray=[];
    myarray[0]=namevalue;
    myarray[1]=emailvalue;
    myarray[2]=phonevalue;

    let temp=sessionStorage.getItem(idvalue);
    if(temp!=null)
    {
        alert("User Already Exist with Same id");
        return false;
    }
    else{
        sessionStorage.setItem(idvalue,myarray);

    }
    
     }
    }

function deletedata(key)
{

    sessionStorage.removeItem(key);


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

     sessionStorage.removeItem(idvalue);

     var myarray=[];
    myarray[0]=namevalue;
    myarray[1]=emailvalue;
    myarray[2]=phonevalue;

    sessionStorage.setItem(idvalue,myarray);

}
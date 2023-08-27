function saveToLocalStorage(event){

    event.preventDefault();
    const name = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const birthdate = event.target.birthdate.value;
    const gender = event.target.gender.value;
   /*  localStorage.setItem('fullname',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    localStorage.setItem('birthdate',birthdate);
    localStorage.setItem('gender',gender); */

    const obj = {
      name,
      email,
      password,
      birthdate,
      gender
   }
   localStorage.setItem(obj.email,JSON.stringify(obj));
    showUserOnScreen(obj)
}

 function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfItems')

    parentElem.innerHTML = `<li>${obj.name} - ${obj.email} - ${obj.password} - ${obj.birthdate} - ${obj.gender}</li>`  
       
   }

function askMyName() {
    const name =  prompt("Please enter your name")
 
    if (name != null) {
       document.getElementById("myname").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message =  document.getElementById("myname").innerHTML
    alert(h1message + 'หลอนๆหมอนอยู่ไหน')
 }

 function calAge(){
    const year = prompt("Enter your ค.ศ.")
    const age = (2022 - year)
    
    
    alert ("แข็งเกร่งมาก นายอยู่ในประเทศนี้มา"+age+ "ปีแล้ว พอได้แล้ว")
 }

 function loadprofile() {
   const fname = "kunanon"
   const provinece = "lossantos"
      document.getElementById("my-name").innerHTML =fname;
      document.getElementById("my-province").innerHTML = provinece;

 }
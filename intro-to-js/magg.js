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
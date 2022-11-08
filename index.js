//for celcius
document.querySelector(".cel").addEventListener("input" , function(){
  let c=this.value;
  let f=(c*9/5)+32;
  document.querySelector(".far").value=f;
})

//for fahrenheit
document.querySelector(".far").addEventListener("input" , function(){
  let f=this.value;
  let c=(f-32)*5/9;
  document.querySelector(".cel").value=c;
})

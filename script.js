console.log("js is running");

function switch1(element){
  element.style.display = "none"
  element.nextElementSibling.style.display = "flex"
}

function switch2(element){
  element.style.display = "none"
  element.previousElementSibling.style.display = "flex"
}

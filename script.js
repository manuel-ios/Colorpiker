let colorBacground = document.getElementById('color_input')
let btnRandonColor =  document.getElementById('buttonColor')
btnRandonColor.addEventListener("click",(e)=>{
    console.log("estoy en la funcion")
    ElegirBackground()
})


function ElegirBackground(){
    let randonColor =   "#"+ Math.floor(Math.random()*16777215).toString(16)
    document.body.style.background =randonColor
    colorBacground.value =  randonColor
}
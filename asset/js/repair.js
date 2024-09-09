let serviceReciveMethod =document.querySelectorAll(`.serviceReciveMethod`)
let toogleMethods=()=>{
    serviceReciveMethod.forEach((eachServiceReciveMethod)=>{
        if(eachServiceReciveMethod.checked){
            document.querySelector(`.${eachServiceReciveMethod.value}`).classList.add(`d-flex`)
            // console.log(`${eachServiceReciveMethod.value}`)
        }else{
            document.querySelector(`.${eachServiceReciveMethod.value}`).classList.remove(`d-flex`)
            // console.log(`.${eachServiceReciveMethod.value}`)
    
        }
    })
}
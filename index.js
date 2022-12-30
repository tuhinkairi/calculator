const btn = document.getElementsByClassName('get')
const input = document.getElementById('input')
let str = ''

Array.from(btn).forEach((Element) => {
    
    Element.addEventListener('click', () => {
        if(Element.innerHTML =='c'){
            str=''
            input.value = str     

        }
        else if(Element.innerHTML=='='){
            str = eval(str)
            input.value = str      

        }
        else if(Element.innerHTML=='+-'){
            str = str * -1
            input.value = str      
        }
        else{
            str = str + Element.innerHTML
            input.value = str      
        }
    })
})
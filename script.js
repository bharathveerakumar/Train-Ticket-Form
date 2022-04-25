const date=document.querySelector('#date')
const phone=document.querySelector('#phone')
const p=document.querySelector('p')
const phones=document.querySelector('span')

date.addEventListener('input', ()=>{
    const month=new Date()
    const inputDate=new Date(date.value)

    if(month.getMonth()!==inputDate.getMonth()){
        p.classList.remove('none')
        setTimeout(()=>{
            p.classList.add('none')
        }, 7000)
        date.value=0
    }
})

phone.addEventListener('input', ()=>{
    if(phone.value.length!==10){
        phones.classList.remove('none')
    }
    else phones.classList.add('none')
})
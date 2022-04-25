const date=document.querySelector('#date')
const p=document.querySelector('p')

date.addEventListener('input', ()=>{
    const month=new Date()
    const inputDate=new Date(date.value)
    console.log(month.getMonth(), inputDate.getMonth())
    if(month.getMonth()!==inputDate.getMonth()){
        p.classList.remove('none')
        setTimeout(()=>{
            p.classList.add('none')
        }, 7000)
        date.value=0
    }
})
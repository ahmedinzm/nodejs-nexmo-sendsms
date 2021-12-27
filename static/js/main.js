const numberInput = document.getElementById('number')
const messageInput = document.getElementById('msg')
const buton = document.getElementById('button')



buton.addEventListener('click',()=>{
    const number = numberInput.value
    const text = messageInput.value
    fetch("/",{
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({number:number,text:text})
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
})






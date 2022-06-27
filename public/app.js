const btn = document.getElementById('btn')
const div= document.getElementById('list')
const nameInput=document.querySelector('input')
const submit=document.getElementById('submit')

btn.addEventListener('click',async()=>{
   const result= await getData()
    console.log(result)
   const newDiv=result.map(item=>{
        return(
            `<div>${item.name}</div>`
        )
    }).join("")
    div.innerHTML=newDiv
})


const getData=async()=>{
    const res=await fetch('http://127.0.0.1:300/')
    const result= await res.json()
    return result
}


submit.addEventListener('click',async()=>{
  const res= await sendData(nameInput.value)
})

const sendData=(value)=>{

 fetch('/addData',
                {method:'POST',
                headers:{"Content-Type":'application/json'},
                body:JSON.stringify({name:value}),
                })


}
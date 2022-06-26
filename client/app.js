const btn = document.getElementById('btn')
const div= document.getElementById('list')
btn.addEventListener('click',async()=>{
   const result= await getData()
    console.log(result)
    div.innerHTML= result.name

})


const getData=async()=>{
    const res=await fetch('http://127.0.0.1:300/')
    const result= await res.json()
    return result
}
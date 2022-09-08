import {useState,useEffect} from 'react'


function Counter() {


const [number,setNumber] = useState(0)
// const [name,setName] = useState("Busöz")

  


useEffect(()=>{
    console.log("Companent mounted");     // Component mount edildi derken [] kullanırız 2.valuede
  
    const interval = setInterval(()=>{
        setNumber((n)=>n+1)
    },1000);

    return () => clearInterval(interval)

},[]);


  useEffect(()=>{
    console.log("State güncellendi");
  });

//   useEffect(()=>{
//     console.log("name State güncellendi");
//   },[name]);





  return (
    <div>
    <h1>{number}</h1>
    <button  onClick={()=>{setNumber(number +1)}}>Arttır Butonu</button>

    <br />

{/*     
    <h1>{name}</h1>
    <button  onClick={()=>{setName("Uncu")}}>Click</button> */}

    </div>
  )
}

export default Counter
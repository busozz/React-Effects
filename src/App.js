import Counter from "./components/Counter"

import {useState} from "react"


function App() {

const [isVisibile,setIsVisible]= useState(true)

  return (
    <div>

    {isVisibile && <Counter/>}         {/*   isVisible true ise Counterı çalıştır demek!!!  */} 

    <button onClick={()=>{setIsVisible(!isVisibile)}}>Toggle Button</button>    {/* isVisible false olacak demek!!!  */}

    </div>
  )
}

export default App
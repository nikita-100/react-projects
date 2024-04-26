import { useState,useCallback } from 'react'


function App() {
  
  const [length,setLength] = useState(10)
  const [ numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed]= useState(false)
  const [password,setPassword] = useState(false)

const passwordGenerator = (()=>{

let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numAllowed) str += "1234567890"
if(charAllowed) str += "!@#$%^&*=+{}_-~[]"

for (let i = 1; i < length; i++) {
  let char = Mayh.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
  
}

},[length,numAllowed,charAllowed,setPassword])



  return (
    <>
      <div>

   

    

      </div>
    </>
  )
}

export default App

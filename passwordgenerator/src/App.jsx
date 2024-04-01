import { useState ,useCallback, useEffect,useRef} from 'react'


function App() {

  const [len, setLen] = useState(8)
  const[num,setNum]=useState(false)
  const [char , setChar] =useState(false)
  const[password , setPassword]=useState("")

// use ref for copy to clipboard
    const passwordRef = useRef(null)

    // ++++++++++++++++++++++  PASWORD +++++++++++++++++++++++++++ 
    const passwordGenerator = useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(num) str+="0123456789"
      if(char) str+="!@#$%^&*()_+][{}|/"

      for(let i=1;i<len;i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }

      setPassword(pass);

    },[len,num,char,setPassword])

 //  ++++++++++++++++ copy method  ++++++++++++++++++++ 
      const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
      },[password])


      // const copyPasswordToClipboard = useCallback(() => {
      //   passwordRef.current?.select();
      //   passwordRef.current?.setSelectionRange(0, 999);
      //   window.navigator.clipboard.writeText(password)
      // }, [password])
    
     
      //++++++++++++++ for showing the pw ++++++++++++++++++

    useEffect(()=>{
      passwordGenerator()
    },[len,num,char,passwordGenerator])


  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8   bg-gray-700  '>
    <h1 className='text-white text-center my-3'>Password generator</h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className=' outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
  
     />
     <button 
     onClick={()=>copyPasswordToClipboard()}
     className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy

     </button>

    </div> 
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={len}
        className='cursor-pointer'
        onChange={(e)=>{setLen(e.target.value)}}
         />
        <label > Length:({len})</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={num}
        id='numberInput'
        onChangeCapture={()=>{
          setNum((prev)=>!prev);
        }}
       
         />
       <label htmlFor="numberInput" >Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={char}
        id='characterInput'
        onChangeCapture={()=>{
          setChar((prev)=>!prev);
        }}
       
         />
       <label htmlFor="characterInput" >Character</label>
      </div>
    </div>
  </div>
    </>
  )
}

export default App

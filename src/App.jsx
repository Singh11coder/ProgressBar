import React, { useEffect, useState } from 'react'

const App = () => {

  const [value,setValue] = useState(0);
  const [complete,setComplete] = useState(false);

  const handleProgress = () => {
     let timeout = setInterval(() =>{
         setValue((prev) => {
            if(prev>=100){
              setComplete(true);
              clearTimeout(timeout);
              return 100;
              
            }

            return prev+1;
         })
     },100)

     
  }

  useEffect(() => {
    handleProgress();
  },[]);


  return (
    <div className="bg-gray-900 h-screen">
       <h1 className="text-6xl text-white text-center">Progress Bar</h1>
       <div className="flex items-center gap-3">
     
         <div className="w-125 bg-gray-200 rounded-full h-6 overflow-hidden mt-10 ml-150">
         <input 
         readOnly
          className="bg-green-600 h-6 rounded-full text-center text-white transition-all "
        style={{ width: `${value}%` }} type="text" />
        
       </div>

       <div className="text-white mt-9">{value}%</div>

       </div>
       
       {  complete 
        ? <h1 className="text-white text-center">Complete</h1> 
        : <h1 className="text-white text-center">Loading...</h1>}
    </div>
  )
}

export default App

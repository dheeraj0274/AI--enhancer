import React from 'react'
import Home from './components/Home'
import '../src/app.css'
import { useState ,useEffect } from 'react'

const App = () => {
  const [showReminder, setShowReminder] = useState(true);

 useEffect(()=>{
  const timer = setTimeout(() => {
    setShowReminder(false)
    
  }, 5000);
  return ()=> clearTimeout(timer)
 } ,[])
   
  return (
    <div className='relative w-full '>
    <div  className={`flex flex-col items-center  h-full min-h-screen bg-gray-200 py-8 px-4 ${showReminder ? 'opacity-20' : ''}`} >
      <div className='text-center mb-8'>
        <h1 className=' text-3xl font-bold text-gray-800 mb-2'>AI Image Enhancer</h1>
      <p className='text-lg text-gray-500'>   Upload your image and let AI enhance to it in seconds!</p>
      </div>
    
        <Home/>
          <div className='h-10 flex justify-center items-center '>
        <div className=' absolute text-lg text-gray-500    bottom-[5px]'>
        Powered By JarvisAI
       </div>
       </div>
       </div>
         {/* ✅ Notification Modal Overlay */}
      {showReminder && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">🔔 Reminder</h2>
            <p className="text-gray-700 mb-4 font-sans">
              If image is  not enhancing , it means Usage Limit has been reached
            </p>
            <button
              onClick={() => setShowReminder(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
  
    
      
    
    
     </div>
  )
}

export default App
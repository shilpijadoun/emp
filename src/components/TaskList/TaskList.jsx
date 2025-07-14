// import React from 'react'

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = (user) => {
    
    const {data}=user
    console.log(data);
    
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        {data.tasks.map((elem, idx)=>{
            
            
            
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.NewTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.Failed){
                return <FailedTask key={idx} data={elem}/>
            }
                
        })}
        {/* <div className='flex-shrink-0 h-full w-[24%] p-5  bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 june 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
        </div>
        <div className=' flex-shrink-0 h-full w-[24%] p-5  bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 june 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>

         
        
    </div>
    <div className=' flex-shrink-0 h-full w-[24%] p-5  bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 june 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>

         
        
    </div>
    // <div className=' flex-shrink-0 h-full w-[24%] p-5  bg-yellow-400 rounded-xl'>
    //         <div className='flex justify-between items-center'>
    //             <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    //             <h4 className='text-sm'> 20 june 2025</h4>
    //         </div>
    //         <h2 className='mt-5 text-2xl font-semibold'>Make a youtube</h2>
    //         <p className='text-sm mt-2'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
    //         </p>

         
        
    // </div> */}
    
    </div>
  )
}

export default TaskList
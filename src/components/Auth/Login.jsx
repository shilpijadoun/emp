import { useState } from 'react'

  const Login = (data) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
     e.preventDefault()
     
     data.handleLogin(email, password)
     setEmail("")
     setPassword("") 

  }

  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  // console.log(e.target.value)
                }}
                 required 
                 className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='enter your email' />
                <input
                required
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='enter your password' />
 
                <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>

    </div>
    
  )
}

export default Login
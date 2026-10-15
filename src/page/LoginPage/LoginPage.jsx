import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
method:'POST',
      headers:{
'Content-Type':'application/json'
      },
     body:JSON.stringify({email,password})
    })
    const data = await response.json()
    console.log(data);
    
    if(data.message === 'success'){
      toast.success('login successfully')
      setTimeout(()=>{navigate('/')},4000)
    }else{
      toast.error(data.message || 'Something went wrong')
    }

  }
  return (
<div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-12 px-4">
  <div className="w-full max-w-md bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
    
    {/* Header */}
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-red-600/10 text-red-500 rounded-full text-2xl mb-4">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Welcome Back</h2>
      <p className="text-gray-400 text-sm">
        Sign in to continue to MovieHub
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="loginEmail"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label 
          htmlFor="loginEmail" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10  bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-envelope mr-2"></i>
          Email Address
        </label>
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          type="password"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="loginPassword"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <label 
          htmlFor="loginPassword" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10  bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-lock mr-2"></i>
          Password
        </label>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center text-sm py-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 rounded bg-gray-900 border-gray-800 text-red-600 focus:ring-red-500 accent-red-600 cursor-pointer" 
          />
          <label htmlFor="rememberMe" className="text-gray-300 select-none">
            Remember me
          </label>
        </div>
        <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
          Forgot Password?
        </a>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-red-600/20 flex items-center justify-center"
      >
        <i className="fa-solid fa-right-to-bracket mr-2"></i>
        Sign In
      </button>

      {/* Divider */}
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-gray-800"></div>
        <span className="flex-shrink mx-4 text-gray-500 text-xs uppercase tracking-wider">or continue with</span>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-3 gap-3">
        <a rel="noopener noreferrer"  href='https://www.google.com/' target='_blank' className="flex items-center justify-center py-2.5 bg-gray-900 border border-gray-800 hover:bg-gray-800 rounded-lg transition-colors text-white">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a rel="noopener noreferrer"  href='https://www.facebook.com/' target='_blank' className="flex items-center justify-center py-2.5 bg-gray-900 border border-gray-800 hover:bg-gray-800 rounded-lg transition-colors text-white">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a rel="noopener noreferrer"  href='https://www.twitter.com/' target='_blank' className="flex items-center justify-center py-2.5 bg-gray-900 border border-gray-800 hover:bg-gray-800 rounded-lg transition-colors text-white">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>

      {/* Signup Link */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Don't have an account? <Link to={'/signup'} className="text-red-500 hover:text-red-400 font-medium">Sign up here</Link>
      </p>
    </form>
  </div>
</div>
  )
}

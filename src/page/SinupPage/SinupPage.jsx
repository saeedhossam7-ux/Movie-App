
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
export default function SinupPage() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [rePassword,setRePassword] = useState('')
  const navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
      method: 'POST',
      headers:{
'Content-Type':'application/json'
      },
     body:JSON.stringify({name,email,phone,password,rePassword})
    })
    const data = await response.json()
    
    if(data.message === 'success'){
      toast.success('Account created successfully')
      setTimeout(()=>{navigate('/login')},4000)
    }else{
      toast.error(data.message || 'Something went wrong')
    }

  }

  return (
<div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-12 px-4 mt-10">
  <div className="w-full max-w-md bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
    
    {/* Header */}
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-red-600/10 text-red-500 rounded-full text-2xl mb-4">
       <FontAwesomeIcon icon={faUserPlus} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Create Account</h2>
      <p className="text-gray-400 text-sm">
        Join MovieHub and explore endless entertainment
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Name Input */}
      <div className="relative">
        <input
          type="text"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="nameInput"
          placeholder="Enter your name"
         value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label 
          htmlFor="nameInput" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10  bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-user mr-2"></i>
          Full Name
        </label>
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="emailInput"
          placeholder="Enter your email"
         value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label 
          htmlFor="emailInput" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-envelope mr-2"></i>
          Email Address
        </label>
      </div>

      {/* Phone Input */}
      <div className="relative">
        <input
          type="tel"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="phoneInput"
          placeholder="Enter your phone"
         value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label 
          htmlFor="phoneInput" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-phone mr-2"></i>
          Phone Number
        </label>
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          type="password"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="passwordInput"
          placeholder="Enter your password"
         value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label 
          htmlFor="passwordInput" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-lock mr-2"></i>
          Password
        </label>
      </div>

      {/* Confirm Password Input */}
      <div className="relative">
        <input
          type="password"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-red-600 peer"
          id="confirmPasswordInput"
          placeholder="Confirm your password"
         value={rePassword}
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
        />
        <label 
          htmlFor="confirmPasswordInput" 
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-red-500 left-3"
        >
          <i className="fa-solid fa-lock mr-2"></i>
          Confirm Password
        </label>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-red-600/20 flex items-center justify-center mt-2"
      >
        <i className="fa-solid fa-user-plus mr-2"></i>
        Create Account
      </button>

      {/* Divider */}
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-gray-800"></div>
        <span className="flex-shrink mx-4 text-gray-500 text-xs uppercase tracking-wider">or sign up with</span>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      {/* Social Signup */}
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

      {/* Login Link */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Already have an account? <Link to={'/login'} className="text-red-500 hover:text-red-400 font-medium">Login here</Link>
      </p>
    </form>
  </div>
</div>
  )
}

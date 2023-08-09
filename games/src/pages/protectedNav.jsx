import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/nova logo.png'
import { toast,Toaster } from 'react-hot-toast';

export default function protectedNav() {

  const handleLogout = () => {
    localStorage.removeItem('userData');
    toast.success('You Logout Successfully');
    setTimeout(() => {
       window.location.href = '/'; 
     }, 2000); 
   
 };
  return (
    <div>
               <nav class="bg-blue-900 dark:bg-gray-900 fixed w-full border-b border-gray-200 dark:border-gray-600 shadow-lg">
  <div class="max-w-screen-xl flex flex-wrap mx-auto p-4">
  <Link to ="/home" class="flex items-center">
      <img src= {logo} class="h-12 mr-3" alt="Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Games Store</span>
  </Link>
  <div class="flex md:order-2">
 
  </div>
  <div class="justify-between hidden w-full md:flex md:w-auto md:order-1 flex-wrap mx-32 font-semibold text-yellow-50 mt-4" id="navbar-sticky">
    Welcome to Admin panel!
  </div>
  <div className="flex md:order-3 ml-auto space-x-4">
            <button
              type="button" onClick={handleLogout} className="p-2 text-gray-100 hover:text-grey-200 underline hover:text-red-500">
                Logout
            </button>
            
          </div>
  </div>

</nav>
<Toaster/>

      
    </div>
  )
}

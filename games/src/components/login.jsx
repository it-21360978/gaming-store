import React, { useState } from 'react';
import axios from 'axios';
import back from '../assets/back.jpg'
import { toast,Toaster } from 'react-hot-toast';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axios.post('http://localhost:3030/user/login', { email, password });
      console.log('Login success:', response.data);
      toast.success('Logging Successfully');
      window.location.href = '/dash';

    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('Credentials are invalid ,Please try Again later!');
    }

    setLoading(false);
  };

  return (
    <>
    
    <div>
      <img src={back} alt='bg' className=' flex justify-center items-center bg-cover'/>
    </div>
    <div className=" bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
    <div className="bg-opacity-50 fixed inset-0 flex justify-center items-center"></div>
    <div className="relative flex justify-center mt-8">
      <div className="box-border md:box-content rounded-md h-auto w-72 p-4 drop-shadow-md md:drop-shadow-xl bg-white">
        <div className="bg-blue-500 rounded h-10">
          <div className="text-xl font-bold text-center m-3 mt-2">Welcome Back</div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6 mt-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`mx-auto text-white bg-green-500 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-400'
            } font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            disabled={isLoading} 
          >
            {isLoading ? 'Loading...' : 'Login'} 
          </button>
        </form>
      </div>
    </div>
  </div>
  <Toaster/>
    </>

  );
}

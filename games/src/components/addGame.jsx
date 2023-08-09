import React,{useState,useRef} from 'react';
import axios from 'axios';
import { toast,Toaster } from 'react-hot-toast';

export default function AddGame() {
    const [gameName, setGameName] = useState('');
    const [gameDate, setGameDate] = useState('');
    const [gameImage, setGameImage] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState('');
    

    const fileInputRef = useRef(null);

    const handleCancelClick = () => {
      setGameName('');
      setGameDate('');
      setGameImage('');
      window.location.href = '/dash';
    };

    const handleAddGameClick = async () => {
      const formData = new FormData();
      formData.append('name', gameName);
      formData.append('date', gameDate);
      formData.append('file', fileInputRef.current.files[0]);
  
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:3030/game/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          console.log('Game added successfully!');
          toast.success('Game added successfully!');
        setGameName('');
        setGameDate('');
        setGameImage('');
        window.location.href = '/dash';
      } else {
        console.error('Failed to add game:', response.statusText);
        toast.error('Failed to add game!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add game!');
    }

    setLoading(false);
  };
  

  return (
    <>

<div className="flex justify-center items-center h-screen">
      <div className="bg-opacity-50 fixed inset-0 flex justify-center items-center">
        <div className="relative flex justify-center mt-8">

          <div className="bg-opacity-50  rounded-lg  box-border md:box-content  h-auto w-80 p-4 drop-shadow-md md:drop-shadow-xl bg-white backdrop-blur-2xl">
            <div className="text-xl font-bold text-center bg-black h-10 justify-items-center align-middle text-white m-auto flex-wrap rounded-md">
              Add New Game
            </div>
            <div className="mb-6 mt-5">
              <label htmlFor="gameName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Game Name
              </label>
              <input
                type="text"
                id="gameName"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Game Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="gameDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Game Date
              </label>
              <input
                type="date"
                id="gameDate"
                value={gameDate}
                onChange={(e) => setGameDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="gameImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Game Image
              </label>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".svg, .png, .jpg, .gif" onChange={(e) => setSelectedFile(e.target.files[0]?.name || '')}
                  />
                  Selected File: {selectedFile}
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleAddGameClick}
              className="mx-auto text-black bg-green-500 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? 'Loading...' : 'Save Game'}
            </button>
            
            <button
              type="button"
              className="mx-auto text-black float-right bg-slate-300 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
               onClick={handleCancelClick}>
              Cancel
            </button>
      
          </div>

        </div>
      </div>
    </div>

    <Toaster/>
      
    </>
  )
}

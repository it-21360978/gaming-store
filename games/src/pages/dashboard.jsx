import { useEffect, useState } from 'react';
import axios from 'axios';
import Pnav from './protectedNav';
import Addgame from '../components/addGame';
import { toast,Toaster } from 'react-hot-toast';

export default function Dashboard() {
   const [games, setGames] = useState([]);
   const [AddGame, setAddGame] = useState(false);

   const handleLogout = () => {
      localStorage.removeItem('userData');
      toast.success('You Logout Successfully');
      setTimeout(() => {
         window.location.href = '/'; 
       }, 2000); 
     
   };

   const handleAddGameClick = () => {
      setAddGame((!AddGame));
     
    };

   useEffect(() => {
      
      axios.get('http://localhost:3030/game')
        .then(response => {
          setGames(response.data);
          //toast.success('Game Data Getting Successfully');
        })
        .catch(error => {
          console.error('Error fetching game data:', error);
            toast.error('Error fetching game data!');
        });
    }, []);


    const handleDelete = (id) => {
      axios.delete(`http://localhost:3030/game/${id}`)
        .then(response => {
          if (response.status === 200) {
            setGames(games => games.filter(game => game.id !== id));
            toast.success('Game deleted successfully!');
            window.location.href = '/dash';
          }
        })
        .catch(error => {
          console.error('Error deleting game:', error);
            toast.error('Error deleting game!');
        });
    };
    
  



  return (
      <div>
   
    <div>
     

<aside id="default-sidebar" className="fixed left-0 mt-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-blue-900 dark:bg-gray-800" aria-label="Sidebar">
   <div className="h-full px-3 py-4 bg-blue-900 dark:bg-gray-800">
      <ul className="space-y-2 font-medium py-4">
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3">Games</span>
            </a>
         </li>
         <li>
            <a href="#" className=" py-4 flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Reports</span>
               
            </a>
         </li>
      
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Customers</span>
            </a>
         </li>
        
         <li>
            <a href="#" onClick={handleLogout} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
               <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className=" fixed top-0">
<div>

   <div className="flex items-center">
   <Pnav/>
   </div>
   </div>
   </div>

<div className="p-4 sm:ml-64 mt-20">
<div>

   <div className="flex items-center justify-between mx-4 my-4">
     
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase">Manage Games</h2>
      </div>

      <div>
      
        
        <div className="flex items-center py-4 mx-4">   
            <label for="voice-search" className="sr-only">Search</label>
            <div className="relative w-96">

                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>


                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="input subject" required/>
 
            </div>
       
            <button type="submit"onClick={handleAddGameClick} className=" ml-8 inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-blue-600">
               Add New Game
            </button>
        
        </div>

      </div>
  
    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mx-auto">
        <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    #
                </th> 

                <th scope="col" className="px-6 py-3">
                    Game Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Game Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Game Image
                </th>
                <th scope="col" className="px-10 py-4">
                    Delete
                </th>
                
                
            </tr>
        </thead>
        <tbody>
        {games.map((game, index) => (
            <tr key={index} className="bg-gray-50 backdrop-blur-md backdrop-opacity-50 border-b dark:bg-gray-800 dark:border-gray-700 shadow-lg">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                {index + 1}

                </th>
                <td className="px-6 py-4">

                {game.name}
                    
                </td>
                <td className="px-6 py-4">

                {game.date}
                    
                </td>
                <td className="px-6 py-4">

                <img src={`http://localhost:3030/uploads/${encodeURIComponent(game.file)}`}alt={game.name} className="w-20 h-20" />
                    
                </td>
                <td className="px-6 py-4" >
                  
                <button type="submit" onClick={() => handleDelete(game._id)} className="text-white bg-orange-600 outline-black hover:shadow-lg hover:stroke-white font-medium rounded-full text-sm px-5 py-2.5 mr-1 mb-1">  
                Delete</button>
                      
                </td>
                    
            </tr>
       
       ))}
        </tbody>
    </table>
</div>
      
</div>
  
    </div>
    {AddGame && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <Addgame/>
        </div>
      )}

      <Toaster/>
</div>
      
  )
}

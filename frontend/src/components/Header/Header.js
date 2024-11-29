import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'



const Header = () => {


  const [user, setUser] = useState(null);

  // Simulate fetching the user from localStorage, API, or other source
  useEffect(() => {
    const fetchUserData = () => {
      // Example: You might fetch this from localStorage or an API
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setUser(userData);
      }
    };

    fetchUserData(); // Simulate fetching user data on mount
  }, []);

  const SummaryApi = 'https:///userLogout'; 


  const handleLogout = async() =>{
    const fetchData =await fetch(SummaryApi.logout_user.url,{
      method:SummaryApi.logout_user.method,
      credentials:"include"
    })

    const data = await fetchData.json()
    if(data.sucess){
toast.success(data.message)
  }

  if(data.error){
    toast.error (data.message)
  }
}
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">

      <Link to ={"/"}>
      <Logo w={90} h={50} />
      </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input type="text"placeholder="search product here..."className="w-full outline-none"/>
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <CiSearch />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div className="text-2xl relative ">
            <span>
              <FaShoppingCart />
              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>  
                  <p className='text-sm'>0 </p>
              </div>
              </span>
          </div>

          <div>
          {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
                    )
                    : (
                    <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
                    )
                  } 
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

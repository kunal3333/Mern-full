import React,{useState} from 'react'
import loginIcons from '../../assest/signin.gif' 
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const[showConfirmpasword,setShowConfirmpassword] =useState(false);
    
    const [data, setData] = useState({
      email: "",
      password: "",
      name:"",
      Confirmpasword :"",
      profilepic:""
    });
    
    //const navigate = useNavigate();  

    const handleOnChange = (e) => {
      const { name, value } = e.target;
        
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };


  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <section id='signup'>
    <div className='mx-auto container p-4'>
      <div className='bg-white p-5 w-full max-w-sm mx-auto '>
        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
        <div>
        <img src={loginIcons} alt='login icons' />
        </div>
        <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'> Upload Image</div>
        1.23
        
        </div>

        <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
        
        <div className='grid'>
            <label>Name:</label>
            <div className='bg-slate-100 p-2'>
              <input
                type='text'
                placeholder='Enter your name'
                name='Name'
                value={data.Name}
                onChange={handleOnChange}
                className='w-full h-full outline-none bg-transparent'
              />
            </div>
          </div>
          <div className='grid'>
            <label>Email:</label>
            <div className='bg-slate-100 p-2'>
              <input
                type='email'
                placeholder='Enter email'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                className='w-full h-full outline-none bg-transparent'
              />
            </div>
          </div>

          <div>
            <label>Password:</label>
            <div className='bg-slate-100 p-2 flex'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Enter password'
                value={data.password}
                name='password'
                onChange={handleOnChange}
                className='w-full h-full outline-none bg-transparent'
              />
              <div className='cursor-pointer text-xl' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <div>
            <label>Confirm Password:</label>
            <div className='bg-slate-100 p-2 flex'>
              <input
                type={showConfirmpasword ? "text" : "password"}
                onChange={handleOnChange}
                className='w-full h-full outline-none bg-transparent'
              />
              <div className='cursor-pointer text-xl' onClick={() => setShowConfirmpassword(prev => !prev)}>
                {showConfirmpasword  ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>


          <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
            Login
          </button>
        </form>

        <p className='my-5'>Already have an account ?{" "}
          <Link to='/login' className='text-red-600 hover:text-red-700 hover:underline'>Login in          </Link>
        </p>
      </div>
    </div>
  </section>  
  )
}

export default Signup

 
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginForm } from "../../types/type";
import axios from "axios";
import signup from '../../assets/testing.png'

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>();

  const theme = true

  const onSubmit: SubmitHandler<ILoginForm> = async (data:ILoginForm) => {
    await axios.post("http://localhost:7000/api/user/login",data)
    .then(res=>{console.log(res.data.token)
      localStorage.setItem("token",res.data.token)
    })
    .catch(error=>{console.log(error)})
    reset();
  };
  return (
    <div className=" fixed h-screen w-full flex justify-center items-center">
    <div className="px-10 w-full sm:w-[75%] rounded-md">
    <div className='flex justify-center items-center h-[600px]  shadow-2xl shadow-[#555555] rounded-xl'>
      <div className="hidden md:block w-[60%] h-full rounded-md sm:rounded-l-xl">
        <div className={`w-full h-full ${theme?'bg-[#232323]':'bg-[#ffffff]'} text-white sm:rounded-l-xl flex justify-center items-center`}>
        <img src ={signup} className='w-[95%] h-[100%] rounded-l-xl'></img>
        </div>
      </div>
      <div className={`w-full md:w-[40%] sm:rounded-r-md bg-transparent h-full flex justify-center items-center relative`}>
        <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full -z-10 bg-gradient-to-r to-[#aa77f0] via-[#aa77f0] from-[#bdb7f0] overflow-hidden sm:rounded-r-xl">
            <div className={`absolute -top-[5%] right-[65%] md:right-[80%] md:-top-[7%] lg:right-[70%] lg:-top-[1%] h-[95%] w-[115%] rounded-tr-[72px] rotate-45 ${theme?'bg-[#232323]':'bg-[#ffffff]'}`}></div>
        </div>
      <div className="w-[85%]">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full h-full bg-transparent'>
      <p className="text-transparent font-semibold text-3xl bg-gradient-to-b from-[#363669] via-[#9b9bfc]  to-[#d5d5f9] bg-clip-text">LOG IN</p>
        <div>
          {/* <label className={`${theme?'text-[#d5d5d5]':'text-[#24243b]'}`}>Username:</label> */}
          <input type="text" placeholder='Enter name' {...register('userName', { required: 'Username is required'})} className={`mb-2 py-2 px-2 bg-opacity-20 border-0 border-b-2 border-[#888787] focus:border-[#483366] focus:border-b-2 focus:outline-none  bg-transparent w-full`} />
          {errors.userName && <p className='text-red-400'>{errors.userName.message}</p>}
        </div>
        <div>
          {/* <label className={`${theme?'text-[#d5d5d5]':'text-[#24243b]'}`}>Password:</label> */}
          <input type="password" placeholder='Enter password' {...register('password', { required: 'Password is required',pattern:/^.{6,}$/ })} className={`mb-3 py-2 px-2 text-[#c4c3c3] border-0 border-b-2 border-[#888787] focus:border-[#483366] focus:border-b-2 focus:outline-none bg-transparent w-full`} />
          {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
        </div>
        {/* <div className='flex justify-between'> */}
        <div className="text-end">
        <a href='/forgetpassword' className={`font-serif font-medium flex-1 hover:scale-105`}>Forget Password?</a>
        </div>
        <div className="flex justify-center w-full">
        <button type="submit" className="w-[70%] px-2 py-[10px]  bg-gradient-to-r  from-[#171725] via-[#363669]  to-[#7a7ac9]  text-[#ffffff] rounded-2xl hover:shadow-md hover:shadow-white  border-0 text-left">SIGN IN NOW </button>
        {/* <button type="submit" className="w-[70%] px-2 py-[10px]  bg-gradient-to-r  from-[#cdcdfc] via-[#cdcdf8]  to-[#cdcdf9]  text-[#232323] rounded-2xl hover:shadow-lg hover:shadow-[#24243b]  border-0 text-left">SIGN IN NOW </button> */}
        </div>
        {/* </div> */}
      </form>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

//COMMENT UPTO HERE

export default Login;

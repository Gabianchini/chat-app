import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password); 
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1'>
            <h1 className='text-3xl font-bold text-center text-black'>
                Login
                <span className='text-blue-900'> ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base tracking-wide text-black font-bold  label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full tracking-wide placeholder-gray-500 input border border-black h-10'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base tracking-wide  text-black font-bold text-whitelabel-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full  placeholder-gray-500 tracking-wide  input border border-black  h-10'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <Link to="/signup" className='text-sm text-white hover:underline hover:text-blue-300 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>
                <button className= 'btn btn-block btn-sm mt-2 border bg-black text-white border-white'
                disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Login" }
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
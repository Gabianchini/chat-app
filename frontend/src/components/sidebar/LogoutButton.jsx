import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ?(
        <>
        <div className='divider'></div>
        <BiLogOut className=" m-5 w-6 h-6 text-white cursor-pointer"
        onClick={logout}/>
        </>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton
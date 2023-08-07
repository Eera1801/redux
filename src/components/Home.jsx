import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteUser} from '../redux/userSlice'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const selector = useSelector((state)=> state.user[0])
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogout = ()=>{
    dispatch(deleteUser())
    navigate('/')
  }
  return (
  <>
    <div className='flex justify-center h-screen place-items-center flex-col'>
     <div className='flex'>
      <div className='font-bold text-xl'>First name :</div>
      <div className='font-bold text-lg'>{selector.firstname}</div>
     </div>
     <div className='flex'>
      <div className='font-bold text-xl'>Last name :</div>
      <div className='font-bold text-lg'>{selector.lastname}</div>
     </div>
     <div className='flex'>
      <div className='font-bold text-xl'>Email id :</div>
      <div className='font-bold text-lg'>{selector.email}</div>
     </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
      Logout
    </button>
    </div>
  </>

  )
}

import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Required from '../utilities/Required'
import {useSelector} from 'react-redux'

export default function SignIn() {
  const classes = {
    wrapper:"flex justify-center h-screen items-center",
    inputWraper:"flex flex-col mb-2",
    input:"p-2 border rounded-md outline-none",
    warningMessage : "text-red-500",
    button:"text-center mt-1 p-2 border rounded-md w-full bg-sky-800 text-white",
  }
  const [user,setUser] = useState({
    username: "",
    password: ""
  })
  const [error,setError] = useState(false)
  const navigate = useNavigate();
  const selector = useSelector((state)=> state.user[0])

  const handleClick = () =>{
    const check = (user.username === selector?.email) && (user.password === selector.password)
    if(check){
      navigate('/home')
    }
    setError(!check)
  }

  return (
    <div className={classes.wrapper}>
      <div className='w-1/2'>
        {error && <small className={classes.warningMessage}>Incorrect Email or password</small>}
        <div className={classes.inputWraper}>
            <label className='my-1'>Email<Required/></label>
            <input className={classes.input} type='email' onChange={(e)=> setUser({...user,username:e.target.value})} placeholder='Email' />
        </div>
        <div className={classes.inputWraper}>
            <label className='my-1'>Password<Required/></label>
            <input className={classes.input} type='password' onChange={(e)=> setUser({...user,password:e.target.value})} placeholder='Password' />
        </div>
        <button className={classes.button} onClick={handleClick}>sign in</button>
      </div>
    </div>
  )
}

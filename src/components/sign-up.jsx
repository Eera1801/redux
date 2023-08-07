import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Required from '../utilities/Required'
import {useDispatch} from 'react-redux'
import {addUser} from '../redux/userSlice'

export default function SignUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    Email:"",
    password:"",
  })
  const [error,setError] = useState({
    firstName:false,
    lastName:false,
    Email:false,
    password:false,
  })

  const classes = {
    wrapper:"flex justify-center h-screen items-center",
    inputWraper:"flex flex-col mb-2",
    input:"p-2 border rounded-md outline-none",
    warningMessage : "text-red-500",
    button:"text-center mt-1 p-2 border rounded-md w-full bg-sky-800 text-white",
  }

  const handleChange = (e) =>{
      setValues({
        ...values,
        [e.target.name]:e.target.value
      })
  };

  const validateForm =() =>{
    if (!(/\b[a-zA-Z]{3,}\b/.test(values.firstName))){
      setError({
        ...error,
        firstName:true
      })
     return false
    }else if(!(/^.+$/.test(values.lastName))){
      setError({
        ...error,
        firstName:false,
        lastName:true
      })
      return false
    }else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.Email))){
      setError({
        ...error,
        firstName:false,
        lastName:false,
        Email:true
      })
      return false
    }else if(!(/\b[a-zA-Z0-9]{4,}\b/).test(values.password)){
      setError({
        ...error,
        firstName:false,
        lastName:false,
        Email:false,
        password:true
      })
      return false
    }else{
      setError({
        ...error,
        firstName:false,
        lastName:false,
        Email:false,
        password:false
      })
      return true
    }
  }
  const handleClick = () =>{
    if(validateForm()){
      dispatch(addUser({
        user:values
      }))
      navigate('/sign-in')
    }
  }
  return (
    <div className={classes.wrapper}>
      <div className='w-1/2'>
        <div className={classes.inputWraper}>
          <label className='my-1'>First Name<Required/></label>
          <input className={classes.input} name='firstName' onChange={(e)=>handleChange(e)} value={values.firstName} type='text' placeholder='First Name' />
          {error.firstName && <small className={classes.warningMessage}>First Name require 3 letters atleast</small>}
        </div>
        <div className={classes.inputWraper}>
          <label className='my-1'>Last Name<Required/></label>
          <input className={classes.input} name='lastName' onChange={(e)=>handleChange(e)} value={values.lastName} type='text' placeholder='Last Name' />
         {error.lastName && <small className={classes.warningMessage}>Last Name is Required </small>}
        </div>
        <div className={classes.inputWraper}>
          <label className='my-1'>Email<Required/></label>
          <input className={classes.input} name='Email' onChange={(e)=>handleChange(e)} value={values.Email} type='email' placeholder='Email' />
          {error.Email && <small className={classes.warningMessage}>Enter Valid Email</small>}
        </div>
        <div className={classes.inputWraper}>
          <label className='my-1'>Password<Required/></label>
          <input className={classes.input} name='password' onChange={(e)=>handleChange(e)} value={values.password} type='password' placeholder='Password' />
          {error.password && <small className={classes.warningMessage}>Password length should not be lessthan 4</small>}
        </div>
        <button className='text-center mt-1 p-2 border rounded-md w-full bg-sky-800 text-white' onClick={()=>handleClick()}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
    const {user,Loading} = useContext(AuthContext)

    if(Loading){
        return <progress className='progress w-56'></progress>
    }
    if(user){
        return children
    }

  return <Navigate to="/login" replace={true}></Navigate>
}

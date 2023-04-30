import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'

export default function Register() {

  const {user, createUser} = useContext(AuthContext)
  // console.log(user,createUser);


  const HandleRegister = (event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    createUser(email,password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      form.reset()
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h4 className="text-4xl font-bold">Please Register</h4>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name"  className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">  Already have an account?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

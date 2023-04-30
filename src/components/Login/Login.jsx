import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

export default function Login() {
  const {signIn,signInWithGoogle} = useContext(AuthContext)
  
  const HandleLogin = (event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const handleGoogleSigning =()=>{
    signInWithGoogle()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h4 className="text-4xl font-bold">Please Login</h4>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered"  required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='mb-4 ml-8'>
          <Link to="/register" className="label-text-alt link link-hover">New to Auth Master ? Please Register</Link>
          </p>
          <div>
            <button onClick={handleGoogleSigning} className='btn btn-primary'>Google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

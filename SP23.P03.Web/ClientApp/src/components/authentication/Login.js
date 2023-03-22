import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/AuthenticationProvider.js';



/* 
const validateInputs = (name, password, email, confirmPassword, isRegister) => {
  const errors = {};

  // Validate email
  if (isRegister) {
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!name) {
      errors.name = "Name is required";
    } else if (name.length === 0) {
      errors.name = "Name cannot be empty";
    }
    // Validate password
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // Validate confirm password
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  }
  return errors;
};
 */
const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [err, setErrors] = useState([]);
  const navigate = useNavigate();
  const { login,register } = useAuth();
  const handleToggle = () => {
    setIsRegister(!isRegister);
    setIsForgotPassword(false);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
    setIsRegister(false);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //const errors = validateInputs(e.name, e.password, e.email, e.confirmPassword, isRegister);
   // if (Object.keys(errors).length > 0) {
    //  setErrors([errors]);

   // }
    if (isRegister) {
      const registerIn = {
        UserName: name,
        Email: email,
        Password: password
      }
      try {
        await register(registerIn);
        navigate("/dashboard");
      } catch (error) {
        setErrors([...err,error]);
      }
    }
    if (!isRegister && !isForgotPassword) {
 
      const loginData = {
        userName: name,
        password: password
      };
      try {
        await login(loginData);
        navigate('/');
      } catch (error) {
        console.log(error);
        //setErrors([...errors,error]);
      }
    };

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});

  }


  return (



    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-[#202124]">
  
      <form onSubmit={handleSubmit} className="flex w-[30rem] flex-col space-y-10 blue-glassmorphism p-12 ">
        <div className="text-center text-gradient text-4xl font-medium"> {isRegister ? 'Register' : isForgotPassword ? 'Forgot Password' : 'Log In'}
        </div>

        {isRegister ? (
          <>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none bg-white text-gradient"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none bg-white text-gradient"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none bg-white text-gradient"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none bg-white text-gradient"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Username"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none bg-white text-gradient"
              
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none bg-white text-gradient"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="transform rounded-full bg-yellow-700 py-2 px-7 mx-auto font-bold text-[#d2e3fc] duration-300 hover:bg-yellow-600">
          {isRegister ? 'Register' : isForgotPassword ? 'RESET PASSWORD' : 'Log In'}
        </button>

        {!isRegister && !isForgotPassword && (
          <div onClick={handleForgotPassword} className="transform text-center font-semibold text-gray-500 duration-300 hover:text-yellow-500">
            FORGOT PASSWORD?
          </div>
        )}
        {isForgotPassword && (
          <div
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300 cursor-pointer"
            onClick={handleBackToLogin}
          >
            BACK TO LOG IN
          </div>
        )}
        <p className="text-center text-[#bdc1c6] text-lg">
          {isRegister ? 'Already have an account?' : 'No account?'}{' '}
          <button
            onClick={handleToggle}
            className="font-medium text-indigo-500 underline-offset-4 hover:text-indigo-400 border-none outline-none cursor-pointer"
          >
            {isRegister ? 'Log in' : 'Create One'}
          </button>
        </p>

      </form>
    </main>

  );
}

export default LoginPage;

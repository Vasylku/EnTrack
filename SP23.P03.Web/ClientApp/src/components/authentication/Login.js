/* import React from 'react';

const LoginPage =() =>{
    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
            <section className="flex w-[30rem] flex-col space-y-10 blue-glassmorphism p-12">
                <div className="text-center text-4xl font-medium">Log In</div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                    />
                </div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                    />
                </div>

                <button className="transform rounded-full bg-yellow-700 py-2 px-7 mx-auto font-bold duration-300 hover:bg-yellow-400">
                    LOG IN
                </button>

                <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
                    FORGOT PASSWORD?
                </a>

                <p className="text-center text-lg">
                    No account?{' '}
                    <a
                        href="#"
                        className="font-medium text-indigo-500 underline-offset-4 hover:underline"
                    >
                        Create One
                    </a>
                </p>
            </section>
        </main>
    );
}

export default LoginPage; */

/* import React, {useState} from 'react';
const LoginPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
  
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
  
    return (
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10 blue-glassmorphism p-12">
          <div className="text-center text-4xl font-medium">
            {isRegister ? 'Register' : isForgotPassword ? 'Forgot Password' : 'Log In'}
          </div>
  
          {isForgotPassword ? (
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
          ) : (
            <>
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                />
              </div>
  
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                />
              </div>
            </>
          )}
  
          {isRegister && (
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
          )}
  
          {isForgotPassword ? (
            <button className="transform rounded-full bg-yellow-700 py-2 px-7 mx-auto font-bold duration-300 hover:bg-yellow-400">
              RESET PASSWORD
            </button>
          ) : (
            <button className="transform rounded-full bg-yellow-700 py-2 px-7 mx-auto font-bold duration-300 hover:bg-yellow-400">
              {isRegister ? 'REGISTER' : 'LOG IN'}
            </button>
          )}
  
          {!isRegister && !isForgotPassword && (
            <div
              className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300 cursor-pointer"
              onClick={handleForgotPassword}
            >
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
  
          <p className="text-center text-lg">
            {isRegister ? 'Already have an account?' : 'No account?'}{' '}
            <button
              onClick={handleToggle}
              className="font-medium text-indigo-500 underline-offset-4 hover:underline bg-transparent border-none outline-none cursor-pointer"
              >
                  {isRegister ? 'Log in' : 'Create One'}
              </button>
          </p>
      </section>
  </main>
);
}
export default LoginPage; 
 */import React, { useState } from 'react';

const LoginPage =() =>{
    const [isRegister, setIsRegister] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

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
  

    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
            <section className="flex w-[30rem] flex-col space-y-10 blue-glassmorphism p-12">
                <div className="text-center text-4xl font-medium"> {isRegister ? 'Register' : isForgotPassword ? 'Forgot Password' : 'Log In'}
  </div>

                {isRegister ? (
                    <>
                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            />
                        </div>

                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            />
                        </div>

                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input
                                type="text"
                                placeholder="Email or Username"
                                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            />
                        </div>

                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            />
                        </div>
                    </>
                )}

                <button className="transform rounded-full bg-yellow-700 py-2 px-7 mx-auto font-bold duration-300 hover:bg-yellow-400">
                {isRegister ? 'Register' : isForgotPassword ? 'RESET PASSWORD' : 'Log In'}
                </button>

                {!isRegister && !isForgotPassword &&(
                    <div onClick={handleForgotPassword} className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
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
                <p className="text-center text-lg">
                    {isRegister ? 'Already have an account?' : 'No account?'}{' '}
                    <button
                        onClick={handleToggle}
                        className="font-medium text-indigo-500 underline-offset-4 hover:underline bg-transparent border-none outline-none cursor-pointer"
                    >
                        {isRegister ? 'Log in' : 'Create One'}
                    </button>
                </p>
            </section>
        </main>
    );
}

export default LoginPage;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerAPI } from '../Services/AllAPIs'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';


function Auth({ register }) {

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    console.log(userData);
    const handleRegister = async () => {
        const { username, email, password } = userData
        if (!username || !email || !password) {
            // alert("please fill the details")
            toast.error('Please fill the details', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            //api fetching
            const response = await registerAPI(userData)
            console.log(response);
            // alert("registered")
            if (response.status == 200) {
                toast.success('Register Successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setUserData({ username: "", email: "", password: "" })
            }
            else {
                // alert(response.response.data)
                toast.warn(response.response.data, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }


        }

    }
    return (
        <div className='m-5 px-5'>
            <div className="row m-2 border border-1 shadow text-light rounded">
                <div className="col-6 ">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/405/794/original/account-login-flat-illustration-vector.jpg" alt="" height={"430px"} width={"100%"} />
                </div>
                <div className="col-6 text-center">
                    <h3 className='mt-5'>Project Fair</h3>
                    <h4>Sign {register ? 'Up' : 'In'}</h4>
                    <form className='p-5'>
                        {
                            register &&
                            <input type='text' value={userData.username} className='form-control mb-3' placeholder='Username' onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                        }
                        <input type='text' value={userData.email} className='form-control mb-3' placeholder='Email' onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <input type='password' value={userData.password} className='form-control ' placeholder='Password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    </form>

                    {
                        register ?
                            <div><button className='btn btn-primary mb-3' onClick={handleRegister}>Sign Up</button>
                                <p className='text-dark '>
                                    Already Registered? <Link to={'/login'}>Login Here...</Link></p>
                            </div>
                            : <div>
                                <button className='btn btn-primary mb-3'>Sign In</button>
                                <p className='text-dark'>New to Here? <Link to={'/register'}>Please Register here...</Link></p>
                            </div>
                    }

                </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />

        </div>
    )
}

export default Auth






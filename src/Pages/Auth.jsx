import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI,registerAPI } from '../Services/AllApis';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';


function Auth({ register }) {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    //register state
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Ensure form resets on page load or refresh
    useEffect(() => {
        setUserData({
            username: '',
            email: '',
            password: ''
        });
    }, []); // This will run once when the component mounts (on page load)



    // console.log(userData);



    //function for registering user
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
                setUserData({ username: '', email: '', password: '' })
                // window.location.href = '/login';
                setTimeout(() => {
                    navigate('/login')

                }, 6000);

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

    //function for login
    const handleLogin = async () => {
        const { email, password } = userData;

        // Validate if the fields are filled
        if (!email || !password) {
            toast.error('Please fill in your email and password', {
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
        } else {
            try {
                // Call the login API
                const response = await loginAPI(userData);
                console.log(response);

                if (response.status === 200) {
                    setIsLoggedIn(true)
                    toast.success('Login Successful', {
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

                    //jwt token in front end integration
                    //we are using session storage for this purpose

                    sessionStorage.setItem("user", JSON.stringify(response.data.user));
                    sessionStorage.setItem("token", response.data.token);


                    setUserData({ email: '', password: '' });


                    // window.location.href = '/dashboard';  // Or use a router for better navigation handling


                    setTimeout(() => {
                        navigate('/')

                    }, 6000);
                } else {

                    toast.warn('Login failed. Please check your credentials.', {
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
            } catch (error) {
                console.error("Login error", error);
                toast.error('Something went wrong. Please try again later.', {
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
    };

    return (
        <div className='m-5 px-5'>
            <div className="row m-2 border border-1 shadow text-light rounded">
                <div className="col-6 ">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/405/794/original/account-login-flat-illustration-vector.jpg" alt="" height={"430px"} width={"100%"} />
                </div>
                <div className="col-6 text-center">
                    <h3 className='mt-5'>Project Fair</h3>
                    <h4>Sign {register ? 'Up' : 'In'}</h4>
                    <form className='p-5' >
                        {
                            register &&
                            <input type='text' value={userData.username} className='form-control mb-3' placeholder='username' onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                        }
                        <input type='text' value={userData.email} className='form-control mb-3' placeholder='email' onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <input type='password' value={userData.password} className='form-control ' placeholder='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    </form>

                    {
                        register ?
                            <div><button type='submit' className='btn btn-primary mb-3' onClick={handleRegister}>Sign Up</button>
                                <p className='text-dark '>
                                    Already Registered? <Link to={'/login'}>Login Here...</Link></p>
                            </div>
                            : <div>
                                <button type='submit' className='btn btn-primary mb-3' onClick={handleLogin}>Sign In 
                                    {isLoggedIn && 
                                    <div className='d-flex align-items-center'>
                                        <Spinner animation="border" variant="light" className='fs-3 '/>
                                        </div>
                                      
                                    }
                                    
                                  </button>
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






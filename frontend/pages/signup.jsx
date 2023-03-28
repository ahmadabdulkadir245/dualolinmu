import { app } from "../firebase";
import { useRouter } from "next/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import Head from "next/head";
import axios from "axios";

function Signup() {
  const auth = getAuth(app);
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();
const [inputs, setInputs] = useState({
  email: '',
  password: '',
  confirmPassword: ''
})
const [err, setError] = useState(null)

  const emailIsValid = inputs.email.includes("@");
  const passwordIsValid = inputs.password.length >= 6;
  const passwordIsEqual = inputs.password === inputs.confirmPassword;
  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
    const submitHandler = async (e) => {
      e.preventDefault()
      if (emailIsValid && passwordIsValid && passwordIsEqual) {
        try{
          const res = await axios.post(process.env.SIGNUP_URL, inputs)
          router.push('/login')
          setInputs({
            email: '',
            password: '',
            confirmPassword: ''
          })
        }catch(err) {
          // setError(err.response.data)
          console.log(err)
        }
      }
      else {
        console.log('Invalid email or password do not match')
      }
    }

      const signInGoogle = async () => {
        signInWithPopup(auth, googleProvider)
          .then((response) => {
            router.push("/");
            sessionStorage.setItem("Token", response.user.accessToken);
            console.log(response.user);
          })
          .catch((err) => console.log(err));
      };

  return (
    <div className="py-10 md:py-0 grid grid-cols-1 place-content-center overflow-y-scroll xs:h-screen xs:palce-items-center xs:my-0  scrollbar-hide  text-gray-700 max-w-4xl m-auto">
    <Head>
     <title>Signup</title>
     <meta name="description" content="Generated by create next app" />
     <link rel="icon" href="/favicon.ico" />
   </Head>

      <h2 className="sm:mt-24 md:mt-0 text-2xl text-center font-bold mb-2  ">Sign Up</h2>

      <form>
        {err && <p className='text-center text-red-500 '>{err}</p>}
      <input
              type='email'
              className='border-[1px] lg:border-[1px] rounded-lg  border-gray-500] outline-none px-4 py-[16px] w-[90%]  m-auto flex my-5 lg:my-5'
              placeholder='Enter email '
              required
               onChange={inputHandler}
               name="email"
               value={inputs.email}
            />
      <input
              type='password'
              className='border-[1px] lg:border-[1px] rounded-lg  border-gray-500] outline-none px-4 py-[16px] w-[90%]  m-auto flex my-5 lg:my-5'
              placeholder='Password'
              required
              onChange={inputHandler}
              name="password"
              value={inputs.password}
            />
      <input
              type='password'
              className='border-[1px] lg:border-[1px] rounded-lg  border-gray-500] outline-none px-4 py-[16px] w-[90%]  m-auto flex my-5 lg:my-5'
              placeholder='Confrim Password'
              required
              onChange={inputHandler}
              name="confirmPassword"
              value={inputs.confirmPassword}
            />
        </form>

        <Link href="/forgot-password">
         <p  className="text-[#2F89FC] capitalize text-center font-poppins">forgot password?</p>
        </Link>

        <button className="capitalize w-[90%] h-[48px] rounded-md text-white bg-[#0E64D2] block mt-4 m-auto" onClick={submitHandler}>Signup</button>

        <p className="font-poppins text-center mt-4">Dont have an account?
        <Link href="/login" className="font-poppins text-[#2F89FC] ml-4">Login</Link>
        </p>

        <div className="flex items-center justify-between px-4 mt-4">
          <span className="w-[44%] h-[1px] bg-gray-700"></span>
          <p className="font-poppins  text-lg">or</p>
          <span className="w-[44%] h-[1px] bg-gray-700"></span>
        </div>

        <button className=" w-[90%] h-[48px] rounded-md text-white bg-[#1877F2]  mt-4 m-auto flex items-center justify-between px-2 ">
        <RiFacebookFill className="w-7 h-7 "/>
          Signup with Facebook
          <div></div>
          </button>

        <button className=" w-[90%] h-[48px] rounded-md text-gray-500 border-[1px] bg-white mt-4 m-auto flex items-center justify-between px-2 "   onClick={signInGoogle}>
        <FcGoogle className="w-7 h-7 "/>
        Signup with Google
          <div></div>
          </button>
      </div>
  );
}

export default Signup;

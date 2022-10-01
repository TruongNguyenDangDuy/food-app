import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import Nav from "../components/Nav";
import login from '../img/login.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../css/signup.css'

function SignUp() {
   const initial = {
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
   }
    return (
        
        <div>
            <Nav />
            <div className="bg-[#fff8ef] min-h-screen flex justify-center items-center  ">
                <img src={shape10} className='absolute top-0 left-0' />
                <img src={shape12} className='absolute top-[83%] left-0' />
                <img src={shape13} className='absolute top-[40%] right-[83%]' />
                <img src={shape14} className='absolute top-[6%] right-[10%]' />
                <img src={shape15} className='absolute top-[82%] right-[20%]' />
                <img src={shape16} className='absolute right-[0%] top-[46%]' />

                <div className="   ">
                    <div className=" ">
                        <div>
                            <img className="mx-auto mb-[4px]" src={login} />

                        </div>
                        <form className='formSignup'>
                            <div className="formGroup">
                                <input id='fullName' className="  formInput w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="User name..." />
                                <span className='formMess'></span>
                            </div>
                            <div className='formGroup '>
                                <input id='email' className=" formInput w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="Your email..." />
                                <span className='formMess'></span>
                            </div>
                            <div className='formGroup'>
                                <input id='passWord' className=" formInput w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="Passwords..." />
                                <span className='formMess'></span>
                            </div>
                            <div className='formformGroupignup'>
                                <input id='passWordConfirm' className=" formInput w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="Confirm your passwords..." />
                                <span className='formMess'></span>
                            </div>

                            <div className='formGroup text-center' >
                                <button className="bg-primary py-2 px-8 font-semibold text-[18px] rounded-[8px] my-2 hover:text-white hover:shadow-2xl">SUBMIT</button>
                            </div>

                        </form>

                        <div>
                            <h1 className="mb-4 text-[18px]">
                                --Sign up with your social account--
                            </h1>
                        </div>
                        <div className="text-center">
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faFacebook} /></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faInstagram} /></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faTwitter} /></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignUp;
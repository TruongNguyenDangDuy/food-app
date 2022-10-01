import Nav from "../components/Nav";
import login from '../img/login.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen  ">
            <Nav />
            <div className=" pt-[25%] flex justify-center items-center ">
                <div className="">
                    <div>
                        <img src={login}/>

                    </div>
                    <div>
                        <div>
                            <input type='text' placeholder="User name..."/>
                        </div>
                        <div>
                            <input type='text' placeholder="Your email..."/>
                        </div>
                        <div>
                            <input type='text' placeholder="passwords..."/>
                        </div>
                        <div>
                            <input type='text' placeholder="Enter your passwords..."/>
                        </div>
                        
                    </div>
                    <div>
                        <button>SUBMIT</button>
                    </div>
                    <div>
                        <h1>
                            Sign up with your social account
                        </h1>
                    </div>
                    <div>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faFacebook}/></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faInstagram}/></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faTwitter}/></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faYoutube}/></a>
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;
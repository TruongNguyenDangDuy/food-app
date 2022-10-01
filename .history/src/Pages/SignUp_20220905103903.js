import Nav from "../components/Nav";
import logo from '../img/logo.png'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen ">
            <Nav />
            <div className="max-w-[1200px] mx-auto my-0 min-h-screen">
                <div className="grid grid-cols-1 py-auto">
                    <div className="col-span-1">
                        <div>
                            <div>
                                <img src={logo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;
import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Nav() {
    return ( 
        <div className=" h-14 bg-slate-800 ">

           <div className='max-w-screen-xl flex items-center h-14 justify-between my-0 mx-auto'>
            <div>
                    <ul className='flex h-14 items-center hover:cursor-pointer ' >
                        <li>
                            <img src={logo} className="h-9 mr-10"/>
                        </li>
                        <li className='mr-6 text-white hover:bg-yellow-200' >HOME</li>
                        <li className='mr-6 text-white hover:bg-yellow-200'>MENU</li>
                        <li className='mr-6 text-white hover:bg-yellow-200'>PAGES</li>
                        <li className='mr-6 text-white hover:bg-yellow-200'>SHOP</li>
                        <li className='mr-6 text-white hover:bg-yellow-200'>NEWS</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex h-14 items-center hover:cursor-pointer '>
                        <li className='text-2xl  text-white'><FontAwesomeIcon icon={faFacebook}/></li>
                        <li className='text-2xl ml-6 text-white'><FontAwesomeIcon icon={faInstagram}/></li>
                        <li className='text-2xl ml-6 text-white'><FontAwesomeIcon icon={faYoutube}/></li>
                        <li className='text-2xl ml-6 text-white'><FontAwesomeIcon icon={faTwitter}/></li>
                        <li className='text-white ml-24'>LOGIN</li>
                        <li className='text-2xl text-white ml-24'><FontAwesomeIcon icon={faBagShopping}/></li>
                        
                    </ul>
                </div>
           </div>
        </div>
     );
}

export default Nav;
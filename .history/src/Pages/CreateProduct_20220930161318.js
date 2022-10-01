import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import Nav from "../components/Nav";
import login from '../img/login.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categories } from '../utils/data'

function CreateProduct() {
    return (
        <div>
        <Nav />
        <div className="bg-[#fff8ef] min-h-screen    ">
            <img src={shape10} className='absolute top-0 left-0' />
            <img src={shape12} className='absolute top-[83%] left-0' />
            <img src={shape13} className='absolute top-[40%] right-[83%]' />
            <img src={shape14} className='absolute top-[6%] right-[10%]'/>
            <img src={shape15} className='absolute top-[82%] right-[20%]'/>
            <img src={shape16} className='absolute right-[0%] top-[46%]'/>
            
            <div className=" max-w-[800px] my-0 mx-auto  ">
                <div className=" ">
                    <div >
                        <img className="mx-auto pt-[80px]" src={login}/>

                    </div>
                    <div>
                        <div className="">
                            <input className="w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="Give me the title you want..."/>
                        </div>
                        <div>
                            <select className='w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef]'>
                                <option value='other' className='w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none'>Select Category</option>
                                {categories.map((item, index) => {
                                    return <option className='w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none'>{item.urlParamName}</option>
                                })}
                            </select>
                        </div>
                       
                      
                        
                        
                    </div>
                   
                   
                </div>
            </div>

        </div> 
    </div>
    );
     
}

export default CreateProduct;
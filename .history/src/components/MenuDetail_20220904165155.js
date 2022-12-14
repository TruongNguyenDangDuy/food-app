<div className='text-center p-[200px] bg-[#fff8ef] relative'>
<img src={shape10} className='absolute left-0 top-[13%]' />
<img src={shape12} className='absolute left-0 top-[73%]' />

<img src={shape14} className='absolute top-[20%] right-[10%]'/>
    <div>
        <h1 className='text-[40px] font-delius font-semibold text-primary'>Food Menu</h1>
    </div>
    <div className='font-semibold font-delius italic'>
        <h1 className='text-[20px] '>Home <FontAwesomeIcon icon={faArrowRight} className='mx-2 text-primary '/> Menu</h1>
    </div>

</div>
<div className='bg-menudetail '>
    <div className='max-w-[1000px] my-0 mx-auto'>
        <div className='p-20 '>
            <ul className='flex bg-[#ebebeb]  py-4 rounded-[40px] justify-between'>
            <li className=''>
                    <a className=' activeMenu font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>ALL</a>
                </li>
                <li className=''>
                    <a className=' font-bold font-delius text-[20px] rounded-[40px]  px-6 py-4'>PIZZAS</a>
                </li>
                <li className=''>
                    <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>DRINKS</a>
                </li>
                <li className=''>
                    <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>SALADS</a>
                </li>
                <li className=''>
                    <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>PASTA</a>
                </li>
                <li className=''>
                    <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>BURGER</a>
                </li>
                <li className=''>
                    <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>DESERTS</a>
                </li>
                
                
            </ul>
        </div>
        

    </div>
    <div className='max-w-[1200px] my-0 mx-auto' >
        <div className=' flex justify-around mb-20'>
                <div className=' '>
                    <div className='py-6' >   
                        <div className='flex '>
                            <div className='max-w-[120px] mr-3'>
                                <img src={pizza1} />
                            </div>
                            <div className='relative overflow-hidden menuCart hover: cursor-pointer'>
                                <div className='flex text-[25px] font-delius font-semibold'>
                                    <h1 className=' '>Santa Fe Pizza</h1>
                                    <h1 className='ml-4 text-primary'> <FontAwesomeIcon icon={faEuroSign} />24.4</h1>

                                </div>
                                <h1 className='italic text-[#666] font-rubik font-semiblod'>Chicken breast, cheddar wrapped in a crispy
                                </h1>
                                <div className='' >
                                    <button className='px-4 py-2 bg-primary rounded-[8px] font-semibold  hover:text-white cartButton hidden absolute  hover:cursor-pointer  '>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   
                    
                    
                        
                </div>
                <div className=' '>
                    <div className='py-6' >   
                        <div className='flex '>
                            <div className='max-w-[120px] mr-3'>
                                <img src={pizza1} />
                            </div>
                            <div className='relative overflow-hidden menuCart hover: cursor-pointer'>
                                <div className='flex text-[25px] font-delius font-semibold'>
                                    <h1 className=' '>Santa Fe Pizza</h1>
                                    <h1 className='ml-4 text-primary'> <FontAwesomeIcon icon={faEuroSign} />24.4</h1>

                                </div>
                                <h1 className='italic text-[#666] font-rubik font-semiblod'>Chicken breast, cheddar wrapped in a crispy
                                </h1>
                                <div  >
                                    <button className='px-4 py-2 bg-primary rounded-[8px] font-semibold  hover:text-white cartButton hidden absolute  hover:cursor-pointer'>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                        
                </div>
            </div>
    </div>
</div>
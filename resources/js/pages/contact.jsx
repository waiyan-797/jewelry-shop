import ReactDOM from "react-dom/client";
import '../../css/app.css';
import Navbar from "../compoment/Navbar.jsx";
import Footer from '../compoment/Footer';
import hero from "../../img/hero.jpg";

import {BiSolidMap} from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
const contact = ReactDOM.createRoot(document.getElementById('contact'));

contact.render(
    <>

        <div  className="w-full overflow-x-hidden">
            <Navbar/>

            <div>
                <div className='w-full overflow-x-hidden relative'>
                    <img src={hero} alt="hero.jpg"/>
                    <div className="absolute top-0 left-0  w-full h-full bg-stone-400 opacity-30"></div>
                    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 ">
                        <p className='text-white'>GET IN TOUCH</p>
                        <h1 className="text-8xl uppercase text-white">contact us</h1>

                    </div>
                </div>

                <div className='w-full h-[450px] flex flex-col md:flex-row m-5'>
                    <div className='w-full flex justify-center '>
                       <div className='w-2/3 flex flex-col justify-center'>
                           <h1 className='font-serif text-3xl uppercase tracking-wider font-light my-3'>Message us</h1>
                           <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
                           <ul>
                               <li className='hover:text-amber-700 cursor-pointer my-2'><p><BiSolidMap className='inline'/> 123 Fifth Avenue,New York,NY 10160</p></li>
                               <li className='hover:text-amber-700 cursor-pointer my-2'><BiSolidEnvelope className='inline'/> contact@ingo.com</li>
                               <li className='hover:text-amber-700 cursor-pointer my-2'><BiSolidPhone className='inline'/> 09-798-123-885</li>
                           </ul>
                       </div>
                    </div>
                    <div className='w-full relative'>
                        <form action="" className='w-3/4 grid grid-cols-2 gap-2  bg-pink-50 p-14 absolute -top-20'>
                            <div className='col-span-1'>
                                <input type="text" name='firstname' placeholder='First name' className='w-full p-3 my-3 focus:outline-black'/>
                            </div>
                            <div className=''>
                                <input type="text" name='lastname' placeholder='Last name' className='w-full p-3 my-3 focus:outline-black' />
                            </div>
                            <div className='col-span-2'>
                                <input type="text" name='email' placeholder='Enter Your Email' className='w-full p-3 my-3 focus:outline-black'/>
                            </div>
                            <div className='col-span-2'>
                                <textarea name="message" id="" cols="40" rows="5" className='w-full p-3 my-3 focus:outline-black' ></textarea>
                            </div>
                            <button type='submit' className='w-1/2 border-2 border-stone-800 transition-all duration-75 hover:text-white hover:bg-black  py-3'>send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>

    </>
)

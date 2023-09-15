import { BiSearch} from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";


const Navbar = ()=>{
 return(
     <>
       <div className="fixed top-0 z-30 bg-white w-full h-20 flex items-center justify-between">
           <div className="w-2/3">
               <ul className=" w-full ml-10 hidden lg:flex ">
                   <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">RINGS</a></li>
                   <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">BRACELETS</a></li>
                   <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">EARRINGS</a></li>
                   <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">NECKLACES</a></li>

               </ul>
           </div>
           <div className="w-1/3">
               <h2 className="text-4xl font-light">BLINGG</h2>
               <p className="py-1 tracking-wide">JEWELRY STORE</p>
           </div>
            <div className="w-1/3 flex justify-between">
                <ul className=" w-fullitems-center mr-10 hidden lg:flex ">
                <li><a href=""><BiSearch className="text-2xl"/></a></li>
                    <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">HOME</a></li>
                    <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">ABOUT</a></li>
                    <li className="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">CONTACT</a></li>

                   <div className="flex ">
                        <li className="text-xl font-light uppercase mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="/login">Login</a></li>
                        <li className="text-xl font-light uppercase mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="/register">Register </a></li>


                   </div>

                </ul>
            </div>


            <div className="mx-10">

                <button className="lg:hidden text-2xl hover:bg-gray-300 rounded-xl py-2 px-4"><BiMenuAltLeft/></button>
            </div>

       </div>
     </>
 )

}

export default Navbar;

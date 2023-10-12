import hero from "../../img/hero.jpg";
import logo1 from "../../img/card/logo-001.png";
import logo2 from "../../img/card/logo-002.png";
import logo3 from "../../img/card/logo-003.png";
import logo4 from "../../img/card/logo-004.png";
import logo5 from "../../img/card/logo-005.png";
import logo6 from "../../img/card/logo-006.png";
import logo7 from "../../img/card/logo-007.png";
import logo8 from "../../img/card/logo-008.png";

import $ from "jquery";

const Bender = ()=>{







   $(document).ready(function(){

       let actives = document.querySelectorAll('.active');

       // console.log(actives)

       let index = 1;

       function slide(){

           if(index === actives.length){
                 index = 0;


           }else {

               const val = actives[index].getAttribute('slidevaleu');
               actives.forEach(active=>{
                   active.className= 'w-2 h-2 rounded-full bg-gray-500 cursor-pointer hover:bg-amber-600 mx-2 active';

               })

               actives[index].className = "w-2 h-2 rounded-full bg-amber-600 cursor-pointer  mx-2 active";


               $('.cardbox').css({
                   transform :`translateX(-${val}%)`,
                   transition : 'all 1s linear'
               })

               // console.log(index)
               index += 1;
           }


       }


       setInterval(slide,4000);


        $('.active').click('click',function(e){



            const val = e.target.getAttribute('slidevaleu');
            // console.log(value)
            actives.forEach(active=>{
                active.className= 'w-2 h-2 rounded-full bg-gray-500 cursor-pointer hover:bg-amber-600 mx-2 active';

            })

            $('.cardbox').css({
                transform :`translateX(-${val}%)`
            })
            e.target.className = "w-2 h-2 rounded-full bg-amber-600 cursor-pointer  mx-2 active";


        })

   })






    return (
        <>
            <div className="w-full overflow-x-hidden relative mt-20">
                <img src={hero} alt="hero.jpg"/>

                <div className="absolute top-7 md:top-1/4  left-16 md:left-24 ">
                    <p className="uppercase text-xs md:text-md lg:text-lg tracking-wide font-bold ">New Collection</p>
                    <h2 className="text-3xl md:text-4xl lg:text-7xl font-serif my-1 sm:my-3">THE NEW RING</h2>
                    <h2 className="text-3xl md:text-4xl lg:text-7xl font-serif uppercase my-1">sensation</h2>
                    <p className="w-3/4 md:w-2/3 text-gray-600 mb-2 sm:mb-4 lg:my-5"> Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>

                    <button className="uppercase text-sm md:text-md tracking-wider border border-1 border-black py-2 sm:py-4  px-10 md:px-16 transition-all duration-75 hover:text-white hover:bg-black">shop now</button>
                </div>
            </div>


            <div className="w-full">
                <div className='w-full flex cardbox'>

                    <img src={logo1} alt="logo1" className="border border-gray-300 mx-2 my-6"/>

                    <img src={logo2} alt="logo2" className="border border-gray-300 mx-2 my-6"/>

                    <img src={logo3} alt="logo3" className="border border-gray-300 mx-2 my-6"/>

                    <img src={logo4} alt="logo4" className="border border-gray-300 mx-2 my-6"/>
                    <img src={logo5} alt="logo5" className="border border-gray-300 mx-2 my-6"/>
                    <img src={logo6} alt="logo6" className="border border-gray-300 mx-2 my-6"/>
                    <img src={logo7} alt="logo7" className="border border-gray-300 mx-2 my-6"/>
                    <img src={logo8} alt="logo8" className="border border-gray-300 mx-2 my-6"/>

                </div>

                <div className="w-full flex justify-center">
                    <div slidevaleu ="0" className="w-2 h-2 rounded-full bg-amber-600 cursor-pointer  mx-2 active"></div>

                    <div slidevaleu ="20" className="w-2 h-2 rounded-full bg-gray-500 cursor-pointer hover:bg-amber-600 mx-2 active"></div>
                    <div slidevaleu ="40" className="w-2 h-2 rounded-full bg-gray-500 cursor-pointer hover:bg-amber-600 mx-2 active"></div>
                    <div slidevaleu ="60" className="w-2 h-2 rounded-full bg-gray-500 cursor-pointer hover:bg-amber-600 mx-2 active"></div>
                </div>


            </div>



        </>
    )
}

export default Bender;

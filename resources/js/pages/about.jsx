import ReactDOM from "react-dom/client";
import '../../css/app.css';
import Navbar from "@/compoment/Navbar.jsx";
import hero from '../../img/hero.jpg';
import bg1 from '../../img/bg/bg-1.jpg';
import bg3 from '../../img/bg/bg-03.jpg';

import Footer from '../compoment/Footer';
const about = ReactDOM.createRoot(document.getElementById('about'));

about.render(
    <>
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <div className='w-full overflow-x-hidden relative'>
                <img src={hero} alt="hero.jpg"/>
                <div className="absolute top-0 left-0  w-full h-full bg-stone-400 opacity-30"></div>
                <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 ">
                    <p className='text-white'>A FEW WORDS</p>
                    <h1 className="text-8xl text-white">About us</h1>

                </div>


            </div>
            <div className='w-full p-5'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-3/4 lg:w-1/3 text-center lg:text-left'>
                        <p className='tracking-[3px]'>MATTIS VELIT EGET</p>
                        <h1 className="text-4xl lg:text-7xl uppercase font-serif my-4">ABOUT THE founder</h1>
                        <p className='font-serif text-2xl lg:text-3xl text-stone-600'>FUSCE EGESTAS MI URNA, ID PULVINAR IPSUM DICTUM EGET. MAURIS IN DOLOR VELIT.</p>
                        <div className='w-20 h-0.5 bg-amber-600 my-3 mx-auto lg:mx-0'></div>
                        <p className='text-gray-500 text-xl leading-8 lg:leading-10'>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
                        <p className='text-gray-500 text-xl leading-8 lg:leading-10  my-3'>Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.</p>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={bg1} alt="bg1"/>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img src={bg3} alt="bg3" className='w-full'/>
            </div>
            <div className='w-full p-5'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='lg:w-1/3'>
                        <p className='tracking-[3px] uppercase'>about us</p>
                        <h1 className='text-1xl lg:text-3xl uppercase font-serif my-4'>how it all started</h1>
                    </div>
                    <div className='lg:w-1/2 flex flex-col justify-end'>
                        <h1 className='text-1xl lg:text-2xl uppercase font-serif tracking-[4px] my-4'>ETIAM VENENATIS MATTIS MAURIS, ET TEMPOR ERAT ULTRICIES NON.</h1>
                        <p className='text-gray-500 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis.</p>
                        <div className='my-4'>
                            <h4>1924 - ESTABLISHED</h4>
                            <p className='text-gray-500 leading-8 my-2'>Curabitur ac tortor ut est porta efficitur non sed ante. Donec vel gravida dolor. Donec dictum non elit vel congue. Proin at nunc ut velit rutrum ornare. Vivamus elementum congue porta.</p>
                        </div>
                        <div className='my-4'>
                            <h4>1950 - VIVAMUS ELEMENTUM</h4>
                            <p className='text-gray-500 leading-8 my-2'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eu erat bibendum mauris accumsan suscipit vitae eu ante. In tristique placerat libero vel maximus. Quisque justo lorem, faucibus a augue ac, condimentum varius mi. Vivamus pulvinar sapien eget vulputate pharetra.</p>
                        </div>
                        <div className='my-4'>
                            <h4>1975 - MAGNIS PARTURIENT</h4>
                            <p className='text-gray-500 leading-8 my-2'> Curabitur scelerisque mi ut lectus mattis viverra. Morbi volutpat suscipit dolor. Donec vel libero in elit luctus pretium sed id risus. Phasellus non interdum mauris. Ut auctor eros mi, at rhoncus dolor rhoncus sed. Donec congue dolor aliquet ante porta consequat. Duis pellentesque fermentum lorem in commodo.</p>
                        </div>
                        <div className='my-4'>
                            <h4>2010 - INTERDUM MAURIS</h4>
                            <p className='text-gray-500 leading-8 my-2'>Magnis dis parturient montes, nascetur ridiculus mus. Nunc eu erat bibendum mauris accumsan suscipit vitae eu ante. In tristique placerat libero vel maximus</p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    </>
);

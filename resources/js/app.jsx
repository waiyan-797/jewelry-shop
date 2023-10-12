
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import Navbar from "@/compoment/Navbar.jsx";
import Bender from "@/compoment/Bander.jsx";
import Footer from './compoment/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
        <div className="w-full overflow-x-hidden">
            {/*<Navbar />*/}
            <Bender/>
            <Footer/>
        </div>
     </>
);



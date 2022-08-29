import './styles/page.css';

import { Header } from "./Header";
import { Data } from './Data';
import { Navbar } from './Navbar';
import { Members } from './Members';
import { Games } from './Games';
import { Links } from './Links';
import { Meeting } from './Meeting';
import { Footer } from './Footer';

function Page() {
    return ( 
        <div className='page__container'>
            <Header />
            <Navbar />
            <Data />
            <Members />
            <Games />
            <Meeting />
            <Links />
            <Footer/>
        </div>
     );
}

export { Page };
import './styles/page.css';

import { Header } from "./Header";
import { Data } from './Data';
import { Navbar } from './Navbar';
import { Members } from './Members';
import { Games } from './Games';

function Page() {
    return ( 
        <div className='page__container'>
            <Header />
            <Navbar />
            <Data />
            <Members />
            <Games />
        </div>
     );
}

export { Page };
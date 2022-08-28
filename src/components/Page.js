import './styles/page.css';
import { Header } from "./Header";
import { Data } from './Data';
import { Navbar } from './Navbar';

function Page() {
    return ( 
        <div className='page__container'>
            <Header />
            <Navbar />
            <Data />
        </div>
     );
}

export { Page };
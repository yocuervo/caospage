import './styles/header.css';

function Header() {
    return (
        <div className='row header__container'>
            <div className='col-8 header_one'>
                Logo1
            </div>
            <div className='col header_two'>
                Logo 2
            </div>
        </div>

    );
}

export { Header };
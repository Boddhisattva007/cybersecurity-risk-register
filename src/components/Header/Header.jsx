import { Link } from 'react-router';
//Header Function
function Header() {

    return (

        <header>
            <p className="header-title">Cybersecurity Risk Register</p>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/riskregister">Risk Register</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            
        </header>
    );


}

//Exporting Header
export default Header;
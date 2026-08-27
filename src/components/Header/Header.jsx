import { Link } from 'react-router';

function Header() {

    return (

        <header>
            <h1>Cybersecurity Risk Register</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/riskregister">RiskRegister</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );


}

export default Header;
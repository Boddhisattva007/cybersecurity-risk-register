import { Link } from "react-router";

// Home Page Function
function Home() {

    return (
        <section className="home-page">

            <div className="home-intro">

                <h1>CYBERSECURITY RISK REGISTER</h1>

                <p>A simple way to identify, assess, and manage cybersecurity risks.</p>

                <Link className="home-button" to="/riskregister">Risk Register</Link>

            </div>


            <p>How It Works</p>

            <ol>
                <li>Record a Risk</li>
                <li>Assign Likelihood</li>
                <li>Assign Impact</li>
                <li>Review Calculated Severity</li>
            </ol>

        </section>
    );
}

//Exporting Home
export default Home;
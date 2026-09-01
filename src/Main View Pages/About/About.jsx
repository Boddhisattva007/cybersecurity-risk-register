import riskMatrixImage from "../../assets/Cyber Security Risk Matrix.png"
// About Page Function
function About() {

    return (

        <section className="about-page">

            <h1>About</h1>

            <h2>The Risk Assesment</h2>

            <p>
                Each risk is assigned a likelihood and impact by the user. These values
                are used to calculate a risk score and determine the overall risk severity.
            </p>

            <img src={riskMatrixImage} alt="5 x 5 cybersecurity risk matrix showing likelihood, impact, and severity levels"/>

            <p>Likelihood x Impact = Risk Score = Severity</p>

            <h2>Risk Severity</h2>


            <table>

                <thead>

                    <tr>
                        <th>Risk Score</th>
                        <th>Severity</th>
                    </tr>


                </thead>

                <tbody>
                    
                    <tr>
                        <td>1 - 4</td>
                        <td>Low</td>
                    </tr>

                    <tr>
                        <td>5 - 9</td>
                        <td>Moderate</td>
                    </tr>

                    <tr>
                        <td>10 - 16</td>
                        <td>High</td>
                    </tr>

                    <tr>
                        <td>17 - 25</td>
                        <td>Critical</td>
                    </tr>

                </tbody>


            </table>


            <h2>Application Features</h2>

            <ul>
                <li>Add Risks</li>
                <li>Edit Risks</li>
                <li>Delete Risks</li>
                <li>Calculate Risk Score</li>
                <li>Filter Risks</li>

            </ul>

        </section>
    );
}

//Exporting About 
export default About;
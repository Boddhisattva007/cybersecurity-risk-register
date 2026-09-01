
// About Page Function
function About() {

    return (

        <div>
            <h1>About Page</h1>

            <h2>Risk Assesment</h2>

            <p>Likelihood x Impact = Risk Score = Severity</p>

            <p>
                Each risk is assigned a likelihood and impact by the user. These values
                are used to calculate a risk score and determine the overall risk severity.
            </p>

            <h2>Application Features</h2>

            <ul>
                <li>Add Risks</li>
                <li>Edit Risks</li>
                <li>Delete Risks</li>
                <li>Calculate Risk Score</li>
                <li>Filter Risks</li>

            </ul>

        </div>
    );
}

//Exporting About 
export default About;
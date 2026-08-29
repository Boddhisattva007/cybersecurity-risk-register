//Risk Card function
function RiskCard({ risk }){

    return(

        <section>

            <h2>Risk Information</h2>

            {/* Displays each "Risk Card" using riskId as the tertiary heading */}
            <h3>{risk.riskId}</h3>

            <ul>
                <li>Asset: {risk.asset}</li>
                <li>Vulnerability: {risk.vulnerability}</li>
                <li>Threat: {risk.threat}</li>
                <li>Description: {risk.description}</li>
                <li>Likelihood: {risk.likelihood}</li>
                <li>Impact Score: {risk.impact}</li>
                <li>Mitigation: {risk.mitigation}</li>
                <li>Current Status: {risk.status}</li>
                <li>Risk Owner: {risk.owner}</li>



            </ul>


        </section>


    );

}


        // likelihood,
        // impact,
        // mitigation,
        // status,
        // owner

//Export Risk Card function
export default RiskCard;
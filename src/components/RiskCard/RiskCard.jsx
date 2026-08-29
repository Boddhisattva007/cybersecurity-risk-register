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
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>



            </ul>


        </section>


    );

}

        // riskId,
        // asset,
        // riskDescription,
        // threat,
        // vulnerabilityDescription,
        // likelihood,
        // impact,
        // mitigation,
        // status,
        // owner

//Export Risk Card function
export default RiskCard;
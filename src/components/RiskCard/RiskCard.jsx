import {riskScoreCalculation, riskScoreSeverity} from "../../utilities/riskCalculations.js";

//Risk Card function
function RiskCard({ risk }){

    const riskScore = riskScoreCalculation(risk.likelihood, risk.impact);
    const severity = riskScoreSeverity(riskScore);

    return(

        <section>

            {/* Displays each "Risk Card" using riskId as the tertiary heading. */}
            <h3>{risk.riskId}</h3>

            {/* List items for each key/value pair associated with each risk card. */}
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

            <h4>
                Risk Score: {riskScore}
                <br />
                Risk Severity: {severity}
            </h4>

        </section>


    );

}


//Export Risk Card function
export default RiskCard;
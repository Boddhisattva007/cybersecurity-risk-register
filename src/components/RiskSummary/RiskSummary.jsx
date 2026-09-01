import {riskScoreCalculation, riskScoreSeverity} from "../../utilities/riskCalculations.js";

//Risk Summary Function
function RiskSummary({ risks }) {
    //Takes risks array length and assigns it to totalRisks variable.
    const totalRisks = risks.length;

    // Filters through the risks array and returns a new array with the total number (.length)
    // of risk items that are labled "Open", then assigns them to the openRisks variable.
    const openRisks = risks.filter((risk) => risk.status === "Open").length

    // Filters through the risks array and returns a new array with the total number (.length)
    // of risk items that are labled "Closed", then assigns them to the closedRisks variable.
    const closedRisks = risks.filter((risk) => risk.status === "Closed").length;

    // Initializing risk severity variables.
    let lowRisks = 0;
    let moderateRisks = 0;
    let highRisks = 0;
    let criticalRisks = 0;

    // For each risk in the risks array...
    risks.forEach((risk) => {

        // Calculate the riskScore with the riskScoreCalculation function.
        const riskScore = riskScoreCalculation(risk.likelihood, risk.impact);

        // Use the riskScore calculation to determine level of severity with the riskScoreSeverity function.
        const severity = riskScoreSeverity(riskScore);
            
        // Conditional if statement block that separates the risk items/cards by severity level.
        if (severity === "Low") {
            lowRisks = lowRisks + 1;
        } else if (severity === "Moderate") {
            moderateRisks = moderateRisks + 1;
        } else if (severity === "High") {
            highRisks = highRisks + 1;
        } else if (severity === "Critical") {
            criticalRisks = criticalRisks + 1;
        }

    });


    return(

        <section>

            <h2 className="risk-sum">Risk Summary</h2>

            <p>Total Risks: {totalRisks}</p>
            <p>Open Risks: {openRisks}</p>
            <p>Closed Risks: {closedRisks}</p>

            <p>Low Risks: {lowRisks}</p>
            <p>Moderate Risks: {moderateRisks}</p>
            <p>High Risks: {highRisks}</p>
            <p>Critical Risks: {criticalRisks}</p>

        </section>

    );
}

//Exporting Risk Summary
export default RiskSummary;
//Function to Calculate Risk Score
function riskScoreCalculation(likelihood, impact) {

    return likelihood * impact;

}

//Risk Score Severity Calculation
function riskScoreSeverity(riskScore) {
    if (riskScore <=4) {
        return "Low";
    } else if (riskScore <= 9) {
        return "Moderate";
    } else if (riskScore <=16) {
        return "High";
    } else {
        return "CRITICAL";
    }
}





export { riskScoreCalculation, riskScoreSeverity };

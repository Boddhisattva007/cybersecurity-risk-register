


function RiskRgister() {

    const impact = userSelectImpact;
    const likelihood = userSelectLiklihood;
    const riskScore = (likelihood * impact);


    return riskScore;
}

export default RiskRgister;
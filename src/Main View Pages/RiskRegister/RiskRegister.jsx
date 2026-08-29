import RiskForm from "../../components/RiskForm/RiskForm.jsx";

// Risk Register Function
function RiskRegister() {

    // Parent that passes/returns data to:
    // RiskForm, RiskList, RiskSummary, & RiskCard child components.
    // Also a Child to App.jsx, eturns the Risk Register element.

    return (

        <section>

            <h1>Risk Register</h1>

            <p><RiskForm /></p>


        </section>

    );


}

    // const impact = userSelectImpact;
    // const likelihood = userSelectLiklihood;
    // const riskScore = (likelihood * impact);


    // return riskScore;

// Exporting RiskRegister
export default RiskRegister;
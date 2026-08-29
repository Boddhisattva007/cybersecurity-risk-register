import RiskForm from "../../components/RiskForm/RiskForm.jsx";
import RiskCard from "../../components/RiskCard/RiskCard.jsx";
import RiskList from "../../components/RiskList/RiskList.jsx";
import RiskSummary from "../../components/RiskSummary/RiskSummary.jsx";
import Risk from "../../classes/risk.js";

// Risk Register Function
function RiskRegister() {

    // Parent that passes/returns data to:
    // RiskForm, RiskList, RiskSummary, & RiskCard child components.
    // Also a Child to App.jsx, eturns the Risk Register element.

    return (

        <section>

            <h1>Risk Register</h1>

            <RiskForm />
            <RiskCard />
            <RiskList />
            <RiskSummary />


        </section>

    );


}


// Exporting RiskRegister
export default RiskRegister;
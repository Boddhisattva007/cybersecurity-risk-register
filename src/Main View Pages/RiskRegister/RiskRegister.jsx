import { useState } from "react";
import RiskForm from "../../components/RiskForm/RiskForm.jsx";
import RiskList from "../../components/RiskList/RiskList.jsx";
import RiskSummary from "../../components/RiskSummary/RiskSummary.jsx";
import mockDataArray from "../../data/mockRiskData.js";

// Risk Register Function
function RiskRegister() {

    // Setting the mockDataArray as current risks stored in React state using setRisks function.
    const [risks, setRisks] = useState(mockDataArray);

    // Parent that passes/returns data to:
    // RiskForm, RiskList, & RiskSummary child components.
    // Also a Child to App.jsx, eturns the Risk Register element.
    return (

        <section>

            <h1>Risk Register</h1>

            <RiskForm />


            {/* Passes mock risk data down as props to RiskList Child Component & renders RiskList element. */}
            <RiskList risks={risks} /> 


            <RiskSummary risks={risks} />


        </section>

    );


}


// Exporting RiskRegister
export default RiskRegister;
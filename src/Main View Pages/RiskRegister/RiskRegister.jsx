import { useState } from "react";
import RiskForm from "../../components/RiskForm/RiskForm.jsx";
import RiskList from "../../components/RiskList/RiskList.jsx";
import RiskSummary from "../../components/RiskSummary/RiskSummary.jsx";
import mockDataArray from "../../data/mockRiskData.js";

// Risk Register Function
function RiskRegister() {

    // Setting the mockDataArray as current risks stored in React state using setRisks function.
    const [risks, setRisks] = useState(mockDataArray);

    // Sets new Risk number.
    const [riskNumber, setRiskNumber] = useState(mockDataArray.length + 1);

    // Function to add a new risk object using the spread operator by updating the 
    // React state with a new array, with the new risk added at the end.
    function addRisk(newRisk) {
        setRisks([...risks, newRisk]);
        setRiskNumber(riskNumber + 1);

    }

    // Parent that passes/returns data to:
    // RiskForm, RiskList, & RiskSummary child components.
    // Also a Child to App.jsx, eturns the Risk Register element.
    return (

        <section>

            <h1>Risk Register</h1>

            {/* Passes down addRisk function to the RiskForm Child Component. */}
            <RiskForm addRisk={addRisk} riskNumber={riskNumber}/>


            {/* Passes mock risk data down as props to RiskList Child Component & renders RiskList element. */}
            <RiskList risks={risks} /> 


            <RiskSummary risks={risks} />


        </section>

    );


}


// Exporting RiskRegister
export default RiskRegister;
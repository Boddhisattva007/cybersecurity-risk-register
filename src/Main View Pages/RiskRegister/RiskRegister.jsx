import { useState } from "react";
import {riskScoreCalculation, riskScoreSeverity} from "../../utilities/riskCalculations.js";
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

    // Sets the currently selected severity filter to "All" as the default state.
    const [severityFilter, setSeverityFilter] = useState("All");

    // Sets the currently selected status filter to "All" as the default state.
    const [statusFilter, setStatusFilter] = useState("All");

    // Function to add a new risk object using the spread operator by updating the 
    // React state with a new array, with the new risk added at the end.
    function addRisk(newRisk) {
        setRisks([...risks, newRisk]);
        setRiskNumber(riskNumber + 1);

    }

    // Function to delete a risk object.
    // Filters every risk object by riskId and creates a new array 
    // where only the risks not being deleted remain.
    function deleteRisk(riskId) {
        setRisks(risks.filter((risk) => risk.riskId !== riskId));
    }

    // Function that allows the user to edit a risk after being submitted.
    function editRisk(updatedRisk){

        // Uses .map to return a new array with the updated risk object.
        setRisks(risks.map((risk) => {

            // Conditional statement to return either the edited/updated risk object or not.
            if (risk.riskId === updatedRisk.riskId){
                return updatedRisk;
            } else {
                return risk;
            }
        
        }));

    }

    // Updates severityFilter to user selection.
    function handleSeverityFilterChange(event) {
        setSeverityFilter(event.target.value);

    }

    // Initializes filteredRisks variable to all risks in the risks array.
    let filteredRisks = risks;

    // Conditional if statement runs if the user selects a severity level other than "All".
    if(severityFilter !== "All") {
        // Filters through the risks array...
        filteredRisks = risks.filter((risk) => {

            // Calculates the riskScore with the riskScoreCalculation function and store it in the locacl variable riskScore.
            const riskScore = riskScoreCalculation(risk.likelihood, risk.impact);

            // Uses the riskScore calculation to determine level of severity with the riskScoreSeverity function.
            // Then stores it in the local severity variable.
            const severity = riskScoreSeverity(riskScore);

            // Takes the severity string returned by the riskScoreSeverity function and compares it to the user selected
            // severity level, if they match it returns true. If true, the new array contains only those risks.
            return severity === severityFilter;
            
        });
    }

    // Updates statusFilter to user selection.
    function handleStatusFilterChange(event) {
        setStatusFilter(event.target.value);

    }

    // Conditional if statement that filters the pre filtered risks by status when specific status is selected by user.
    if (statusFilter !== "All") {
        // Filters through the risks array...
        filteredRisks = filteredRisks.filter((risk) => {
            // For every risk, compare the status to the user selected status and return true or false.
            return risk.status === statusFilter;

        });

    }

    // Parent that passes/returns data to:
    // RiskForm, RiskList, & RiskSummary child components.
    // Also a Child to App.jsx, eturns the Risk Register element.
    return (

        <section>

            <h1 className="risk-reg-heading">Risk Register</h1>

            {/* Passes down addRisk function to the RiskForm Child Component. */}
            <RiskForm addRisk={addRisk} riskNumber={riskNumber}/>

            <h2 className="filter-risks-heading">Filter Risks</h2>

            <label>
                Filter by Severity:
                <br />
                <select
                value={severityFilter}
                onChange={handleSeverityFilterChange}
                >
                    <option value="All">--</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>

                </select>

            </label>

            <br />
            <br />

            <label>
                Filter by Status:
                <br />
                <select
                value={statusFilter}
                onChange={handleStatusFilterChange}
                >
                    <option value="All">--</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>

            </label>

            {/* Passes mock risk data down as a prop to RiskList Child Component & renders RiskList element.
            Also passes deleteRisk fucntion down to RiskList.jsx as a prop. */}
            <RiskList risks={filteredRisks} deleteRisk={(deleteRisk)} editRisk={editRisk} /> 


            <RiskSummary risks={risks} />


        </section>

    );


}


// Exporting RiskRegister
export default RiskRegister;
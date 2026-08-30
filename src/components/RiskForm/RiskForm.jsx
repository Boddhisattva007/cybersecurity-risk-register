import { useState } from "react";
import Risk from '../../classes/risk.js';

// RiskForm Function
function RiskForm({ addRisk, riskNumber }){

    // formData variable that stores the users input for a new risk object.
    const [formData, setFormData] = useState({
        asset: "",
        threat: "",
        vulnerability: "",
        description: "",
        likelihood: "",
        impact: "",
        mitigation: "",
        status: "Open",
        owner: ""

    })

    // Input handler function that updaes the values of the formData object when a user enters new risk information.
    function handleChange(event) {

        // Gets the name and value from the form field with the information entered by the user.
        const { name, value } = event.target;

        //Sets the formData with the updated key/value pair entered by the user.
        setFormData({ ...formData, [name]: value});


    }

    // Function that creates and adds a new risk.
    function handleSubmit(event) {

        // Prevents a refresh of the browswer when submit button is pushed.
        event.preventDefault();

        // Turns riskNumber into a string.
        let nextRiskNumber = String(riskNumber);
        
        // Conditional statement determining how many leading 0's are needed.
        if (nextRiskNumber.length === 1) {
            nextRiskNumber = "00" + nextRiskNumber;
        } else if (nextRiskNumber.length === 2) {
            nextRiskNumber = "0" + nextRiskNumber;
        } else {
            nextRiskNumber = nextRiskNumber;
        }

        // Creates new risk ID.
        const riskId = `RISK-${nextRiskNumber}`;

        // Creates a new risk object from user input.
        const newRisk = new Risk(
            riskId,
            formData.asset,
            formData.threat,
            formData.vulnerability,
            formData.description,
            Number(formData.likelihood),
            Number(formData.impact),
            formData.mitigation,
            formData.status,
            formData.owner

        );

        // Adds new risk object to the risks array.
        addRisk(newRisk);

    }

    

    return(

        <section>

            <h2>Risk Input Form</h2>

            {/* Main Form */}
            <form onSubmit={handleSubmit}>

                {/* Form Fields */}

                <label>
                    Asset:
                    <input 
                    type="text"
                    name="asset"
                    value={formData.asset}
                    onChange={handleChange}
                    />

                </label>

                <label>
                    Threat:
                    <input
                    type="text"
                    name="threat"
                    value={formData.threat}
                    onChange={handleChange}
                    />

                </label>


                <label>
                    Vulnerability:
                    <input
                    type="text"
                    name="vulnerability"
                    value={formData.vulnerability}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Risk Description:
                    <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Likelihood:
                    <select
                    name="likelihood"
                    value={formData.likelihood}
                    onChange={handleChange}
                    >
                        <option value="">Select Likelihood</option>
                        <option value="1">1 - Very Low</option>
                        <option value="2">2 - Low</option>
                        <option value="3">3 - Medium</option>
                        <option value="4">4 - High</option>
                        <option value="5">5 - Very High</option>

                    </select>

                </label>

                <label>
                    Impact:
                    <select
                    name="impact"
                    value={formData.impact}
                    onChange={handleChange}
                    >
                        <option value="">Select Impact</option>
                        <option value="1">Level 1 - Minimal</option>
                        <option value="2">Level 2 - Minor</option>
                        <option value="3">Level 3 - Moderate</option>
                        <option value="4">Level 4 - Major</option>
                        <option value="5">Level 5 - Critical</option>
                    </select>

                </label>


                <label>
                    Mitigation Strategy:
                    <textarea
                    name="mitigation"
                    type="text"
                    value={formData.mitigation}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Current Status:
                    <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    >
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>

                </label>

                <label>
                    Risk Owner:
                    <input
                    type="text"
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                    />
                </label>

                <button type="submit">Add Risk</button>

            </form>

        </section>


    );
}
// Exporting RiskForm
export default RiskForm;
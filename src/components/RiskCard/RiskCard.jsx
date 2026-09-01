import { useState } from "react";
import {riskScoreCalculation, riskScoreSeverity} from "../../utilities/riskCalculations.js";
import Risk from '../../classes/risk.js';
import Button from "../../components/Button/Button.jsx";

//Risk Card function
function RiskCard({ risk, deleteRisk, editRisk }){

    // Variable that holds editing state as a boolean.
    const [isEditing, setIsEditing] = useState(false);

    // Variable that holds blank field validation errors for the risk form.
    const [editFormError, setEditFormError] = useState("");

    // Variables assigned to riskScoreCalculation and the riskScoreSeverity
    const riskScore = riskScoreCalculation(risk.likelihood, risk.impact);
    const severity = riskScoreSeverity(riskScore);

    // Variable that stores the field information while editing.
    const [editedFormData, setEditedFormData] = useState({
        asset: risk.asset,
        threat: risk.threat,
        vulnerability: risk.vulnerability,
        description: risk.description,
        likelihood: risk.likelihood,
        impact: risk.impact,
        mitigation: risk.mitigation,
        status: risk.status,
        owner: risk.owner

    });

    // Delete risk handler function.
    function handleDeleteRisk(){
        deleteRisk(risk.riskId);
    }

    // Edit risk handler function.
    function handleEditRisk() {
        setIsEditing(true);
    }


    // Input handler function that updaes the values of the formData object when a user enters edits risk information.
    function handleEditChange(event) {

        // Gets the name and value from the edited form field with the information entered by the user.
        const { name, value } = event.target;

        // Sets the editedFormData with the changes made by the user.
        setEditedFormData({...editedFormData, [name]: value});

    }

    // Handler function that creates an updated risk object and allows the user to either "save" or "cancel" their edits.
    function handleEditSubmit(event) {

        event.preventDefault()

        // Conditional if statement that checks to see if all form fields have been completed.
        if (
            editedFormData.asset === "" ||
            editedFormData.threat === "" ||
            editedFormData.vulnerability === "" ||
            editedFormData.description === "" ||
            editedFormData.likelihood === "" ||
            editedFormData.impact === "" ||
            editedFormData.mitigation === "" ||
            editedFormData.status === "" ||
            editedFormData.owner === ""
        ){

            setEditFormError("ERROR: All fields must be completed.");

            // Exits if statement. 
            return;

        }

        // Sets the error message back to an empty string after successful input validation.
        setEditFormError("");

        // Creates the updated risk object with the field changes entered by the user. 
        const updatedRisk = new Risk(
            risk.riskId,
            editedFormData.asset,
            editedFormData.threat,
            editedFormData.vulnerability,
            editedFormData.description,
            Number(editedFormData.likelihood),
            Number(editedFormData.impact),
            editedFormData.mitigation,
            editedFormData.status,
            editedFormData.owner
        );

        //Passes updatedRisk to editRisk function in the RiskRegister.
        editRisk(updatedRisk);

        // Sets isEditing back to false.
        setIsEditing(false);


    }

    // Hanlder function that allows the user to cancel their edits and keeps original formData.
    function handleCancelEdit(event) {

        setEditedFormData({

            asset: risk.asset,
            threat: risk.threat,
            vulnerability: risk.vulnerability,
            description: risk.description,
            likelihood: risk.likelihood,
            impact: risk.impact,
            mitigation: risk.mitigation,
            status: risk.status,
            owner: risk.owner

        });

        // If "Cancel" button is clicked, this resets the editFormError message back to an empty string.
        setEditFormError("");

        // Sets isEditing back to false.
        setIsEditing(false);

    }

    return(
        

        <section className="risk-card">

            {/* Displays each "Risk Card" using riskId as the tertiary heading. */}
            <h3 className="risk-id">{risk.riskId}</h3>

            {/* Conditional ternary statement to determine if in Editing mode or not 
            based on the boolean value of isEditing. */}
            {isEditing ? (

                // If isEditing is boolean true, render this on the page.
                <form onSubmit={handleEditSubmit}>

                    {/* Renders editFormError message to the page. */}
                    {editFormError && <p>{editFormError}</p>}

                    <label>
                        Asset:
                        <br />
                        <input
                        type="text"
                        name="asset"
                        value={editedFormData.asset}
                        onChange={handleEditChange}
                        />

                    </label>

                    <br />
                    <br />

                    <label>
                        Threat:
                        <br />
                        <input
                        type="text"
                        name="threat"
                        value={editedFormData.threat}
                        onChange={handleEditChange}
                        />

                    </label>

                    <br />
                    <br />

                    <label>
                        Vulnerability:
                        <br />
                        <input
                        type="text"
                        name="vulnerability"
                        value={editedFormData.vulnerability}
                        onChange={handleEditChange}
                        />
                    </label>

                    <br />
                    <br />

                    <label>
                        Risk Description:
                        <br />
                        <textarea
                        type="text"
                        name="description"
                        value={editedFormData.description}
                        onChange={handleEditChange}
                        />
                    </label>

                    <br />
                    <br />

                    <label>
                        Likelihood:
                        <br />
                        <select
                        name="likelihood"
                        value={editedFormData.likelihood}
                        onChange={handleEditChange}
                        >
                            <option value="1">1 - Very Low</option>
                            <option value="2">2 - Low</option>
                            <option value="3">3 - Medium</option>
                            <option value="4">4 - High</option>
                            <option value="5">5 - Very High</option>

                        </select>

                    </label>

                    <br />
                    <br />

                    <label>
                        Impact:
                        <br />
                        <select
                        name="impact"
                        value={editedFormData.impact}
                        onChange={handleEditChange}
                        >
                            <option value="1">Level 1 - Minimal</option>
                            <option value="2">Level 2 - Minor</option>
                            <option value="3">Level 3 - Moderate</option>
                            <option value="4">Level 4 - Major</option>
                            <option value="5">Level 5 - Critical</option>
                        </select>

                    </label>

                    <br />
                    <br />

                    <label>
                        Mitigation Strategy:
                        <br />
                        <textarea
                        name="mitigation"
                        type="text"
                        value={editedFormData.mitigation}
                        onChange={handleEditChange}
                        />
                    </label>

                    <br />
                    <br />

                    <label>
                        Current Status:
                        <br />
                        <select
                        name="status"
                        value={editedFormData.status}
                        onChange={handleEditChange}
                        >
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>

                    </label>

                    <br />
                    <br />

                    <label>
                        Risk Owner:
                        <br />
                        <input
                        type="text"
                        name="owner"
                        value={editedFormData.owner}
                        onChange={handleEditChange}
                        />
                    </label>

                    <br />
                    <br />

                    {/* Save Changes Button */}
                    <Button type="submit" buttonText="Save"/>

                    {/* Cancel Button */}
                    <Button type="button" buttonText={"Cancel"} onClick={handleCancelEdit}/>

                </form>

            ) : (

                // If isEditing is boolean false, render this on the page.
                <div>

                    {/* List items for each key/value pair associated with each risk card. */}
                    <ul>
                        <li>Asset: {risk.asset}</li>
                        <li>Threat: {risk.threat}</li>
                        <li>Vulnerability: {risk.vulnerability}</li>
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

                    {/* Edit Button */}
                    <Button type="button" buttonText="Edit" onClick={handleEditRisk}/>

                    {/* Delete Button */}
                    <Button type="button" buttonText="Delete" onClick={handleDeleteRisk}/>

                </div>

            )}


        </section>


    );

}


//Export Risk Card function
export default RiskCard;
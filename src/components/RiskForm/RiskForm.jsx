import { useState } from "react";
import Risk from '../../classes/risk.js';

// RiskForm Function
function RiskForm({ addRisk }){

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

    

    return(

        <section>

            <h2>Risk Input Form</h2>


        </section>


    );
}
// Exporting RiskForm
export default RiskForm;
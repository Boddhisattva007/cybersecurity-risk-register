import { useState } from "react";

//Risk Summary Function
function RiskSummary({ risks }) {
    //Takes risks array length and assigns it to totalRisks variable.
    const totalRisks = risks.length;




    return(

        <section>
            <h2>Risk Summary</h2>

            <p>Total Risks: {totalRisks}</p>


        </section>

    );
}

//Exporting Risk Summary
export default RiskSummary;
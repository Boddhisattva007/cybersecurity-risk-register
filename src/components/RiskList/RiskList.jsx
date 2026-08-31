import RiskCard from "../RiskCard/RiskCard.jsx";

// RiskList Function
function RiskList({ risks, deleteRisk }){

    return(
        

        <section>

            <h2>Saved Risks</h2>

            {/* Accepts the risks prop and uses .map to create a new risk card [array] for each, 
            assigning riskId as a unique key for each risk card while also passing along each risk item
            from the risks prop as values. */}
            {risks.map((risk) => (
                <RiskCard 
                key={risk.riskId} 
                risk={risk}
                deleteRisk={deleteRisk}
                />
            ))}

            
            

        </section>

    );
}

//Export Risk List Function
export default RiskList;
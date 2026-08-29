import RiskCard from "../RiskCard/RiskCard";

// RiskList Function
function RiskList({ risks }){

    return(
        

        <section>

            <h2>Saved Risks</h2>

            {/* Accepts the risks prop and uses .map to create a new risk card [array] for each, 
            assigning riskId as a unique key for each risk card. */}
            {risks.map((risk) => (
                <RiskCard 
                key={risk.riskId} 
                risk={risk}/>
            ))}


            

        </section>

    );
}

//Export Risk List Function
export default RiskList;
import RiskCard from "../RiskCard/RiskCard";

// RiskList Function
function RiskList({ risks }){

    return(
        

        <section>

            <h2>Saved Risks</h2>
            
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
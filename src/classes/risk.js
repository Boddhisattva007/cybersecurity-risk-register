// Risk Object Class created. 
class Risk {
    constructor(
        riskId,
        asset,
        riskDescription,
        threat,
        vulnerabilityDescription,
        likelihood,
        impact,
        mitigation,
        status,
        owner,
        cveId = null, //For v2.0
        cveData = null //For v2.0
    ) {
        this.riskId = riskId;
        this.asset = asset;
        this.riskDescription = riskDescription;
        this.threat = threat;
        this.vulnerabilityDescription = vulnerabilityDescription;
        this.likelihood = likelihood;
        this.impact = impact;
        this.mitigation = mitigation;
        this.status = status;
        this.owner = owner;
        //Saved for eventual use in Version 2.0 (Unit 2 Final... Maybe)
        this.cveId = cveId;
        this.cveData = cveData;
    }
}
// Exporting Risk Object Class
export default Risk;
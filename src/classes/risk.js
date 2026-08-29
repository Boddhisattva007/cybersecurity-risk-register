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
        owner

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

    }
}
// Exporting Risk Object Class
export default Risk;
// Risk Object Class created. 
class Risk {
    constructor(
        riskId,
        asset,
        threat,
        vulnerability,
        description,
        likelihood,
        impact,
        mitigation,
        status,
        owner

    ) {
        this.riskId = riskId;
        this.asset = asset;
        this.threat = threat;
        this.vulnerability = vulnerability;
        this.description = description;
        this.likelihood = likelihood;
        this.impact = impact;
        this.mitigation = mitigation;
        this.status = status;
        this.owner = owner;

    }
}
// Exporting Risk Object Class
export default Risk;
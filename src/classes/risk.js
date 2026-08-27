
class Risk {
    constructor(
        riskId,
        asset,
        riskDescription,
        threat,
        vulnerabilityDescription,
        likelihood,
        riskImpact,
        mitigation,
        riskStatus,
        owner,
        cveId = null,
        cveData = null
    ) {
        this.riskId = riskId;
        this.asset = asset;
        this.riskDescription = riskDescription;
        this.threat = threat;
        this.vulnerabilityDescription = vulnerabilityDescription;
        this.likelihood = likelihood;
        this.riskImpact = riskImpact;
        this.mitigation = mitigation;
        this.riskStatus = riskStatus;
        this.owner = owner;

        this.cveId = cveId;
        this.cveData = cveData;
    }
}

export default Risk;
import Risk from "../classes/risk.js";


//Instantiating New Risks with mock data.
let riskOne = new Risk(
    "RISK-001",
    "Personal Website",
    "Credential Attack",
    "Weak Password",
    "Vulnerable to account takover.",
    1,
    4,
    "Impliment stronger password requiremnts.",
    "Open",
    "Self"
);

let riskTwo = new Risk(
    "RISK-002",
    "Laptop",
    "Malware Attack",
    "Outdated OS version",
    "OS not updated with latest security patch.",
    3,
    3,
    "Install software updates.",
    "Open",
    "Self"
);

let riskThree = new Risk(
    "RISK-003",
    "Home Network",
    "Insecure Security Protocol",
    "WPA",
    "WPA is an insecure Wi-Fi secuirty protocol.",
    5,
    5,
    "Upgrade to WPA 2 or WPA 3.",
    "Closed",
    "Self"
);

let riskFour = new Risk(
    "RISK-004",
    "Home Movie Server",
    "Remote Exploitation",
    "Outdated Server Software",
    "Media server software missing latest security updates.",
    4,
    4,
    "Update the media servers software",
    "Closed",
    "Self"
);

//Creating Mock Risk Array
const mockDataArray = [riskOne, riskTwo, riskThree, riskFour];

//Exporting Mock Data
export default mockDataArray;


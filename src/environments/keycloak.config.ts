import { KeycloakConfig } from "keycloak-js";

const KeycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'EmployeeRealm',
    clientId: 'New_Employee_Client'
};

export default KeycloakConfig;


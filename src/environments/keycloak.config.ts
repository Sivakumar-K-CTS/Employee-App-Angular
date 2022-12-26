import { KeycloakConfig } from "keycloak-js";

const KeycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'EmployeeRealm',
    clientId: 'Employee_client'
};

export default KeycloakConfig;


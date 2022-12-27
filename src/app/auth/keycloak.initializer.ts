import { KeycloakOptions, KeycloakService } from "keycloak-angular";
import { environment } from '../../environments/environment';

export function initializer(keycloakService: KeycloakService):()=> Promise<boolean>{

    const options: KeycloakOptions = {
        config : environment.keycloak,
        loadUserProfileAtStartUp : true,
        initOptions: {
            onLoad: 'check-sso',
            checkLoginIframe: false
        },
        bearerExcludedUrls: []
    };
    return ()=>keycloakService.init(options);

}
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Validators, ControlGroup, FormBuilder} from 'angular2/common';

import {ContentfulService} from '../../services/contentful-service';
import {SettingsModel} from './settings-model';

@Component({
    selector: 'settings',
    templateUrl: 'app/components/settings/settings.html',
    styleUrls: ['app/components/settings/settings.css'],
    providers: [FormBuilder],
    directives: [],
    pipes: []
})

export class Settings {

    public model:SettingsModel = new SettingsModel();

    public myForm:ControlGroup;

    public urlDeepBase:string = null;

    constructor(public contentfulService:ContentfulService, routeParams:RouteParams, formBuilder:FormBuilder) {

        // Bootstrap form from deeplink if params are present in URI.
        let spaceIdDeeplink = routeParams.get('spaceId');
        let apiKeyDeeplink = routeParams.get('apiKey');
        if (apiKeyDeeplink && spaceIdDeeplink) {
            console.log('deeplinked:\n', 'spaceId: ' + spaceIdDeeplink + '\n', 'apiKey: ' + apiKeyDeeplink + '\n');
            this.model.spaceId = spaceIdDeeplink;
            this.model.apiKey = apiKeyDeeplink;
        } else if (contentfulService.isUserSessionStored) {
            // Bootstrap settings model from session values.
            this.model.spaceId = contentfulService.model.spaceId;
            this.model.apiKey = contentfulService.model.apiKey;
        }

        // Custom validation for apiKey and spaceID.
        this.myForm = formBuilder.group({
            apiKey: [this.model.apiKey, Validators.compose([Validators.required, this.apiKeyValidator])],
            spaceId: [this.model.spaceId, Validators.compose([Validators.required, this.spaceIdValidator])]
        });

        this.urlDeepBase = window.location.origin + '/product-catalogue-web.ts/#/settings?';

    }

    /**
     * Template click handler.
     */
    public saveSession() {
        this.contentfulService.setSessionCredentials(this.model.apiKey, this.model.spaceId);
    }

    public removeSession() {
        this.model = new SettingsModel();
        this.contentfulService.clearSessionCredentials();
    }

    public rebootApp() {
        window.location.href = window.location.origin + '/product-catalogue-web.ts/';
    }

    private spaceIdValidator(id) {
        let valid = /^[a-z0-9]{12}$/.test(id.value);
        if (valid) {
            return null;
        }
        return {'invalidSpaceId': true};
    }

    private apiKeyValidator(id) {
        let valid = /^[a-z0-9]{64}$/.test(id.value);
        if (valid) {
            return null;
        }
        return {'invalidApiKey': true};
    }


}
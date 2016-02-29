import {Component} from 'angular2/core';
import {ComponentInstruction, RouteParams} from 'angular2/router';
import {NgForm, Validators, ControlGroup, FormBuilder} from 'angular2/common';

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

  model:SettingsModel = new SettingsModel();

  myForm:ControlGroup;

  urlDeepBase:string = null;

  constructor(public contentfulService:ContentfulService, routeParams:RouteParams, formBuilder:FormBuilder) {

    // Bootstrap form from deeplink if params are present in URI.
    let spaceIdDeeplink = routeParams.get('spaceId');
    let apiKeyDeeplink = routeParams.get('apiKey');
    if (apiKeyDeeplink && spaceIdDeeplink) {
      console.log('deeplinked:\n', 'spaceId: ' + spaceIdDeeplink + '\n', 'apiKey: ' + apiKeyDeeplink + '\n');
      this.model.spaceId = spaceIdDeeplink;
      this.model.apiKey = apiKeyDeeplink;
    } else if(contentfulService.isUserSessionStored) {
      // Bootstrap settings model from session values.
      this.model.spaceId = contentfulService.model.spaceId;
      this.model.apiKey = contentfulService.model.apiKey;
    }

    this.myForm = formBuilder.group({
      spaceId: [this.model.spaceId, Validators.compose([Validators.required, this.spaceIdValidator])],
      apiKey: [this.model.apiKey, Validators.compose([Validators.required, this.apiKeyValidator])]
    });

    this.urlDeepBase = window.location.host + '/settings?';

  }

  private spaceIdValidator(id) {
    var valid = /^[a-z0-9]{12}$/.test(id.value);
    if (valid) {
      return null;
    }
    return {'invalidSpaceId': true};
  }

  private apiKeyValidator(id) {
    var valid = /^[a-z0-9]{64}$/.test(id.value);
    if (valid) {
      return null;
    }
    return {'invalidApiKey': true};
  }

  /**
   * Template click handler.
   */
  saveSession() {
    this.contentfulService.setSessionCredentials(this.model.apiKey, this.model.spaceId);
  }

  removeSession() {
    this.model = new SettingsModel();
    this.contentfulService.clearSessionCredentials();
  }

  rebootApp() {
    window.location.href = window.location.origin;
  }

}

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {SongwriterResponse} from "../../models/songwriter-response.model";
import {CurrentUser} from "../../models/current-user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationStateService {
  private currentUser: CurrentUser;
  public userState = new BehaviorSubject<SongwriterResponse>(null);

  constructor() {
    this.currentUser = {
      firstName: this.userState.value?.firstName,
      lastName: this.userState.value?.lastName,
      email: this.userState.value?.email,
      birthday: this.userState.value?.birthday,
      instruments: this.userState.value?.instruments,
      countryOfResidence: 'USA'
    };
  }
}

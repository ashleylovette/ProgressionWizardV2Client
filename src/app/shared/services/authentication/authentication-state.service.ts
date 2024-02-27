import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {SongwriterResponse} from "../../models/songwriter-response.model";
import {CurrentUser} from "../../models/current-user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationStateService {
  private currentUser: CurrentUser;
  public userState = new BehaviorSubject<SongwriterResponse>(null);

  constructor() {
    this.currentUser = this.userState.value;
  }
}

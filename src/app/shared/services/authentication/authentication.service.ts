import {AuthenticationModel} from "../../models/authentication.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpWrapperService} from "../http-wrapper.service";
import {AuthenticationStateService} from "./authentication-state.service";
import {SongwriterResponse} from "../../models/songwriter-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpWrapper: HttpWrapperService, private authenticationStateService: AuthenticationStateService) {
  }

  signIn(request: AuthenticationModel): Observable<SongwriterResponse> {
    return this.httpWrapper.post('/sign-in', request);
  }
}

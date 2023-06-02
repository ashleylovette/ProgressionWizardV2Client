import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class HttpWrapperService {
  private baseApiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.httpClient.post(`${this.baseApiUrl}${path}`, body);
  }
}

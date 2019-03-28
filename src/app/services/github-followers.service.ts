import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Follower, FollowerAdapter } from '../github-followers/follower';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient, private adapter: FollowerAdapter) { }

  getFollowers() {
    return this.http.get<Follower[]>(this.url)
      .pipe(
        map((data: any[]) => data.map(item => this.adapter.adapt(item))),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  
}

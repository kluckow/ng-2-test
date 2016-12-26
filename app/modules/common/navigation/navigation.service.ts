import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Post} from "./navigation.post";

@Injectable()
export class NavigationService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {}

  getLinks(): Observable<Post[]> {
    return this.http.get(this.url)
    .map((res: Response) => {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

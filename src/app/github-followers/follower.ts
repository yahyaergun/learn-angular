import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";

export class Follower {

    constructor(
    public imageURL: string,
    public username: string,
    public githubURL: string
    ) {}
}

Injectable({
    providedIn: 'root'
})
export class FollowerAdapter implements Adapter<Follower> {

  adapt(item: any): Follower {
    return new Follower(
      item.avatar_url,
      item.login,
      item.html_url
    );
  }
}
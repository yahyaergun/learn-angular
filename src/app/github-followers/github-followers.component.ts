import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { Follower } from './follower';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: Follower[] = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getFollowers().subscribe(followers => this.followers = followers);
  }

}

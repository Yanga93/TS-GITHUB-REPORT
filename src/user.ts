import { Repo } from "./repo";

 export class User {
  login!: string;
  fullName!: string;
  repoCount!: number;
  followerCount!: number;

  /***
This constructor takes in the object from REST API and  initialize
it's self to new User.
  ***/

  constructor (userResponse: any){
  this.login = userResponse.login;
  this.fullName = userResponse.name;
  this.repoCount = userResponse.public_repos;
//  this.followerCount = userResponse.followers;

  }
}

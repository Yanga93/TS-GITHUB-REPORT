"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    /***
  This constructor takes in the object from REST API and  initialize
  it's self to new User.
    ***/
    constructor(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        //  this.followerCount = userResponse.followers;
    }
}
exports.User = User;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//call the class before creating an instance of it
const GithubApiService_1 = require("./GithubApiService");
let svc = new GithubApiService_1.GithubService();
svc.getUserInfo('yanga93', (user) => {
    console.log(user);
});
svc.getRepos('yanga93', (repos) => {
    console.log(repos);
});

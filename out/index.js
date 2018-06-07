"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//call the class before creating an instance of it
const GithubApiService_1 = require("./GithubApiService");
let svc = new GithubApiService_1.GithubService();
svc.getUserInfo('koushikkothagal', (user) => {
    console.log(user);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//call the class before creating an instance of it
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubService();
svc.getUserInfo('jharding');

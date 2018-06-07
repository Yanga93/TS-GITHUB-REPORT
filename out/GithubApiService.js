"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
const User_1 = require("./User");
const Repo_1 = require("./Repo");
const OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
/*This class contains a method
that will make API call.
*/
class GithubService {
    //this is the method that make API call
    getUserInfo(userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error, response, body) => {
            let user = new User_1.User(body);
            cb(user);
        });
    }
    getRepos(userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error, response, body) => {
            var repos = body.map((repo) => new Repo_1.Repo(repo));
            cb(repos);
        });
    }
}
exports.GithubService = GithubService;

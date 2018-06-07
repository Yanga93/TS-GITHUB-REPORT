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
/*This class contains a method
that will make API call.
*/
class GithubService {
}
exports.GithubService = GithubService;
let options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
//this is the method that make API call
getUserInfo(userName, string);
{
    request.get('https://api.github.com/users/' + userName, options, (error, response, body) => {
        let user = new User_1.User(body);
        console.log(user);
    });
}
getRepos();
{
}

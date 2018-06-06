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
/*This class contains a method
that will make API call.
*/
class GithubService {
}
exports.GithubService = GithubService;
let options = {
    headers: {
        'User-Agent': 'request'
    }
};
//this is the method that make API call
getUserInfo(userName, string);
{
    request.get('https://api.github.com/users/' + userName, options, (error, response, body) => {
        let user = new User(JSON.parse(body));
        console.log(user);
    });
}
getRepos();
{
}

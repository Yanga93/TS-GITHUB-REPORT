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
    //this is the method that make API call
    getUserInfo(userName) {
        request.get('jharding.json' + userName, (response) => {
            console.log(response);
        });
    }
    getRepos() {
    }
}
exports.GithubService = GithubService;

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
/*This class contains a method
that will make API call.
*/
var GithubService = /** @class */ (function () {
    function GithubService() {
    }
    //this is the method that make API call
    GithubService.prototype.getUserInfo = function (userName) {
        request.get('https://api.github.com/users/jharding' + userName, function (response) {
            console.log(response);
        });
    };
    GithubService.prototype.getRepos = function () {
    };
    return GithubService;
}());
exports.GithubService = GithubService;

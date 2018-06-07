import * as request from 'request';
import { User } from './User';


const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

/*This class contains a method
that will make API call.
*/

export class GithubService {

//this is the method that make API call
getUserInfo(userName: string, cb: (user: User) => any) {
  request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
    let user = new User(body);
    cb(user);
  })

}
getRepos(){

}
}

import * as request from 'request';
import { User } from './User';

/*This class contains a method
that will make API call.
*/
export class GithubService {

  let options: any = {
  headers: {
    'User-Agent': 'request'
  },

  json: true
}
//this is the method that make API call
getUserInfo(userName: string, cb){
  request.get('https://api.github.com/users/' + userName, options, (error: any, response: any, body: any) => {
    let user = new User(body);
    cb(user);
  })

}
getRepos(){

}
}

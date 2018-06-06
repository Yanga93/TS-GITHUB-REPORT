import * as request from 'request';

/*This class contains a method
that will make API call.
*/
export class GithubService {

  let options: any = {
    headers: {
      'User-Agent': 'request'
    }
  }
  //this is the method that make API call
  getUserInfo(userName: string){
    request.get('https://api.github.com/users/' + userName, options, (error: any, response: any, body: any) => {
      let user = new User(JSON.parse(body));
      console.log(user);
    })

  }
  getRepos(){

  }
}

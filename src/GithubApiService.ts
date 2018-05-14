import * as request from 'request';

/*This class contains a method
that will make API call.
*/
class GithubService {

  //this is the method that make API call
  getUserInfo(userName: string){
    request.get('https://api.github.com/users/jharding' + userName, (response: any) => {
      console.log(response);
    });

  }
  getRepos(){

  }
}

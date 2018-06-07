//call the class before creating an instance of it
import { GithubService } from './GithubApiService';
import { User } from './User';

let svc = new GithubService();
svc.getUserInfo('koushikkothagal', (user: User) => {
console.log(user);
});

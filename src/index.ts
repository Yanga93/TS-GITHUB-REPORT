//call the class before creating an instance of it
import { GithubService } from './GithubApiService';

let svc = new GithubService();
svc.getUserInfo('jharding');

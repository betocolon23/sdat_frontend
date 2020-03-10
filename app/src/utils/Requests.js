import { API_URL } from './Constants';
import Auth from '../utils/Auth';

export async function createAccount(username, email, password){
  var data = JSON.stringify({
      username: username,
      password: password,
      email: email
  });
  return fetch(`${API_URL}/loggedout/new_user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type':'application/json'
      },
      body: data
  }).then(response => response.json())
    .catch(function(error) {
      console.log(error);
    });
}

export async function createOrg(name){
    var auth = new Auth();
    var data = JSON.stringify({
      name: name
    });
    return auth.fetch(`${API_URL}/new_org`, {
        method: 'POST',
        body: data
    })
  }
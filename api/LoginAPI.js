export default class LoginAPI {
  static postData(url, email, password) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => {
      return response.json();
    })
    .then((results)=> {
      console.log(results);
    })
  }
}

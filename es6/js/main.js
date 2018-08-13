var baseurl = 'https://simondb.herokuapp.com';

function hello_world() {
    var myheaders = {
        'Content-Type': 'application/json'
    };
    var init = {
        method: 'get',
        headers: myheaders
    };
    fetch(baseurl, init)
        .then(res => res.json())
        .then(res => console.log(res));
}

// function to post signup info
function create_user() {
    var mybody = JSON.stringify({
        "username": document.getElementById('username').value,
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value
    });
    var myURL = baseurl + '/api/v1/auth/signup';
    var myheaders = {
        'Content-Type': 'application/json'
    };
    var init = {
        method: 'POST',
        headers: myheaders,
        body: mybody
    };
    fetch(myURL, init)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            if (json.Message == 'User created') {
                login();
            } else if (json.Message == 'User already exists') {
                document.getElementById("message").innerHTML = json.Message;
            } else if (json.Message == 'invalid input') {
                document.getElementById("message").innerHTML = json.Message;
            }
        })
        .catch(error => console.error(`Fetch Error =\n`, error));
    return false;
}

function login() {
    let mybody = JSON.stringify({
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value
    });
    var myURL = baseurl + '/api/v1/auth/login';
    var myheaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    var init = {
        method: 'POST',
        headers: myheaders,
        body: mybody
    };
    fetch(myURL, init)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            if (json.Token) {
                sessionStorage.setItem("Token", json.Token);
                window.location.href = 'home.html';
            }

        })
        .catch(error => console.error(`Fetch Error =\n`, error));
    return false;
}
//function to post signin info

// function to post an entry

//function to get all entries

// function to et individula entry

//function to delete an entry

//function to edit entry


//function to view profile
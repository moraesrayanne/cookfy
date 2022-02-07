async function getUser() {
    const response = await await (await fetch('https://randomuser.me/api')).json();
    const user = response.results[0];
    displayUser(user);
}

function displayUser(user) {
    const fullName = document.getElementById('fullName');
    const firstName = document.getElementById('firstName');
    const gender = document.getElementById('gender');

    const userGender = document.getElementById('user-gender');

    if(user.gender === 'male') {
        userGender.classList.add('user-image-male');
    } else {
        userGender.classList.add('user-image-female')
    }
    fullName.innerText = `${user.name.first} ${user.name.last}`
    firstName.innerText = `${user.name.first}`
}

getUser();
const error = document.getElementById('error');
const userDetails = document.getElementById('random-user');

const usersButton = () => {
    const input = document.getElementById('user-input');
    const inputText = parseInt(input.value);
    input.value = '';
    if (isNaN(inputText)) {
        error.innerText = 'Please give me a number'
        userDetails.innerHTML = '';
    } else if (inputText < 0) {
        error.innerText = 'Please give me a positive number'
        userDetails.innerHTML = '';
    } else {
        fetch(`https://randomuser.me/api/?results=${inputText}`)
            .then(res => res.json())
            .then(data => displayUser(data.results))

        error.innerText = '';
    }

}
const displayUser = users => {
    userDetails.innerHTML = '';
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img width='200px' src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${user.location.city}</h4>
            <h5 class="card-title">${user.location.street.name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `;
        userDetails.appendChild(div);

    })
}
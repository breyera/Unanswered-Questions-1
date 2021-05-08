document.querySelector('#login').addEventListener('click', async (e) => {
    e.preventDefault();
    const user_name = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            user_name,
            password,
        }),
    });
});
document.querySelector('#signup').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#signupemail').value;
    const user_name = document.querySelector('#signupusername').value;
    const password = document.querySelector('#signuppassword').value;

    await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            user_name,
            password,
        }),
    });
});

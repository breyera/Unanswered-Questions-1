const subBtn = document.querySelector('#submit')

const commentFormHandler = async (event) => {
    event.preventDefault();

    const user_id = document.target.getAttribute('data-userid')
    const daily_id = document.target.getAttribute('data-dq')
    const comment = document.querySelector('#comment').value

    if (userId && dailyId && comment) {
        const response = await fetch('/api/comments/', {
            method: 'post',
            body: JSON.stringify({ user_id, daily_id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/qotd');
        } else {
            alert(response.statusText);
        }
    }
};
subBtn.addEventListener('click', commentFormHandler(e))





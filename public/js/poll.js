const makePercent = (num1, num2) => {
    return Math.round(100*((num1)/(num1 + num2))?((num1)/(num1 + num2)):0);
}

document.querySelectorAll('.yes-btn').forEach(n => {
    n.addEventListener('click', async e => {
        const target = e.currentTarget;

        const res = await fetch('/api/polls/' + target.getAttribute('data-poll-id'), {
            method: 'PUT',
            body: {
                vote_yes: ((target.getAttribute('data-yes')*1) + 1)?((target.getAttribute('data-yes')*1) + 1):1,

            }
        });

        console.log(res);

        const parent = target.parentNode;

        parent.classList.remove('flex');
        parent.classList.add('hidden');
        parent.nextSibling.classList.remove('hidden');
        parent.nextSibling.classList.add('flex');
    })
});

document.querySelectorAll('.no-btn').forEach(n => {
    n.addEventListener('click', async e => {
        const target = e.currentTarget;

        const res = await fetch('/api/polls/' + target.getAttribute('data-poll-id'), {
            method: 'PUT',
            body: {
                vote_no: ((target.getAttribute('data-no')*1) + 1)?((target.getAttribute('data-yes')*1) + 1):1,

            }
        });

        console.log(res);
    })
});
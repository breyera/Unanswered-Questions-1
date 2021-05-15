$(document).ready(function () {
    $('select')
        .change(function () {
            $(this)
                .find('option:selected')
                .each(function () {
                    var optionValue = $(this).attr('value');
                    if (optionValue) {
                        $('.box')
                            .not('.' + optionValue)
                            .hide();
                        $('.' + optionValue).show();
                    } else {
                        $('.box').hide();
                    }
                });
        })
        .change();
});

document.querySelector('#suggestion').addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#phil-name').value;
    const quote = document.querySelector('#quote').value;
    const question = document.querySelector('#quest').value;
    const qphilname = document.querySelector('#q-phil-name').value;

    await fetch('/api/suggestions', {
        method: 'POST',
        body: JSON.stringify({
            name,
            quote,
            question,
            qphilname,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
});

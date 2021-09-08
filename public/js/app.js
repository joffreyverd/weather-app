const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('#weather-icon');
const result = document.querySelector('#result');
const error = document.querySelector('#error');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default behaviour wich is reloading page when submiting form
    const location = search.value;
    if (!location) {
        return error.textContent = 'Please provide a valid location!';
    }
    result.textContent = error.textContent = weatherIcon.src = '';

    // The fetch API is only available in client-side javascript
    // Callbacks are passed chaining a "then" to "fetch"
    fetch('/weather?location=' + location).then((response) => {
        if (response.status > 203) {
            return error.textContent = 'Unable to find location, please try again!';
        }
        response.json().then((data) => {
            const { temperature, location, icon } = data;
            weatherIcon.src = icon;
            result.textContent = 'Currently ' + temperature + ' degrees in ' + location + '.';
        });
    });
});

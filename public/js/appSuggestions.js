let form = document.getElementById('uv-form');
const adress = document.getElementById('uv-address');
window.onload = function () {
    if (window.location.hash === '#discord') {
        if (localStorage.getItem('reloaded') !== 'true') {
            adress.value = 'https://discord.com/login';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === '#youtube') {
        if (localStorage.getItem('reloaded') !== 'true') {
            adress.value = 'https://youtube.com';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === '#twitter') {
        if (localStorage.getItem('reloaded') !== 'true') {
            adress.value = 'https://twitter.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === '#google') {
        if (localStorage.getItem('reloaded') !== 'true') {
            adress.value = 'https://google.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === '#twitch') {
        if (localStorage.getItem('reloaded') !== 'true') {
            adress.value = 'https://twitch.tv/';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === '#reddit') {
        if (localStorage.getItem('reloaded') !== 'true') {
            adress.value = 'https://reddit.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === "#spotify") {
        if (localStorage.getItem('reloaded') !== 'true'){
            adress.value = 'https://open.spotify.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
    if (window.location.hash === "#geforce") {
        if (localStorage.getItem('reloaded') !== 'true'){
            adress.value = 'https://geforce.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
};

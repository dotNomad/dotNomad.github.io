let body = document.querySelector('body');
body.addEventListener('transitionend', removeBodyTransition);
let modeToggle = document.getElementById('mode-toggle-btn');
modeToggle.addEventListener('click', switchMode);

function switchMode() {
    if (isModeLight()) {
        body.className = 'dark-mode in-transition';
        modeToggle.title = 'Activate Light Mode';
    } else {
        body.className = 'light-mode in-transition';
        modeToggle.title = 'Activate Dark Mode';
    }
}

function isModeLight() {
    if (body.className.includes('light-mode')) {
        return true;
    }
    return false;
}

function removeBodyTransition(ev) {
    if (ev.propertyName == 'color' && ev.target.tagName.toLowerCase() == 'body') {
        let newBodyClass = body.className.replace('in-transition', '');
        newBodyClass = newBodyClass.trim();
        body.className = newBodyClass;
    }
}

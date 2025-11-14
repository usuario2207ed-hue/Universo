const notificationElement = document.getElementById('welcome-notification');
const REDIRECT_URL = 'https://usuario2207ed-hue.github.io/EDCELL-TECH/';

function hideNotificationAndRedirect(event) {
    if (event.target.closest('button')) {
        notificationElement.classList.remove('show');
    } else {
        window.open(REDIRECT_URL, '_blank');
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 300);
    }
}

notificationElement.addEventListener('click', hideNotificationAndRedirect);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        notificationElement.classList.add('show');
    }, 1000);
});

window.addEventListener('load', () => {
    console.log("A notificação foi configurada para aparecer SEMPRE, sem localStorage.");
});

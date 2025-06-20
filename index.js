const numUnreadNotifications = document.querySelector('.unread-notifications');
const toggleUnread = document.querySelector('.toggle-unread');

const scrollUpButton = document.querySelector(".scroll-up");

function onScroll(event) {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    const offset = (scrollTop / (scrollHeight - clientHeight));

    scrollUpButton.style.display = offset >= 0.25 ? "flex" : "none";
}

function markAsUnread() {
    // Set the number of unread notifications to 0
    numUnreadNotifications.innerHTML = '0';

    // Mark notifications as unread
    document.querySelectorAll('.new')
        .forEach(notification => {
            notification.classList.remove("new");
        });
}

function onMount() {
    toggleUnread.addEventListener('click', markAsUnread);
    document.addEventListener('scroll', onScroll);

    scrollUpButton.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
}

document.addEventListener('DOMContentLoaded', onMount);
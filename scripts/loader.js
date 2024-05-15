var titleText = document.title;

window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').classList.add('show');
    this.setTimeout(() => {
        document.title = titleText;
    }, 150);
});

document.addEventListener('DOMContentLoaded', function () {
    document.title = 'Loading...';
});
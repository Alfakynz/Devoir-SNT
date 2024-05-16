var titleText = document.title;

window.addEventListener('load', function () {
    this.setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').classList.add('show');
        document.title = titleText;
    }, 200);
});

document.addEventListener('DOMContentLoaded', function () {
    document.title = 'Loading...';
});
// this adds show property to the css to indicate that the user wants a dropdown (when they click the hamburger icon)
function createDrop() {
    var header = document.getElementById('head-links');
    var head = document.getElementsByClassName('header')[0];

    console.log(header.className)
    if (header.className == 'default') {
        header.className = 'show';
        head.className += ' show';
    }
    else {
        header.className = 'default';
        head.className = 'header'
    }
}
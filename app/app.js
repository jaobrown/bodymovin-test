var bodyAnim = {
    container: document.getElementById('player'),
    path: 'data/hello-world.json', // Required
    renderer: 'svg', // Required
    loop: true // Optional
};

var navAnim = {
    container: document.getElementById('navBar'),
    path: 'data/nav-animation.json', // Required
    renderer: 'svg', // Required
    loop: false // Optional
};

$('document').ready(function () {
    lottie.loadAnimation(bodyAnim);
    lottie.loadAnimation(navAnim);

});
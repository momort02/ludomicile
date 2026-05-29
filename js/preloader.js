document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('video-preloader');
    const video = document.getElementById('preloader-video');
    
    document.body.classList.add('loading');

    video.playbackRate = 2;
    
    // Dès que la vidéo est terminée
    video.onended = () => {
        loader.classList.add('loader-fade-out');
        document.body.classList.remove('loading');
        
        // On supprime l'élément après l'animation de fondu
        setTimeout(() => {
            loader.remove();
        }, 800);
    };

    // Sécurité au cas où la vidéo ne chargerait pas (ex: mode économie d'énergie)
    setTimeout(() => {
        if (document.body.classList.contains('loading')) {
            loader.classList.add('loader-fade-out');
            document.body.classList.remove('loading');
        }
    }, 5000); 
});

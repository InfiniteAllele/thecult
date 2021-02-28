var motto = {};
motto.opacityIn = [0, 1];
motto.scaleIn = [0.2, 1];
motto.scaleOut = 3;
motto.durationIn = 800;
motto.durationOut = 600;
motto.delay = 500;

anime.timeline({
        loop: true
    })
    .add({
        targets: '.motto .letters-1',
        opacity: motto.opacityIn,
        scale: motto.scaleIn,
        duration: motto.durationIn
    }).add({
        targets: '.motto .letters-1',
        opacity: 0,
        scale: motto.scaleOut,
        duration: motto.durationOut,
        easing: "easeInExpo",
        delay: motto.delay
    }).add({
        targets: '.motto .letters-2',
        opacity: motto.opacityIn,
        scale: motto.scaleIn,
        duration: motto.durationIn
    }).add({
        targets: '.motto .letters-2',
        opacity: 0,
        scale: motto.scaleOut,
        duration: motto.durationOut,
        easing: "easeInExpo",
        delay: motto.delay
    }).add({
        targets: '.motto .letters-3',
        opacity: motto.opacityIn,
        scale: motto.scaleIn,
        duration: motto.durationIn
    }).add({
        targets: '.motto .letters-3',
        opacity: 0,
        scale: motto.scaleOut,
        duration: motto.durationOut,
        easing: "easeInExpo",
        delay: motto.delay
    }).add({
        targets: '.motto',
        opacity: 0,
        duration: 500,
        delay: 500
    });
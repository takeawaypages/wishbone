var activeBackgroundPoint,
    backgroundPositions = {
        'lips': 'calc(50% - 170px) calc(50% + 401px)',
        'hair': 'calc(50% - 886px) calc(50% - 901px)',
        'initial': 'calc(50% - 1100px) calc(50% - 1617px)',
        'eyes': 'calc(50% - 177px) calc(50% + 1001px)',
        'face': 'calc(50%) calc(50% + 500px)',
        'voice': 'calc(50% + 1336px) calc(50% + 2087px)',
        'days': 'calc(50%) calc(50%)'
    },
    backgroundSizes = {
        'lips': 'auto 5000px',
        'hair': 'auto 5000px',
        'initial': 'auto 5000px',
        'eyes': 'auto 5000px',
        'face': 'auto 3000px',
        'voice': 'auto 5000px',
        'days': 'auto 100%'
    },
    $initialElement = $('.textLine1'),
    $hairElement = $('.textLine2'),
    $lipsElement = $('.textLine3'),
    $eyesElement = $('.textLine4'),
    $backgroundElement = $('#background'),
    $faceElement = $('.textLine5'),
    $voiceElement = $('.textLine6'),
    $daysElement = $('.textLine7'),
    $finElement = $('.textLine8'),
    $kavafis = $('#kavafis');

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function moveBackgroundTo(point) {
    if (activeBackgroundPoint == point) {
        return;
    }
    activeBackgroundPoint = point;
    $backgroundElement.css('background-position', backgroundPositions[point]);
    $backgroundElement.css('background-size', backgroundSizes[point]);
}


$(document).scroll(function(){
    if (isElementInViewport($hairElement)) {
        moveBackgroundTo('hair');
        $kavafis.css('opacity', '0');
    } else if (isElementInViewport($initialElement)) {
        moveBackgroundTo('initial');
        $kavafis.css('opacity', '0');
    } else if (isElementInViewport($lipsElement)) {
        moveBackgroundTo('lips');
        $kavafis.css('opacity', '0');
    } else if (isElementInViewport($eyesElement)) {
        moveBackgroundTo('eyes');
        $kavafis.css('opacity', '0');
    } else if (isElementInViewport($faceElement)) {
        moveBackgroundTo('face');
        $kavafis.css('opacity', '0');
    } else if (isElementInViewport($voiceElement)) {
        moveBackgroundTo('voice');
        $kavafis.css('opacity', '0');
    } else if (isElementInViewport($daysElement)) {
            moveBackgroundTo('days');
            $kavafis.css('opacity', '0');
    } else if (isElementInViewport($finElement)) {
        activeBackgroundPoint = 'fin';
        $kavafis.css('opacity', '1');
    }
});
/**
 * Created by AlexCD on 24.04.2014.
 */
/*global $, jQuery, window, setInterval, clearInterval*/
function VerticallyCenteredElement() {
    "use strict";
    function getElementCenteredVerticalPosition(element) {
        var y1 = $(window).height(),
            y2 = element.outerHeight();

        return (y1 / 2) - (y2 / 2);
    }

    function animateToCenteredVerticalPosition(element, timer) {
        var topPos = getElementCenteredVerticalPosition(element);

        element.css('position', 'absolute');

        if (timer && timer > 0) {
            element.stop().animate({
                top: topPos
            }, timer, function () {
                //end of animation
            });
        } else {
            element.css('top', topPos);
        }
    }

    function setElementCenteredVerticalPosition(scope, element, timer) {
        animateToCenteredVerticalPosition(element, timer);

        $(window).on('resize', function () {
            animateToCenteredVerticalPosition(element, timer);
        });

        //unbind events
        scope.$on('$destroy', function () {
            $(window).off('resize', animateToCenteredVerticalPosition);
        });
    }

    return {
        restrict: 'AE',
        scope: {
            timer: '@centeringAnimation'
        },
        link: function (scope, element, attrs) {
            var timer = scope.timer || 0;

            setElementCenteredVerticalPosition(scope, element, timer);
        }
    };
}
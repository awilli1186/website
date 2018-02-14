import $ from 'wee-dom';
import $events from 'wee-events';
import { RouteHandler } from 'wee-routes';
import { _win } from 'wee-core/scripts/core/variables';


export default new RouteHandler({
	init() {
        let $sideBars = $('.js-sidebar-content');
        let $mains = ('.js-main-content');

        $events.on(_win, 'load', () => {
            animationLogic($sideBars, .5);
            animationLogic($mains, 1);
        });
	}
});

/**
 * Sets the transition-delay for each passed element
 * and increments the delay duration by .15s
 *
 * @param {array} blocks List of DOM elements
 * @param {number} delayStart transition-delay starting point
 */
function animationLogic(blocks, delayStart) {
    let delay = delayStart;

    $(blocks).each((el) => {
        $(el).css('transition-delay', `${delay}s`).addClass('-visible');
        delay = delay + 0.15;
    });

    setTimeout(function() {
    $(blocks).css('transition-delay', '');
    }, 2000);
}

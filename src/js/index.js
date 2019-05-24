window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let burger = require('./parts/burger.js'),
        sizes = require('./parts/sizes.js'),
        styleBlock = require('./parts/style-block.js'),
        accordion = require('./parts/accordion.js'),
        feedbackSlider = require('./parts/feedback-slider.js'),
        filtration = require('./parts/filtration.js'),
        consultation = require('./parts/consultation.js'),
        sliders = require('./parts/sliders.js');




    burger();
    accordion();
    sizes();
    styleBlock();
    sliders();
    feedbackSlider();
    filtration();
    consultation();
});
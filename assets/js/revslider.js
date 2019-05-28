(function($) {
  'use strict';

  /*======== RS-SLIDER ========*/
  jQuery('#rev_slider_1').show().revolution({
    delay: 5000,
    sliderLayout: 'fullwidth',
    sliderType:'standard',
    responsiveLevels: [1171, 1025, 769, 480],
    gridwidth: [1171, 1025, 769, 480],
    gridheight: [560, 500, 450, 350],

    /* basic navigation arrows and bullets */
    navigation: {
      arrows: {
      enable: true,
      style: 'hesperiden',
      hide_onleave: false
      },

      bullets: {
      enable: false,
      style: 'hesperiden',
      hide_onleave: false,
      h_align: 'center',
      v_align: 'bottom',
      h_offset: 0,
      v_offset: 20,
      space: 5
      }
    },
    disableProgressBar:'on'
  });

  jQuery('#rev_slider_custom_2').show().revolution({
    delay: 5000,
    sliderLayout: 'fullwidth',
    sliderType:'standard',
    responsiveLevels: [1171, 1025, 769, 480],
    gridwidth:[1171, 1025, 769, 480],
    gridheight: [655, 605, 555, 450],
    navigation: {
      arrows: {
        enable: true,
        style: 'hesperiden',
        hide_onleave: false
      },
      bullets: {
        enable: false,
        style: 'hesperiden',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 20,
        space: 15
      }
    },
    disableProgressBar:'on'
  });

  jQuery('#rev_slider_custom_3').show().revolution({
    delay: 5000,
    sliderLayout: 'fullscreen',
    sliderType:'standard',
    responsiveLevels: [1171, 1025, 769, 480],
    gridwidth:[1171, 1025, 769, 480],
    gridheight: [655, 605, 555, 450],
    navigation: {
      arrows: {
        enable: true,
        style: 'hesperiden',
        hide_onleave: false
      },
      bullets: {
        enable: false,
        style: 'hesperiden',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 20,
        space: 15
      }
    },
    disableProgressBar:'on'
  });

  jQuery('#rev_slider_custom_4').show().revolution({
    delay: 5000,
    sliderLayout: 'fullwidth',
    sliderType:'standard',
    responsiveLevels: [1171, 1025, 769, 480],
    gridwidth:[1171, 1025, 769, 480],
    gridheight: [655, 605, 555, 450],
    navigation: {
      arrows: {
        enable: true,
        style: 'hesperiden',
        hide_onleave: false
      },
      bullets: {
        enable: false,
        style: 'hesperiden',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 20,
        space: 15
      }
    },
    disableProgressBar:'on'
  });

})(jQuery);
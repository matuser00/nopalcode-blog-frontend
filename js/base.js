var BLOG = {};

BLOG = {

  commonAttributes: {
    isMiniMenuDisplayed: false,
    menuElements: $('ul.menu li:not(.hamburguer)'),
    menu: $('ul.menu')
  },

  init: function() {
    // TODO: call all binding functions from here
    this._bindHamburguerBtn();
  },

  _bindHamburguerBtn: function() {
    $('li.hamburguer a').click(function() {
      if (BLOG.commonAttributes.isMiniMenuDisplayed) {
        BLOG.commonAttributes.menuElements.removeClass('hamburguer-action');
        BLOG.commonAttributes.menu.removeClass('opened');
      } else {
        BLOG.commonAttributes.menu.addClass('opened');
        BLOG.commonAttributes.menuElements.addClass('hamburguer-action');
      }
      // switch from whatever value it contained
      BLOG.commonAttributes.isMiniMenuDisplayed = !BLOG.commonAttributes.isMiniMenuDisplayed;
    });
  }
};

$(document).ready(function() {
  BLOG.init();
});

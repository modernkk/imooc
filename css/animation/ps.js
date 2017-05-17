(function($) {
	var _prefix = (function(temp){
		var aPrefix = ["webkit", "Moz", "o", "ms"];
		var props = "";
		for (var i in aPrefix) {
			props = aPrefix[i] + "Transition";
			if (temp.style[props] !== undefined) {
				return "-" + aPrefix[i].toLowerCase() + "-";
			}
			return false;
		}
	})(document.createElement(PageSwitch));

  var PageSwitch = (function() {
    function PageSwitch(element, options) {
      this.settings = $.extend(true, $.fn.PageSwitch.default, options || {});
      this.element = element;
      this.init();
    }
    PageSwitch.prototype = {
      init: function() {
        var me = this;
        me.selectors = me.settings.selectors;
        me.sections = me.element.find(me.selectors.sections);
        me.section = me.sections.find(me.selectors.section);

        me.direction = me.settings.direction === "vertical" ? true : false;
        me.pagesCount = me.pagesCount();
        me.index = (me.settings.index >= 0 && me.settings.index < me.pagesCount) ? me.settings.index : 0;

        if (!me.direction) {
          me._initLayout();
        }

        if (me.pagition) {
          me._initPaging();
        }

        me._initEvent();
      },
      pagesCount: function() {
        return this.section.length;
      },
      switchLength: function() {
        return this.direction ? this.element.height() : this.element.width();
      },
      _prev: function() {
        var me = this;
        if (me.index > 0) {
          me.index--;
        } else if (me.settings.loop) {
          me.index = me.pagesCount - 1;
        }
        me._scrollPage();
      },
      _next: function() {
        var me = this;
        if (me.index < me.pagesCount - 1) {
          me.index++;
        } else if (me.settings.loop) {
          me.index = 0;
        }
        me._scrollPage();
      },
      /**
       * 针对横屏情况进行页面布局
       */
      _initLayout: function() {
        var me = this;
        var width = me.pagesCount * 100 + "%";
        var cellWidth = (100 / me.pagesCount).toFixed(2) + "%";
        me.sections.width(width);
        me.section.width(cellWidth).css("float", "left");
      },
      /**
       * 分页
       */
      _initPaging: function() {
        var me = this;
        var pagesClass = me.settings.selectors.page.substring(1);
        me.activeClass = me.settings.selectors.active.substring(1);
        var pageHtml = "<ul class=" + pagesClass + ">";
        for (var i = 0; i < me.pagesCount; i++) {
          pageHtml += "<li></li>";
        }
        pageHtml += "</ul>";
        me.element.append(pageHtml);
        var pages = me.element.find(me.selectors.page);
        var pageItem = pages.find("li");
        pageItem.eq(me.index).addClass(me.activeClass);

        if (me.direction) {
          pages.addClass("vertical");
        } else {
          pages.addClass("horizontal");
        }
      },
      _initEvent: function() {
        var me = this;
        me.element.on("click", me.selectors.pages + " li", function() {
          me.index = $(this).index();
          me._scrollPage();
        });
        me.element.on("mousewheel DOMMouseScroll", function(e) {
          var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
          if (delta > 0 && (me.index && !me.settings.loop || me.settings.loop)) {
            me._prev();
          } else if (delta < 0 && (me.index < me.pagesCount - 1 && !me.settings.loop || me.settings.loop)) {
            me._next();
          }
        });

        if (me.settings.keyboard) {
          $(window).on("keydown", function(e) {
            var keyCode = e.keyCode;
            if (keyCode == 37 || keyCode == 38) {
              me._prev();
            } else if (keyCode == 39 || keyCode == 40) {
              me._next();
            }
          })
        }
      },
      _scrollPage: function() {
      	var me = this;
      	var dest = me.section.eq(me.index).position();
      	if (!dest) {
      		return;
      	}

      	if (_prefix) {
      		me.sections.css(_prefix+"trasition", "all " + me.settings.duration + "ms " +
      			me.settings.easing);
      	}
      }
    }
    return PageSwitch;
  })();
  $.fn.PageSwitch = function(options) {
    return this.each(function() {
      var me = $(this);
      var instance = me.data("PageSwitch");
      if (!instance) {
        instance = new PageSwitch(me, options);
        me.data("PageSwitch", instance);
      }
      if ($.type(options) === "string") {
        return instance[options]();
      }
    })
  }
  $.fn.PageSwitch.default = {
    selectors: {
      sections: ".sections",
      section: ".section",
      page: ".pages",
      active: ".active"
    },
    index: 0,
    easing: "ease",
    duration: 500,
    keyboard: true,
    loop: false,
    pagition: true,
    direction: "vertical",
    callback: ""
  }

  $(function() {
    $("[data-PageSwitch]").PageSwitch();
  })
})(jQuery)

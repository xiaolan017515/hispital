$.extend($,{
    _tab: function(options) {
        var opts = {
            event: "click",
            tab_tit: null,
            onClass: "on",
            onClassCon: "active",
            navTitle: "",
            callback: function() {}
        };
        opts = $.extend({},
        opts, arguments[0] || {}),
        $(opts.tab_tit).on(opts.event,
        function() {
            var targetNow = $(this).attr("data-target"),
            _this = $(this);
            $(targetNow).hasClass(opts.onClassCon) || ($(opts.tab_tit).each(function() {
                var target = $(this).attr("data-target");
                void 0 != target && $(target).removeClass(opts.onClassCon)
            }), void 0 != targetNow && $(targetNow).addClass(opts.onClassCon), $(opts.tab_tit).removeClass(opts.onClass), _this.addClass(opts.onClass), opts.callback($(this), $(targetNow)))
        }),
        "" != opts.navTitle && $(opts.navTitle).mouseover(function() { ! $(this).hasClass(opts.onClassCon) && $(this).addClass(opts.onClassCon)
        }).mouseout(function() {
            $(this).removeClass(opts.onClassCon)
        })
    }
});
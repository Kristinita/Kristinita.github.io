(function($) {

    'use strict';

    $.fn.visualize = function(options) {
        var divs = this;
        var type = options.type || 'pie';

        divs.each(function(index, div) {
            var chart;
            var width = options.width || 300;
            var height = options.height || options.width || 300;
            var canvas = $('<canvas width=' + width + ' height=' + height + '></canvas>').html(div.innerHTML);
            var items = getData(div);

            if (type === 'pie') { chart = new Pie(items, width); }
            else if (type === 'bar') { chart = new Bar(items, width, height); }

            $(div).html(canvas);
            chart.plot(canvas[0]);

            if (options.legend) { chart.legend(div, width); }
        });
    };

    var Chart = function() {};

    Chart.prototype.legend = function(div, width) {
        var legend = $('<div></div>').css('width', width);
        $.each(this.items, function(idx, item) {
            var swatch = $('<span></span>')
                .css({
                    'background': item.color,
                    'width': '10px',
                    'height': '10px',
                    'display': 'inline-block',
                    'margin': '0 5px'
                });
            legend.append(swatch).append(item.label);
        });
        $(div).append(legend);
    };

    var Pie = function(items, width) {
        Chart.call(this);
        this.radius = width/2;
        this.items = items;
    };

    Pie.prototype = Object.create(Chart.prototype);

    Pie.prototype.getTotal = function() {
        var total = 0;
        $.each(this.items, function(index, item) { total += item.data; });
        return total;
    };

    Pie.prototype.plot = function(canvas) {
        var lastend = 0;
        var midX = this.radius;
        var midY = this.radius;
        var ctx = canvas.getContext("2d");
        var total = this.getTotal();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            ctx.fillStyle = item.color;
            ctx.beginPath();
            ctx.moveTo(midX,midY);
            ctx.arc(midX,midY,midY,lastend,lastend + (Math.PI*2*(item.data/total)),false);
            ctx.lineTo(midX,midY);
            ctx.fill();
            lastend += Math.PI*2*(item.data/total);
        }
    };

    var Bar = function(items, width, height) {
        this.items = items;
        this.width = width;
        this.height = height;
    };

    Bar.prototype = Object.create(Chart.prototype);

	Bar.prototype.getWidth = function() {
		return (this.width / this.items.length);
	};

    Bar.prototype.getMax = function() {
        var data = this.items.map(function(item) { return item.data; });
        return Math.max.apply( Math, data );
    };

    Bar.prototype.plot = function(canvas) {
        var width = this.getWidth();
        var height = this.height;
        var max = this.getMax();
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var data = item.data / max * height;
            var startX = width*i;
            var startY = height-data;

            ctx.beginPath();
            ctx.rect(startX, startY, width-1, data);
            ctx.fillStyle = item.color;
            ctx.fill();
        }
    };

    var randomColor = function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    };

    var getData = function(dataset) {
        var items = [];
        $.each($(dataset).find('.visualize'), function(idx, item){
            items.push({
                data: $(item).data('value'),
                color: $(item).data('color') || randomColor(),
                label: item.textContent
            });
        });

        return items;
    };

})(jQuery);
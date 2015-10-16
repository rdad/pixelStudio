
function Pixel(x, y, color, size, $container){

	$container 	= $container || $('body');
	size 		= size || 50;

	this.$el = $('<div class="pixel"></div>');	

	this.set_position(x,y)
		.set_color(color)
		.set_size(size);

	$container.append(this.$el);
}

Pixel.prototype = {

	set_position: function(x, y){

		this.x 		= x;
		this.y 		= y;

		this.$el.css({
			left: (this.x * pixelStudio.pixel_dimension)+'px',
			top: (this.y * pixelStudio.pixel_dimension)+'px',
		});

		return this;
	},

	set_color: function(color){

		this.color = color;
		this.$el.css("background-color", this.color);
		return this;
	},

	set_size: function(size){

		this.size = size;
		this.$el.css({
			width: this.size+'px',
			height: this.size+'px'
		});
		return this;
	}
};
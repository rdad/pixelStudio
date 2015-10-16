
var pixelStudio = {

	pixel_dimension: 50,
	$draw: null,

	pixels: [],

	init: function(){

		// draw surface
		
		var self = this;
		
		this.init_draw();
		this.$draw.on('mousedown', function(e){

			var x = Math.floor(e.offsetX/self.pixel_dimension);
			var y = Math.floor(e.offsetY/self.pixel_dimension);

			if(x==0 && y==0)	return;

			var p = new Pixel(x, y, '#f00', self.pixel_dimension, pixelStudio.$draw);

			pixelStudio.pixels.push(p);
		});


		console.log('pixeStudio ready to rock!');
	},

	init_draw:  function(){

		this.$draw = $('<div id="draw"></div>');
		$('body').append(this.$draw);

		var w = window.innerWidth/this.pixel_dimension;
		w = Math.floor(w - (w/6));

		var h = Math.floor(window.innerHeight/this.pixel_dimension);

		console.log(w,h);

		this.$draw.css({
			width: (w*this.pixel_dimension)+'px',
			height: (h*this.pixel_dimension)+'px',
			right:0
		});
	}
};

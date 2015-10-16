
var pixelStudio = {

	pixel_dimension: 50,
	$draw: null,

	pixels: [],

	init: function(){

		// draw surface
		
		var self = this;
		
		this.init_draw();

		this.$draw.on('mousedown', function(e){

			console.log(e);

			var offset = self.$draw.offset(),
				dx = e.clientX - parseInt(offset.left),
				dy = e.clientY - parseInt(offset.top);

			var x = Math.floor(dx/self.pixel_dimension)+1;
			var y = Math.floor(dy/self.pixel_dimension)+1;



			var p =  new  Pixel(x,y,self.pixel_dimension,'#f00');	

			self.pixels.push(p);
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

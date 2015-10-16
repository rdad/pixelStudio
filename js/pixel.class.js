
/**
 * Pixel représente un pixel dans le cadre de dessin
 * @param {Number} x     position horizontale
 * @param {Number} y     position verticale
 * @param {Number} size  largeur & hauteur du pixel
 * @param {String} color couleur du pixel
 */
function Pixel(x, y, size, color) {

	this.$el = $('<div class="pixel"></div>');

	this.set_color(color);
	this.set_size(size);
	this.set_position(x,y);

	$('body').append(this.$el);
}

Pixel.prototype = {

	/**
	 * Permet de changer la position
	 * @param {Number} x position horizontale
	 * @param {Number} y position verticale
	 */
	set_position: function(x,y){
		this.x = x;
		this.y = y;
		this.$el.css({
			left : (this.x - 1) * this.size  +'px',
			top  : (this.y - 1) * this.size  +'px',
		});
	},

	/**
	 * Change la taille du pixel
	 * @param {Number]} size Largeur & hauteur
	 */
	set_size: function(size){
		this.size = size || 50;
		this.$el.css({
			width 	: this.size + 'px',
			height 	:  this.size + 'px',
		});	

	},

	/**
	 * Change la  couleur
	 * @param {String} color Couleur
	 */
	set_color : function(color){
		this.color = color || 'red';
		this.$el.css('background-color' , this.color);
	}
}
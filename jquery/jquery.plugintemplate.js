(function( $ ){
	var $element,
      $child;

	var defaults = {
    child: '.child'
	};

	var methods = {
		setup: function (options){
			$element = $(this);
			if ( options ) { jQuery.extend( defaults, options ); }
			jQuery(document).ready(function(){ methods.init(); });
		},
		init: function() {

    	$element.addClass('flexmenu-wrapper');
      $child = $element.find(defaults.child).addClass('child');


		}
	};

  /*!!!! IMPORTANT - THE FOLLOWING LINES ARE REQUIRED !!!*/
  $.fn.plugintemplate = function(method) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.setup.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.heroslideshow' );
      return false;
    }
	};
})( jQuery );

//$('.myelement').plugintemplate();

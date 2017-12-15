buzz.defaults.formats = ['wav'];
buzz.defaults.preload = 'metadata';

var keys = [  
	{ img: 'c.png' , sound: '036' },
	{ img: 'csharp.png' , sound: '037' },
    { img: 'd.png', sound: '038' },
	{ img: 'dsharp.png' , sound: '039' },  
	{ img: 'e.png' , sound: '040' },
	{ img: 'f.png' , sound: '041' },
	{ img: 'fsharp.png' , sound: '042' },
	{ img: 'g.png' , sound: '043' },
	{ img: 'gsharp.png' , sound: '044' },
	{ img: 'a.png' , sound: '045' },
	{ img: 'asharp.png' , sound: '046' },
    { img: 'b.png' , sound: '047' },
    { img: 'c.png' , sound: '048' },
	{ img: 'csharp.png' , sound: '049' },
    { img: 'd.png', sound: '050' },
	{ img: 'dsharp.png' , sound: '051' },  
	{ img: 'e.png' , sound: '052' },
	{ img: 'f.png' , sound: '053' },
	{ img: 'fsharp.png' , sound: '054' },
	{ img: 'g.png' , sound: '055' },
	{ img: 'gsharp.png' , sound: '056' },
	{ img: 'a.png' , sound: '057' },
	{ img: 'asharp.png' , sound: '058' },
    { img: 'b.png' , sound: '059' },
    { img: 'c.png' , sound: '060'}
];                                                                            


$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show(); 
    }

    var idx = 0,
        $container  = $( '#container' ),
        $sent    = $( '#sent' );


    function buildPiano() {
 
        var fLen = keys.length;
		
		$( 'img' ).mousedown( function() {
				var id = $(this).attr('alt');
				var snckSndsply = new buzz.sound(id);
				snckSndsply.play();
            
            });
        
    }

    buildPiano( idx );
});
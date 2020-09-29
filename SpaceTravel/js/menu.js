

var Menu = {
    
    preload: function(){
	
        juego.stage.backgroundColor = '#4660C7';
        juego.load.image('btn','img/btn.png');
		
    },
    
    create: function(){
		
       	var boton = this.add.button(juego.width/2, juego.height/2, 'btn', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);
		
        var txtTitulo = juego.add.text(juego.width/2+5, juego.height/2 -110, "Space Travel", {font: "bold 30px Stencil", fill:"black", align:"center"});
        txtTitulo.anchor.setTo(0.5);
		
    },
    
    iniciarJuego: function(){
        this.state.start('Juego');
	
    }
    
};
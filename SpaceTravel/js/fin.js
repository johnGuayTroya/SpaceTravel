
var Fin = {
    
    preload: function(){
        juego.stage.backgroundColor = '#4660C7';
        juego.load.image('btn', 'img/btn.png');
    }, 
    
    create: function(){
        var boton = this.add.button(juego.width/2, juego.height/2, 'btn', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);
        
        var Puntos = juego.add.text(juego.width/2 -10, juego.height/2 -85,"Tú puntuación es ", {font: "bold 20px stencil", fill:"black", align:"center"});
        Puntos.anchor.setTo(0.5);
        if(puntos == -1)
            puntos = 0;
		
        var PuntosNumero = juego.add.text(juego.width/2 +95, juego.height/2 -85, puntos.toString(), {font: "bold 20px Impact", fill:"black", align:"center"});
        PuntosNumero.anchor.setTo(0.5);
		
        var txtTitulo = juego.add.text(juego.width/2, juego.height/2 -125, "Fin del juego", {font: "bold 40px stencil", fill:"black", align:"center"});
        txtTitulo.anchor.setTo(0.5);
    }, 
    
    iniciarJuego: function(){
        this.state.start('Juego');
    }
    
};
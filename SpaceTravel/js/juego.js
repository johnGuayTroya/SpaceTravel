

//inicializo las variables a usar
var j1;
var rocas;
var fondo;
var salto;
var puntos;
var txtPuntos;
var timer;
//variables efectos sonido
var music;
var music2;
var music3;
var music4;
var Juego = {
  
   preload: function(){
	   
        juego.load.image('fondo','img/fondo.jpeg');
        juego.load.spritesheet('nave', 'img/naves.png', 43, 30);
        juego.load.image('piedra', 'img/piedra.png');
        juego.forceSingleUpdate = true;
	   
		//efectos Sonido
	   //le paso dos tipos de archivo de audio para que se reproduzca en la mayoria de nevegadores
		
		juego.load.audio('acierto',['music/moneda.mp3','music/moneda.ogg']);
		juego.load.audio('salto',['music/salto.mp3','music/salto.ogg'])
		juego.load.audio('choque',['music/choque.mp3','music/choque.ogg'])
		juego.load.audio('fondo',['music/SonidoMenu.mp3','music/SonidoMenu.ogg']);
        },
    
    create: function(){ //Creacion de elementos del juego
		
		//Music
		music=juego.add.audio('acierto');
		music2=juego.add.audio('salto');
		music3=juego.add.audio('choque');
		music4=juego.add.audio('fondo')
		music4.play();
	    
		
		fondo= juego.add.tileSprite(0, 0, 370, 550, 'fondo');
		juego.physics.startSystem(Phaser.Physics.ARCADE);
        //----------------Rocas--------------------
        rocas = juego.add.group();
        rocas.enableBody = true;
        rocas.createMultiple(20, 'piedra');
        //----------------Jugador-----------------------
        j1 = juego.add.sprite(100, 245, 'nave');
        j1.frame = 1;
        j1.anchor.setTo(0, 0.5);
        j1.animations.add('vuelo', [0,1,2],12, true);
		
		juego.physics.arcade.enable(j1);
        j1.body.gravity.y = 1200;
		
        //-------------------------------------------------------
      
        //----------Cuando pulsa la barra espaciadora,salta-------
        salto=
		juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        salto.onDown.add(this.saltar, this);
        //------temporizador del juego-----------------------------
        timer = juego.time.events.loop(1500, this.CrearColumna, this);
        //Puntos y su texto-------
        puntos = -1;
        txtPuntos = juego.add.text(20, 20, "0", {font: "35px Stencil", fill: "#FFF"});
 
         },
    
    update: function(){ //Conmporbaciones del jugador
		
		//
        if(j1.inWorld == false)
        {
            //envia al jugador al Game_Over
            this.state.start('Fin');
        }
        else if(j1.position.y >460) //si jugador sale de los limites en y
        {
            j1.alive = false;
            rocas.forEachAlive(function(t){
                   t.body.velocity.x = 0;
            }, this);
        }
        else
        {
            fondo.tilePosition.x -= 1; 
        }
        
        juego.physics.arcade.overlap(j1,rocas, this.Colision, null, this);
        //Se enciende la animacion de vuelo del j1
        j1.animations.play('vuelo');
        if(j1.angle <20){ j1.angle += 1;}
        
        },
    //---------------Métodos del juego------------------------------------------
    saltar: function(){
        j1.body.velocity.y = -340;
        juego.add.tween(j1).to({angle:-20}, 100).start();
		music2.play();
        },
    
	CrearRoca: function(x, y){
		
        var roca = rocas.getFirstDead();
        roca.reset(x, y);
        roca.body.velocity.x = -195;
        roca.checkWorldBounds = true;
        roca.outOfBoundsKill = true;
        },
	
    CrearColumna: function(){
		
        var hueco = Math.floor(Math.random()*5)+1;
		for( var i = 0; i < 8; i++)
        {
         if(i != hueco && i != hueco+1){this.CrearRoca(370, i*55+20);}   
        }
        //El jugador pasa por el hueco libr
        puntos +=1;
        txtPuntos.text = puntos;
		music.play();
        }, 
	
       Colision: function(){
        if(j1.alive == false){return;}            
        j1.alive = false;
		music3.play();   
		music4.stop();
        juego.time.events.remove(timer);
       rocas.forEachAlive(function(t){t.body.velocity.x =0;},this);
       }
	
        
};

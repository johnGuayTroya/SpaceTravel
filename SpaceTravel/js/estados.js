var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'escena');



juego.state.add('Menu', Menu);
juego.state.add('Juego', Juego);
juego.state.add('Fin',Fin);

juego.state.start('Menu');
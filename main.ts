tiles.setCurrentTilemap(tilemap`level`)
scene.onHitWall(SpriteKind.Player, function(sprite: Sprite, location: tiles.Location) {
    
})

 let myDart = darts.create(img`
     4 4 4 . . 4 4 4 4 4 . . . . . .
     4 5 5 4 4 5 5 5 5 5 4 4 . . . .
     b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
     . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
     . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
     b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
     c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
     c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
     c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
     c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
     . c 4 5 5 5 5 d d d 5 5 5 5 5 b
     . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
     . . c 4 4 d 4 4 4 4 4 d d 5 d c
     . . . c 4 4 4 4 4 4 4 4 5 5 5 4
     . . . . c c b 4 4 4 b b 4 5 4 4
     . . . . . . c c c c c c b b 4 .
 `, SpriteKind.Player)
myDart.controlWithArrowKeys()
myDart.setTrace()
scene.cameraFollowSprite(myDart)


controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    
    myDart.throwDart()
})


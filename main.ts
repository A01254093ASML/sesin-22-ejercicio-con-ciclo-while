input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let JAVIER = game.createSprite(0, 2)
let ANDREA = game.createSprite(randint(1, 4), randint(0, 4))
let DIANA = game.createSprite(randint(1, 4), randint(0, 4))
let TANIA = game.createSprite(randint(1, 4), randint(0, 4))
ANDREA.set(LedSpriteProperty.Brightness, 100)
DIANA.set(LedSpriteProperty.Brightness, 100)
TANIA.set(LedSpriteProperty.Brightness, 100)
game.setScore(0)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        JAVIER.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        JAVIER.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        JAVIER.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        JAVIER.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (JAVIER.isTouching(ANDREA)) {
        ANDREA.delete()
        game.addScore(1)
    }
    if (JAVIER.isTouching(DIANA)) {
        DIANA.delete()
        game.addScore(1)
    }
    if (JAVIER.isTouching(TANIA)) {
        TANIA.delete()
        game.addScore(1)
    }
    if (game.score() == 3) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        basic.showString("¡Felicidades!")
    }
})

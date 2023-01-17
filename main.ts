let boolean = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    boolean = 2
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    boolean = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    while (boolean == 2) {
        music.playMelody("A F E F D G E F ", 240)
        music.playMelody("B A G A G F A C5 ", 240)
    }
})

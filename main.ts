input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            . # . # .
            # # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            . # . . #
            `)
    }
    basic.clearScreen()
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    x = 0
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(100)
        led.unplot(x, 0)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(100)
    }
})
let x = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()

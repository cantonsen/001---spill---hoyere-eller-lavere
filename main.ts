input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.South)
    oldTerningkast = terningkast
    terningkast = randint(0, 9)
    basic.pause(100)
    if (terningkast <= oldTerningkast) {
        poeng += 1
        basic.showIcon(IconNames.Yes)
        music.playMelody("C5 - C5 - - - - - ", 340)
        basic.pause(100)
    } else {
        highScore = poeng
        poeng = 0
        shake = -1
        music.playMelody("B - B - G E D C5 ", 340)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    oldTerningkast = terningkast
    terningkast = randint(0, 9)
    basic.pause(100)
    if (terningkast >= oldTerningkast) {
        poeng += 1
        basic.showIcon(IconNames.Yes)
        music.playMelody("C5 - C5 - - - - - ", 340)
        basic.pause(100)
    } else {
        highScore = poeng
        poeng = 0
        shake = -1
        music.playMelody("B - B - G E D C5 ", 340)
        basic.pause(2000)
    }
})
input.onGesture(Gesture.Shake, function () {
    terningkast = randint(0, 9)
    shake = 1
})
let highScore = 0
let poeng = 0
let shake = 0
let terningkast = 0
let oldTerningkast = 0
oldTerningkast = 0
terningkast = 0
shake = 0
poeng = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (shake == 1) {
        basic.showNumber(terningkast)
    }
    if (shake == -1) {
        basic.showString("HS: ")
        basic.showNumber(highScore)
    }
})

input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    terningkast = randint(0, 9)
    shake = 1
})
let shake = 0
let terningkast = 0
let oldTerningkast = 0
terningkast = 0
shake = 0
basic.forever(function () {
    if (shake == 1) {
        basic.showNumber(terningkast)
    }
})

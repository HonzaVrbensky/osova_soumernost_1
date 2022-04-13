let i: number;
let a = 0
let b = randint(0, 4)
led.setBrightness(250)
for (i = 0; i < 5; i++) {
    led.plotBrightness(2, i, 150)
}
for (i = 0; i < 2; i++) {
    led.plot(a, b)
    led.plot(a + 1, b)
    led.plot(a, b + 1)
    led.plot(a + 1, b + 1)
    a = a + 3
}

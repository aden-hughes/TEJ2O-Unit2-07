/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aden Hughes
 * Created on: Mar 3
 * This program Simulates a cookie game
*/

// setting up for game
basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookies = 0

// starting the game
input.onButtonPressed(Button.A, function () {
    cookies += 1
    basic.showNumber(cookies)
})

// resetting game
input.onButtonPressed(Button.B, function () {
    cookies = 0
    basic.clearScreen()
})

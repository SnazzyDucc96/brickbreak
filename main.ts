namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const top = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const PowerUp = SpriteKind.create()
    export const MoreBalls = SpriteKind.create()
    export const MoreLife = SpriteKind.create()
    export const MoreLong = SpriteKind.create()
    export const ExtraLife = SpriteKind.create()
    export const ExtraBall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    info.changeScoreBy(15)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numbricks += -1
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.MoreBalls, function (sprite, otherSprite) {
    start_ball_far = 2
    numbricks += -1
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    New_Ball = sprites.create(img`
. 8 8 . 
8 8 8 8 
8 8 8 8 
. 8 8 . 
`, SpriteKind.ExtraBall)
    New_Ball.setPosition(otherSprite.x, otherSprite.y)
    New_Ball.vy = -50
    New_Ball.setVelocity(Math.randomRange(-30, 30), -50)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.MoreLife, function (sprite, otherSprite) {
    start_ball_far = 2
    numbricks += -1
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    ExtaLife = sprites.create(img`
2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 . . . 
. 2 2 2 2 2 2 . . . 
. 2 2 2 2 2 . . . . 
. . 2 2 2 . . . . . 
. . 2 2 2 . . . . . 
. . . 2 . . . . . . 
`, SpriteKind.ExtraLife)
    ExtaLife.setPosition(otherSprite.x, otherSprite.y)
    ExtaLife.vy = 50
})
function buildsetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            makeBrick(index * 16 + 32, col * 8 + 24)
            col += 1
        }
        col = 0
    }
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.MoreLong, function (sprite, otherSprite) {
    start_ball_far = 2
    numbricks += -1
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    GetLong = sprites.create(img`
. . . . . . . . . . 
4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . 
`, SpriteKind.ExtraBall)
    GetLong.setPosition(otherSprite.x, otherSprite.y)
    GetLong.vy = 50
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numbricks))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
function makeBrick (x: number, y: number) {
    randnum = Math.randomRange(0, 11)
    if (randnum <= 2) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randnum <= 5) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randnum <= 8) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randnum == 9) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 4 4 4 4 4 4 4 4 4 4 4 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.MoreLong)
    } else if (randnum == 10) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 1 1 2 2 1 1 1 2 2 1 1 1 1 f 
f 1 1 2 2 2 2 1 2 2 2 2 1 1 1 f 
f 1 1 1 2 2 2 2 2 2 2 1 1 1 1 f 
f 1 1 1 1 2 2 2 2 2 1 1 1 1 1 f 
f 1 1 1 1 1 2 2 2 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 2 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.MoreLife)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 1 1 8 8 8 8 8 8 f 
f 8 8 8 8 8 1 1 1 1 8 8 8 8 8 f 
f 8 8 8 8 8 1 1 1 1 8 8 8 8 8 f 
f 8 8 8 8 8 8 1 1 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.MoreBalls)
    }
    brick2.setPosition(x, y)
    numbricks += 1
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy >= -150) {
        sprite.vx += -5
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function startTwo () {
    numbricks = 0
    col = 0
    ball = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
    start_ball_far = 0
    scene.setBackgroundColor(7)
    mySprite = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setPosition(80, 110)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
    top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.top)
    top.setPosition(80, 0)
    right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
    right.setPosition(159, 60)
    left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
    info.setScore(0)
    left.setPosition(0, 60)
    buildsetBricks()
    info.setLife(3)
}
let left: Sprite = null
let right: Sprite = null
let top: Sprite = null
let mySprite: Sprite = null
let ball: Sprite = null
let brick2: Sprite = null
let randnum = 0
let GetLong: Sprite = null
let col = 0
let ExtaLife: Sprite = null
let New_Ball: Sprite = null
let start_ball_far = 0
let numbricks = 0
game.showLongText("Break as many bricks as you can", DialogLayout.Bottom)
startTwo()
scene.setBackgroundColor(7)
game.onUpdate(function () {
    if (start_ball_far == 0) {
        ball.setPosition(mySprite.x, 105)
        ball.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            start_ball_far = 1
        }
    }
    if (start_ball_far == 1) {
        ball.setVelocity(Math.randomRange(-30, 30), -50)
        start_ball_far += 2
    }
    if (ball.y > 115) {
        start_ball_far = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numbricks <= 0) {
        effects.confetti.startScreenEffect()
        pause(2000)
        effects.confetti.endScreenEffect()
        numbricks = 0
        start_ball_far = 0
        info.changeScoreBy(100)
        buildsetBricks()
    }
})

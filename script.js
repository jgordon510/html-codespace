// import kaboom.js

import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

kaboom({
  background: [141, 183, 255],
})

loadSprite("bean", "ship.png")


const ROT_SPEED = 3
const ACC = 1
scene("game", () => {
  const BULLET_SPEED = 1200
  const player = add([
    sprite("bean"),
    pos(100, 100),
    area({
      shape: new Rect(vec2(-16), 32, 32)
    }),
    {
      vel: Vec2.fromAngle(0)
    },
    scale(1),
    body(),
    anchor("center"),
    rotate(0),
    scale(0.1)
  ])
  onKeyDown("left", () => {
    player.angle -= ROT_SPEED
  })
  onKeyDown("right", () => {
    player.angle += ROT_SPEED
  })
  onKeyDown("up", () => {
    player.vel = player.vel.add(Vec2.fromAngle(player.angle).scale(ACC))

  })

  player.onUpdate(() => {
    player.move(player.vel)
  })
})
go("game")
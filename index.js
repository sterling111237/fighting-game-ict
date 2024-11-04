const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 2424
canvas.height = 1176

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.5

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0000_9.png'
})

const backgroundLayer1 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: '.\img\background\Layer_0001_8.png'
})

const backgroundLayer2 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: '.\img\background\Layer_0002_7.png'
})

const backgroundLayer3 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0003_6.png'
})

const backgroundLayer4 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0004_Lights.png'
})

const backgroundLayer5 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0005_5.png'
})

const backgroundLayer6 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0006_4.png'
})

const backgroundLayer7 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0007_Lights.png'
})

const backgroundLayer8 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0008_3.png'
})
const backgroundLayer9 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0009_2.png'
})

const backgroundLayer10 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0010_1.png'
})

const backgroundLayer11 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background/Layer_0011_0.png'
})

const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/noBKG_KnightIdle_strip.png',
  framesMax: 15,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: './img/noBKG_KnightIdle_strip.png',
      framesMax: 15
    },
    run: {
      imageSrc: './img/noBKG_KnightRun_strip.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/noBKG_KnightJumpAndFall_strip.png',
      framesMax: 14
    },
    attack1: {
      imageSrc: './img/noBKG_KnightAttack_strip.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/',
      framesMax: 4
    },
    death: {
      imageSrc: './img/noBKG_KnightDeath_strip.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/spr_Idle_strip.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: './img/spr_Idle_strip.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/spr_Walk_strip.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/spr/spr_Jump_strip.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/spr_Attack_strip.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/spr_Death_strip.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
}) 
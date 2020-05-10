// https://opengameart.org/content/a-platformer-in-the-forest

/* global ss */
/* global createButton */
const images = [];

const spriteManager = new ss.SharedSpriteManager();

/* exported preload */

// eslint-disable-next-line no-unused-vars
function preload() {
  images["images/king.png"] = loadImage("images/king.png");
  images["images/die.png"] = loadImage("images/die.png");
  images["images/green_1.png"] = loadImage("images/green_1.png");
  images["images/green_2.png"] = loadImage("images/green_2.png");
  images["images/train.png"] = loadImage("images/train.png");
  images["images/cursor.png"] = loadImage("images/cursor.png");
}

// eslint-disable-next-line no-unused-vars
async function setup() {
  const canvas = createCanvas(400, 400);

  background(50);

  makeButtons();

  await ss.initDeepstream();
  await spriteManager.init(canvas.canvas);

  spriteManager.addSharedSprite(["cursor"], {
    x: 0,
    y: 0,
    w: 32,
    h: 32,
    z: 10000,
    color: "red",
    src: "images/cursor.png",
  });
}

// eslint-disable-next-line no-unused-vars
function draw() {
  background(50);
  spriteManager.draw();
}

// eslint-disable-next-line no-unused-vars
function mousePressed(e) {
  spriteManager.broadcastMessage("talk");
}

// eslint-disable-next-line no-unused-vars
function mouseReleased(e) {}

// eslint-disable-next-line no-unused-vars
function mouseMoved(e) {}

// eslint-disable-next-line no-unused-vars
function mouseDragged(e) {}

function makeButtons() {
  const clear_button = createButton("clear");
  clear_button.mousePressed(() => {
    spriteManager.clear();
  });

  const d6 = createButton("d6");
  d6.mousePressed(() => {
    spriteManager.addSharedSprite(["pixelImage", "draggable", "label", "d6"], {
      x: random(width - 32),
      y: random(height - 32),
      w: 32,
      h: 32,
      z: 0,
      src: "images/die.png",
    });
  });

  const ttt = createButton("ttt");
  ttt.mousePressed(() => {
    spriteManager.addSharedSprite(16, 16, 256, 80, 0, ["pixelImage"], {
      src: "images/train.png",
    });

    spriteManager.addSharedSprite(["pixelImage", "draggable"], {
      x: 64,
      y: 48,
      w: 16,
      h: 16,
      z: 0,
      src: "images/green_1.png",
      snapTo: 16,
    });

    spriteManager.addSharedSprite(["pixelImage", "draggable"], {
      x: 96,
      y: 48,
      w: 16,
      h: 16,
      z: 0,
      src: "images/green_2.png",
      snapTo: 16,
    });
  });
}
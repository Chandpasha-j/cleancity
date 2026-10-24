

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d8eb2f3-bf19-4f7c-9c9f-081511940d60","9e89b403-9172-445b-8ea6-3a2444d83911","24a1f84a-c73d-4aa7-be64-8f38f478af81","84b48009-d0f7-48e4-924f-95130be4833a","23f46ad0-d96a-444a-a7f4-b04a1e308a7a","eac51124-3f27-4136-9898-ed1df3e9751d","3e3baf2f-da52-4cb6-9e97-2fba86fdcdb5","c89449e0-dcb4-4895-a9a5-0b59569236b2","4a28d560-3371-442f-bf3a-48b5a8d38f88"],"propsByKey":{"7d8eb2f3-bf19-4f7c-9c9f-081511940d60":{"sourceSize":{"x":400,"y":400},"frameSize":{"x":400,"y":400},"frameCount":1,"frameDelay":4,"name":"garden","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/7d8eb2f3-bf19-4f7c-9c9f-081511940d60.png","size":56915,"version":"WpxTPeL7v4ZZEJfTBXE6ai.gLrdA199P","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/7d8eb2f3-bf19-4f7c-9c9f-081511940d60.png"},"9e89b403-9172-445b-8ea6-3a2444d83911":{"sourceSize":{"x":132,"y":200},"frameSize":{"x":132,"y":200},"frameCount":1,"frameDelay":4,"name":"dryBin","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/9e89b403-9172-445b-8ea6-3a2444d83911.png","size":32400,"version":"AEbutwG0_GZRtpxM3DXSOeWqixOh6E02","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/9e89b403-9172-445b-8ea6-3a2444d83911.png"},"24a1f84a-c73d-4aa7-be64-8f38f478af81":{"sourceSize":{"x":400,"y":400},"frameSize":{"x":400,"y":400},"frameCount":1,"frameDelay":4,"name":"busStop","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/24a1f84a-c73d-4aa7-be64-8f38f478af81.png","size":90112,"version":"C24k6PrLuNdekfJ_JKuI1hAhkJOKiUHm","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/24a1f84a-c73d-4aa7-be64-8f38f478af81.png"},"84b48009-d0f7-48e4-924f-95130be4833a":{"sourceSize":{"x":153,"y":200},"frameSize":{"x":153,"y":200},"frameCount":1,"frameDelay":4,"name":"wetBin","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/84b48009-d0f7-48e4-924f-95130be4833a.png","size":32694,"version":"EnfnjvXyYlN7_k9Er.di39KaRskUSEP3","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/84b48009-d0f7-48e4-924f-95130be4833a.png"},"23f46ad0-d96a-444a-a7f4-b04a1e308a7a":{"sourceSize":{"x":314,"y":393},"frameSize":{"x":314,"y":393},"frameCount":1,"frameDelay":4,"name":"paper","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/23f46ad0-d96a-444a-a7f4-b04a1e308a7a.png","size":1270,"version":"EUYvf2rSsnY0Tl9KlmofAsFjS2B9CfIZ","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/23f46ad0-d96a-444a-a7f4-b04a1e308a7a.png"},"eac51124-3f27-4136-9898-ed1df3e9751d":{"sourceSize":{"x":500,"y":500},"frameSize":{"x":500,"y":500},"frameCount":1,"frameDelay":4,"name":"wrapper","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/eac51124-3f27-4136-9898-ed1df3e9751d.png","size":95193,"version":"xaP0mef1sXHoYfg_8xf.JNQ5BmjBFr_p","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/eac51124-3f27-4136-9898-ed1df3e9751d.png"},"3e3baf2f-da52-4cb6-9e97-2fba86fdcdb5":{"sourceSize":{"x":453,"y":456},"frameSize":{"x":453,"y":456},"frameCount":1,"frameDelay":4,"name":"dryLeaf","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/3e3baf2f-da52-4cb6-9e97-2fba86fdcdb5.png","size":52497,"version":"4woYub_FH.VapUvCiEB0c8sg8vcPbZjS","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/3e3baf2f-da52-4cb6-9e97-2fba86fdcdb5.png"},"c89449e0-dcb4-4895-a9a5-0b59569236b2":{"sourceSize":{"x":242,"y":339},"frameSize":{"x":242,"y":339},"frameCount":1,"frameDelay":4,"name":"person","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/c89449e0-dcb4-4895-a9a5-0b59569236b2.png","size":26077,"version":"XJaw6JAb79ztjFnva9iki7GeIxcIy4Lz","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/c89449e0-dcb4-4895-a9a5-0b59569236b2.png"},"4a28d560-3371-442f-bf3a-48b5a8d38f88":{"sourceSize":{"x":400,"y":398},"frameSize":{"x":400,"y":398},"frameCount":1,"frameDelay":4,"name":"fruit","sourceUrl":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/4a28d560-3371-442f-bf3a-48b5a8d38f88.png","size":4322,"version":"20DgrJF19SWkBrR3vg9wERR9QDW8nr3M","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/9e46ccab-a276-4c77-b45a-81fae0f6d93c/4a28d560-3371-442f-bf3a-48b5a8d38f88.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var litterLeft = 4;
var carrying = false;
var carryingType = "none";
var level = 1;
var gameOver = false;
var levelMessage = false;
var levelMessageTime = 0;
var wrongMessage = "";
var wrongTimer = 0;
var gameWon = false;

var scene = createSprite(200, 200, 400, 400);
scene.setAnimation("garden");
scene.scale = 1;

var wetBin = createSprite(65, 340, 60, 50);
wetBin.setAnimation("wetBin");
wetBin.scale = 0.45;

var dryBin = createSprite(335, 340, 60, 50);
dryBin.setAnimation("dryBin");
dryBin.scale = 0.45;

// Separate collision zones for the two bins
var wetZone = createSprite(65, 350, 65, 55);
wetZone.visible = false;

var dryZone = createSprite(335, 350, 65, 55);
dryZone.visible = false;

var leaf = createSprite(100, 150, 25, 25);
leaf.setAnimation("dryLeaf");
leaf.scale = 0.15;

var paper = createSprite(170, 220, 25, 25);
paper.setAnimation("paper");
paper.scale = 0.15;

var wrapper = createSprite(280, 160, 25, 25);
wrapper.setAnimation("wrapper");
wrapper.scale = 0.15;

var fruit = createSprite(300, 240, 25, 25);
fruit.setAnimation("fruit");
fruit.scale = 0.15;

var player = createSprite(200, 280, 30, 40);
player.setAnimation("person");
player.scale = 0.2;

var heldItem = createSprite(215, 280, 20, 20);
heldItem.visible = false;
heldItem.scale = 0.12;

var items = [leaf, paper, wrapper, fruit];
var types = ["wet", "dry", "dry", "wet"];
var animations = ["dryLeaf", "paper", "wrapper", "fruit"];

function resetItems() {
  leaf.x = 150;
  leaf.y = 150;

  paper.x = 170;
  paper.y = 220;
  wrapper.x = 280;
  wrapper.y = 160;

  fruit.x = 300;
  fruit.y = 240;
  for (var i = 0; i < items.length; i++) {
    items[i].visible = true;
  }
  litterLeft = 4;
  carrying = false;
  carryingType = "none";
  heldItem.visible = false;
  wrongMessage = "";
  wrongTimer = 0;
}

function draw() {
  background("lightgreen");

  if (!gameOver && !levelMessage) {
    if (keyDown("left")) player.x -= 3;
    if (keyDown("right")) player.x += 3;
    if (keyDown("up")) player.y -= 3;
    if (keyDown("down")) player.y += 3;
  
    if (player.x < 15) player.x = 15;
    if (player.x > 385) player.x = 385;
    if (player.y < 75) player.y = 75;
    if (player.y > 385) player.y = 385;

    // Pick up litter
    if (!carrying) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].visible && player.isTouching(items[i])) {
          items[i].visible = false;
          carrying = true;
          carryingType = types[i];

          heldItem.setAnimation(animations[i]);
          heldItem.visible = true;
          litterLeft--;

          wrongMessage = "";
          wrongTimer = 0;
          break;
        }
      }
    }
        // Carry litter and check the selected bin
    if (carrying) {
      heldItem.x = player.x + 18;
      heldItem.y = player.y;

      if (player.isTouching(wetZone)) {
        if (carryingType == "wet") {
          score += 10;
          carrying = false;
          carryingType = "none";
          heldItem.visible = false;
          wrongMessage = "";
          wrongTimer = 0;
        } else if (wrongTimer <= 0) {
          wrongMessage = "Wrong bin! Go to DRY WASTE!";
          wrongTimer = 100;
        }
      } else if (player.isTouching(dryZone)) {
        if (carryingType == "dry") {
          score += 10;
          carrying = false;
          carryingType = "none";
          heldItem.visible = false;
          wrongMessage = "";
          wrongTimer = 0;
        } else if (wrongTimer <= 0) {
          wrongMessage = "Wrong bin! Go to WET WASTE!";
          wrongTimer = 100;
        }
      }
    }
        if (wrongTimer > 0) {
      wrongTimer--;
      if (wrongTimer == 0) wrongMessage = "";
    }

    // Level 1 complete
    if (level == 1 && litterLeft == 0 && !carrying) {
      level = 2;
      scene.setAnimation("busStop");
      resetItems();
      player.x = 200;
      player.y = 280;
      levelMessage = true;
      levelMessageTime = 100;
    }

    // Level 2 complete
    if (level == 2 && litterLeft == 0 && !carrying) {
      gameOver = true;
      gameWon = true;
    }
  }
    // Pause gameplay during the level transition
  if (levelMessage) {
    levelMessageTime--;

    if (levelMessageTime <= 0) {
      levelMessage = false;
    }
  }

  if (carrying) {
    heldItem.x = player.x + 18;
    heldItem.y = player.y;
  }

  drawSprites();

  // Scoreboard
  fill("white");
  rect(0, 0, 400, 58);

  fill("darkgreen");
  textSize(18);
  text("CLEAN CITY MISSION", 10, 22);

  fill("black");
  textSize(12);
  text("Score: " + score, 10, 45);
  text("Level: " + level, 135, 45);
  text("Litter left: " + litterLeft, 240, 45);

  // Show a warning only after wrong-bin contact
  if (wrongTimer > 0 && !levelMessage && !gameOver) {
    fill("white");
    rect(10, 70, 380, 30);

    fill("red");
    textSize(13);
    text(wrongMessage, 18, 89);
  }
    // Level transition animation
  if (levelMessage) {
    fill("rgba(0, 0, 0, 0.65)");
    rect(0, 58, 400, 342);

    fill("white");
    rect(25, 135, 350, 125);

    fill("green");
    textSize(26);
    text("LEVEL CLEARED!", 70, 175);

    fill("black");
    textSize(15);
    text("Great work, City Cleaner!", 90, 205);

    textSize(13);
    text("Next: Bus Stop Mission", 105, 230);

    fill("green");
    rect(65, 240, 270 * (100 - levelMessageTime) / 100, 5);
  }
    // Final victory screen
  if (gameOver && gameWon) {
    fill("rgba(0, 0, 0, 0.75)");
    rect(0, 0, 400, 400);

    fill("white");
    rect(25, 115, 350, 175);

    fill("green");
    textSize(27);
    text("CITY CLEANED!", 75, 155);

    fill("black");
    textSize(16);
    text("Amazing work!", 130, 190);

    textSize(18);
    text("Final Score: " + score, 115, 220);

    fill("blue");
    textSize(14);
    text("Press R to play again", 112, 255);
  }
    // Restart
  if (keyWentDown("r")) {
    score = 0;
    level = 1;
    gameOver = false;
    gameWon = false;
    levelMessage = false;
    levelMessageTime = 0;

    scene.setAnimation("garden");
    resetItems();

    player.x = 200;
    player.y = 280;
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

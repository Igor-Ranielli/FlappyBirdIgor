// [Background]
const background = {
    spriteX: 390,
    spriteY: 0,
    width: 275,
    height: 204,
    x: 0,
    y: cvs.height - 204,
    draw() {
        context.fillStyle = '#70c5ce';
        context.fillReact(0, 0, cvs.width, cvs.height);

        context.drawImage(
            sprites,
            background.spriteX, background.spriteY,
            background.width, background.height,
            background.x, background.y,
            background.width, background.height,
                       
        );
    },
};
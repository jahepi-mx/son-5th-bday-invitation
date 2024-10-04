class Background {
    
    constructor(camera, x, y, wx, wy, sw, sh, dir) {
        this.atlas = Atlas.getInstance();
        this.assets = Assets.getInstance(); 
        this.position = new Vector(x, y);
        this.size = new Vector(sw, sh);
        this.camera = camera;
        this.wx = wx;
        this.wy = wy;
        this.image = "sky";
        this.dir = dir;
    }

    render(context) {
        var x = this.wx + this.position.x + this.camera.xOffset() - this.size.x * 0.5;
        var y = this.wy - (this.position.y + this.camera.yOffset() + this.size.y * 0.5);
        context.drawImage(this.assets.spritesAtlas, this.atlas.sprites[this.image].x, this.atlas.sprites[this.image].y, this.atlas.sprites[this.image].width, this.atlas.sprites[this.image].height, 
            x,  y, this.size.x, this.size.y);

        /*
        context.fillStyle = "blue";
        context.font = "20px Arial";
        context.fillText(this.dir[0] + "," + this.dir[1], x, y);
        context.fillRect(x, y, 30, 30);
        */
    }
}
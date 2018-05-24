function Wall(x, y, h) {
  this.pos = createVector(x, y);
  this.horizontal = h;

  //this.i = i;

  this.color = color(255);

  this.visible = true;

  this.highlight = function(col) {
    this.color = col;
  }

  this.show = function() {
    if (this.visible) {
      fill(this.color);
      noStroke();
      if (this.horizontal) {
        rect(cellSize/2 + cellSize*this.pos.x, cellSize/2 + cellSize*this.pos.y, cellSize, 1);
        //text(i, cellSize + cellSize*this.pos.x, cellSize/2 + cellSize*this.pos.y)
      } else {
        rect(cellSize/2 + cellSize*this.pos.x, cellSize/2 + cellSize*this.pos.y, 1, cellSize);
        //text(i, cellSize/2 + cellSize*this.pos.x, cellSize/2 + cellSize*this.pos.y + cellSize/2);
      }
    }
  }
}

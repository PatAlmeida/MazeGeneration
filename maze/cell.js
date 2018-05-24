function Cell(x, y) {
  this.pos = createVector(x, y);
  this.width = cellSize;
  this.height = cellSize;
  this.color = color(255);

  this.visited = false;

  this.neighbors = [];

  this.makeNeighbors = function(rows, cols, cells) {
    var i = rows * this.pos.x + this.pos.y;
    if (this.pos.y != rows - 1) this.neighbors.push(cells[i+1]);
    if (this.pos.y != 0) this.neighbors.push(cells[i-1]);
    if (this.pos.x != cols - 1) this.neighbors.push(cells[i+rows]);
    if (this.pos.x != 0) this.neighbors.push(cells[i-rows]);
  }

  this.highlight = function(col) {
    this.color = col;
  }

  this.showNeighbors = function() {
    for (var i=0; i<this.neighbors.length; i++) {
      this.neighbors[i].highlight(color(255, 0, 0));
    }
  }

  this.show = function() {
    stroke(this.color);
    strokeWeight(5);
    //point(cellSize + this.width*this.pos.x, cellSize + this.height*this.pos.y);
    /*var spot = "(" + this.pos.x + ", " + this.pos.y + ")";
    stroke(255, 0, 0);
    text(spot, 50+50*this.pos.x, 50+50*this.pos.y);*/
  }
}

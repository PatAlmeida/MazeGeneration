function Grid() {
  this.rows = 26;
  this.cols = 26;

  this.cells = [];
  for (var i=0; i < this.cols; i++) {
    for (var j=0; j < this.rows; j++) {
      this.cells.push(new Cell(i, j));
    }
  }

  for (var i=0; i<this.cells.length; i++) {
    this.cells[i].makeNeighbors(this.rows, this.cols, this.cells);
  }

  this.walls = [];
  for (var i=0; i < this.cols; i++) {
    for (var j=0; j < this.rows + 1; j++) {
      //this.walls.push(new Wall(i, j, true, i*11 + j));
      this.walls.push(new Wall(i, j, true));
    }
  }
  for (var i=0; i < this.cols + 1; i++) {
    for (var j=0; j < this.rows; j++) {
      //this.walls.push(new Wall(i, j, false, 110 + i*10+j));
      this.walls.push(new Wall(i, j, false));
    }
  }

  this.show = function() {
    for (var i=0; i < this.cols; i++) {
      for (var j=0; j < this.rows; j++) {
        this.cells[i + j*this.cols].show();
      }
    }

    for (var i=0; i < this.walls.length; i++) {
      this.walls[i].show();
    }
  }

  this.allVisited = function() {
    var all = true;
    for (var i=0; i<this.cells.length; i++) {
      if (!this.cells[i].visited) {
        all = false;
      }
    }
    return all;
  }
}

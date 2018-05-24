var grid;
var cellSize;
var start;

var doneOnce = false;
var mouseActivated = false;
var done = false;

var stack = [];

// Algorithm taken from the Recursive Backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function setup() {
  createCanvas(542, 542);

  cellSize = 20;
  grid = new Grid();

  start = true;

  frameRate(30);
}

function draw() {
  background(0);

  grid.show();

  if (start) {
    var randX = floor(random(grid.cols));
    var randY = floor(random(grid.rows));
    var i = randX * grid.rows + randY;
    grid.cells[i].visited = true;
    grid.cells[i].highlight(color(255, 0, 0));
    stack.push(grid.cells[i]);
    start = false;
  } else if (!done) {
    var c = stack[stack.length - 1];
    var availNeighbors = [];
    for (var i=0; i<c.neighbors.length; i++) {
      if (!c.neighbors[i].visited) {
        availNeighbors.push(c.neighbors[i]);
      }
    }

    if (availNeighbors.length > 0) {
      var randN = floor(random(availNeighbors.length));
      var nextC = availNeighbors[randN];
      nextC.visited = true;
      nextC.highlight(color(0, 255, 0));
      var wallNum;
      if (c.pos.x == nextC.pos.x) {
        if (c.pos.y < nextC.pos.y) {
          wallNum = nextC.pos.x * (grid.rows + 1) + nextC.pos.y;
        } else {
          wallNum = c.pos.x * (grid.rows + 1) + c.pos.y;
        }
      } else {
        if (c.pos.x < nextC.pos.x) {
          wallNum = nextC.pos.x * grid.rows + nextC.pos.y + (grid.rows * grid.rows + grid.cols);
        } else {
          wallNum = c.pos.x * grid.rows + c.pos.y + (grid.rows * grid.rows + grid.cols);
        }
      }
      grid.walls[wallNum].visible = false;
      stack.push(nextC);
    } else {
      stack.pop();
      if (stack.length == 0) {
        openEnds();
        done = true;
      }
      c.highlight(color(0, 0, 255));
    }

  }

  if (mouseActivated) {
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 5, 5);
  }

}

function openEnds() {
  if (!doneOnce) {
    doneOnce = true;
    var l = grid.walls.length;
    grid.walls[l/2 + 1].visible = false;
    grid.walls[l - 2].visible = false;
    mouseActivated = true;
  } else {
    console.log("DONE");
    noLoop();
  }
}

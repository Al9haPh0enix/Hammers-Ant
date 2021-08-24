let grid;
let x;
let y;
let dir;

let ANTUP = 0;
let ANTRIGHT = 1;
let ANTDOWN = 2;
let ANTLEFT = 3;

let Background;
let col1;
let col2;
let col3;
let col4;
let col5;

function setup() {
    createCanvas(800, 800);
    grid = make2DArray(width, height);
    x = width / 2;
    y = height / 2;
    dir = ANTUP;

    Background = color(100, 100, 100)
    col1 = color(255, 0, 0)
    col2 = color(0, 255, 0);
    col3 = color(0, 0, 255);
    col4 = color(0, 25, 255);
    col5 = color(255, 0, 255);

    background(Background)
}

function turnRight() {
    dir++;
    if (dir > ANTLEFT) {
        dir = ANTUP;
    }
}

function turnLeft() {
    dir--;
    if (dir < ANTUP) {
        dir = ANTLEFT;
    }
}

function moveForward() {
    if (dir == ANTUP) {
        y--;
    } else if (dir == ANTRIGHT) {
        x++;
    } else if (dir == ANTDOWN) {
        y++;
    } else if (dir == ANTLEFT) {
        x--;
    }

    if (x > width - 1) {
        x = 0;
    } else if (x < 0) {
        x = width - 1;
    }
    if (y > height - 1) {
        y = 0;
    } else if (y < 0) {
        y = height - 1;
    }
}

function draw() {
    strokeWeight(1);
    for (let n = 0; n < 1000; n++) {
        let state = grid[x][y];
        if (state == 0) {
            turnRight();
            grid[x][y] = 1;
        } else if (state == 1) {
            turnLeft();
            turnLeft();
            grid[x][y] = 2;
        } else if (state == 2) {
            moveForward();
            moveForward();
            moveForward();
            grid[x][y] = 3;
        } else if (state == 3) {
            moveForward();
            grid[x][y] = 4;
            moveForward();
            grid[x][y] = 2;
            moveForward();
            grid[x][y] = 1;
            moveForward();
            grid[x][y] = 0;
        } else if (state == 4) {
            moveForward();
            grid[x][y] = 3;
            moveForward();
            grid[x][y] = 2;
            moveForward();
            grid[x][y] = 1;
        }

        stroke(col1);
        if (grid[x][y] == 1) {
            stroke(col2);
        } else if (grid[x][y] == 2) {
            stroke(col3);
        } else if (grid[x][y] == 3) {
            stroke(col4);
        } else if (grid[x][y] == 4) {
            stroke(col5);
        }
        point(x, y);
        moveForward();
    }
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}
// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size{

    constructor(width = 80, height = 60){
        this.width = width;
        this.height = height;
    }

    resize(width, height){
        this.width = width;
        this.height = height;
    }
}

export class Position{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}

export class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
}


ProgramWindow.prototype.resize = function(Size){
        let height = Size.height < 1? 1: this.position.y + Size.height > this.screenSize.height? this.screenSize.height - this.position.y: Size.height;
        let width = Size.width < 1? 1: this.position.x + Size.width > this.screenSize.width? this.screenSize.width - this.position.x: Size.width;
        this.size.resize(width, height);
    }

ProgramWindow.prototype.move = function(Position){
        let newX = Position.x < 0? 0: Position.x + this.size.width > this.screenSize.width? this.screenSize.width - this.size.width: Position.x;
        let newY = Position.y < 0? 0: Position.y + this.size.height> this.screenSize.height? this.screenSize.height - this.size.height: Position.y;
        this.position.move(newX, newY);
    }

export function changeWindow(ProgramWindow){
    ProgramWindow.resize(new Size(400, 300));
    ProgramWindow.move(new Position(100, 150));
    return ProgramWindow;
}
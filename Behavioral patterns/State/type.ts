// Интерфейс состояния лифта
interface ElevatorState {
    requestFloor(floor: number): void;
    moveUp(): void;
    moveDown(): void;
    stop(): void;
  }
  
  // Конкретные реализации состояний лифта
  class StoppedState implements ElevatorState {
    private elevator: Elevator;
  
    constructor(elevator: Elevator) {
      this.elevator = elevator;
    }
  
    requestFloor(floor: number): void {
      if (floor > this.elevator.currentFloor) {
        this.elevator.setState(this.elevator.upState);
        this.elevator.moveUp();
      } else if (floor < this.elevator.currentFloor) {
        this.elevator.setState(this.elevator.downState);
        this.elevator.moveDown();
      } else {
        console.log("Лифт уже на этом этаже");
      }
    }
  
    moveUp(): void {
      console.log("Лифт не может двигаться вверх, он остановлен");
    }
  
    moveDown(): void {
      console.log("Лифт не может двигаться вниз, он остановлен");
    }
  
    stop(): void {
      console.log("Лифт уже остановлен");
    }
  }
  
  class UpState implements ElevatorState {
    private elevator: Elevator;
  
    constructor(elevator: Elevator) {
      this.elevator = elevator;
    }
  
    requestFloor(floor: number): void {
      if (floor > this.elevator.currentFloor) {
        console.log("Лифт продолжит двигаться вверх");
      } else if (floor < this.elevator.currentFloor) {
        this.elevator.setState(this.elevator.downState);
        this.elevator.moveDown();
      } else {
        this.elevator.setState(this.elevator.stoppedState);
        this.elevator.stop();
      }
    }
  
    moveUp(): void {
      this.elevator.currentFloor++;
      console.log(`Лифт поднялся на ${this.elevator.currentFloor} этаж`);
    }
  
    moveDown(): void {
      console.log("Лифт не может двигаться вниз, он движется вверх");
    }
  
    stop(): void {
      this.elevator.setState(this.elevator.stoppedState);
      console.log("Лифт остановлен");
    }
  }
  
  class DownState implements ElevatorState {
    private elevator: Elevator;
  
    constructor(elevator: Elevator) {
      this.elevator = elevator;
    }
  
    requestFloor(floor: number): void {
      if (floor < this.elevator.currentFloor) {
        console.log("Лифт продолжит двигаться вниз");
      } else if (floor > this.elevator.currentFloor) {
        this.elevator.setState(this.elevator.upState);
        this.elevator.moveUp();
      } else {
        this.elevator.setState(this.elevator.stoppedState);
        this.elevator.stop();
      }
    }
  
    moveUp(): void {
      console.log("Лифт не может двигаться вверх, он движется вниз");
    }
  
    moveDown(): void {
      this.elevator.currentFloor--;
      console.log(`Лифт спустился на ${this.elevator.currentFloor} этаж`);
    }
  
    stop(): void {
      this.elevator.setState(this.elevator.stoppedState);
      console.log("Лифт остановлен");
    }
  }
  
  // Класс лифта, управляющий состоянием
  class Elevator {
    currentFloor: number;
    stoppedState: ElevatorState;
    upState: ElevatorState;
    downState: ElevatorState;
    currentState: ElevatorState;
  
    constructor() {
      this.currentFloor = 1;
      this.stoppedState = new StoppedState(this);
      this.upState = new UpState(this);
      this.downState = new DownState(this);
      this.currentState = this.stoppedState;
    }
  
    setState(state: ElevatorState): void {
      this.currentState = state;
    }
  
    requestFloor(floor: number): void {
      this.currentState.requestFloor(floor);
    }
  
    moveUp(): void {
      this.currentState.moveUp();
    }
  
    moveDown(): void {
      this.currentState.moveDown();
    }
  
    stop(): void {
      this.currentState.stop();
    }
  }
  
  // Пример использования
  const elevator = new Elevator();
  elevator.requestFloor(5); // Лифт поднимается на 5 этаж
  elevator.requestFloor(2); // Лифт спускается на 2 этаж
  elevator.requestFloor(3); // Лифт поднимается на 3 этаж
  elevator.stop(); // Лифт останавливается
  
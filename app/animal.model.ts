export class Animal {

  public static animals: Animal[] = [];

  static getAll() {
    return Animal.animals;
  }

  data: object = {}
  id: number;
  constructor(data) {
    this.data = {};
  };
  
  save() {
    this.id = Animal.animals.length;
    Animal.animals.push(this);
  }
}

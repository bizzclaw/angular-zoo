export class Animal {

  public static animals: Animal[] = [];

  static getAll() {
    return Animal.animals;
  }

  public id: number;
  constructor(public data: object) {};

  save() {
    this.id = Animal.animals.length;
    Animal.animals.push(this);
  }
}

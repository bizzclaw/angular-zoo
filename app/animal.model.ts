export class Animal {

  public static animals: Animal[] = [];

  // DATA TYPES //
  //These Data types will auto fill themselves into edit/creation forms. Instad of adding that info to both edit and creation forms, they can be pulled directly from this list.
  //dataString values are objects with different properties.

  public static dataTypes: Object = {
    ["name"]: {lang: "Name", type: "string"},
    ["species"]: {lang: "Species", type: "string"},
    ["likes"]: {lang: "Likes", type: "string"},
    ["dislikes"]: {lang: "Dislikes", type: "string"},
    ["location"]: {lang: "Location", type: "string"},
    ["diet"]: {lang: "Diet", type: "string"},
    ["dob"]: {lang: "Date of Birth", listLang: "Age", type: "date", listDisplay: function(value) {
      return Animal.calculateAge(value);
    }},
    ["caretakers"]: {lang: "Needed Caretakers", type: "number", min: 1, max: 25},
    ["sex"]: {lang: "Sex", type: "string", selections: ["Male", "Female"]},
  }

  //applied to values of these types in order to make them the variable type they should be.
  public static typeEnforcements = {
    ["number"]: function(input) {
      return parseInt(input)
    },
    // ["date"]: function(input) {
    //   return new Date(input);
    // }
  }

  static EnforceTypes(data) {
    let keys = Object.keys(data)
    keys.forEach(function(k) {
      let v = data[k]
      let dataInfo = Animal.dataTypes[k]

      let typeEnforcement = Animal.typeEnforcements[dataInfo.type]
      data[k] =  typeEnforcement? typeEnforcement(data[k]) : data[k]
    });
    return data
  }

  // different methods for generating filters excepted by the main filter pipe, the filtering ui and filter pipe pull directly from this list.
  public static filterMethods = {
    ["string"]: [
      {
        lang: "Find",
        method: function(comparison, value) {
          let pass = value.toLowerCase().search(comparison.toLowerCase()) !== -1;
          return pass;
        }
      }
    ],
    ["date"]: [
      {
        lang: "Older Than",
        method: function(comparison, value) {
          return Animal.calculateAge(value) >= comparison;
        },
      },
      {
        lang: "Younger Than",
        method: function(comparison, value) {
          return Animal.calculateAge(value) < comparison;
        },
      },
    ],
    ["number"]: [
      {
        lang: "Greater Than",
        method: function(comparison, value) {
          return value > comparison;
        }
      },
      {
        lang: "Exactly",
        method: function(comparison, value) {
          return value == comparison;
        }
      },
      {
        lang: "Less Than",
        method: function(comparison, value) {
          return value < comparison;
        }
      }
    ]
  }

  static calculateAge(birthdate) {
    let now = new Date();
    let birthDay = new Date(birthdate);
    return now.getFullYear() - birthDay.getFullYear();
  }

  static getAll() {
    return Animal.animals;
  }

  public id: number;
  public data: object;
  constructor(data: object) {
    this.data = Animal.EnforceTypes(data);
  };

  save() {
    this.id = Animal.animals.length;
    Animal.animals.push(this);
  }
}

// Ejercicio tomado de: https://faheemkhan97.hashnode.dev/the-new-operator-calling-a-function-in-constructor-mode

/*
* 1. Ejemplo de cómo se crear un tipo predefinido con la palabra clave new
*/
console.log("\n******************* Crear un arreglo con la palabra clave 'new'")

const arr = new Array(1,2,3,4);
console.log("Arreglo creado con la palabra clave 'new': ",arr); // [1, 2, 3, 4]


/*
* 2. Ejemplo de cómo crear un objeto desde una función, sin utilizar la palabra 'new'
* La función student devuelve un objeto
*/
console.log("\n******************* Crea una función que devuelve un objeto sin utilizar 'new'")


function student(name, roll, course){
    const studentObject = { }; //Crea un objeto vacío

    //establece las propiedades del objeto definido por el usuario
    studentObject.name = name;
    studentObject.roll = roll;
    studentObject.course = course;

    return studentObject; //Objeto que se devuelve
}

const student1 = student("José", 1011, ['Flutter', 'Dart']);
const student2 = student("Pedro", 1011, ['JavaScript']);

console.log("student1.name = ",student1.name); // "José"
console.log("student2.name = ",student2.name); // "Pedro"
console.log("student1.course = ",student1.course); // ["Flutter", "Dart"]


/*
* 3. Ejemplo de cómo crear un objeto con la palabra 'new'
*/
console.log("\n******************* Crea un objeto utilizando la palabra clave 'new' para una función")

//Esta función hace lo mismo que una clase
function Student(name, roll, course){
    this.name = name;
    this.roll = roll;
    this.course = course;
}

// Crea un objeto con la palabra clave 'new'.
// Al utilizar 'new', nos quitamos la carga de tener que crear y devolver un objeto manualmente
const student3 = new Student("María", 1011, ['Flutter', 'Dart']);
const student4 = new Student("Rosa", 1011, ['JavaScript']);

console.log("student3.name = ",student3.name); // "María"
console.log("student4.name = ",student4.name); // "Rosa"
console.log("student3.course = ",student3.course); // ["Flutter", "Dart"]


/*
* 4. Ejemplo de cómo crear un objeto con la palabra 'new' a partir de una clase
*/
console.log("\n******************* Crea un objeto a partir de una clase con la palabra clave 'new'")

//Crea una clase
class StudentClass{
  // utiliza el constructor para crear la clase con los parámetros que recibe
  constructor (name, roll, course){
    this.name = name;
    this.roll = roll;
    this.course = course;
  }
}

// Crea un objeto con la palabra clave 'new'.
// Al utilizar 'new', nos quitamos la carga de tener que crear y devolver un objeto manualmente
const student5 = new StudentClass("Franklin", 1011, ['Flutter', 'Dart']);
const student6 = new StudentClass("Paola", 1011, ['JavaScript']);

console.log("student5.name = ",student5.name); // "Franklin"
console.log("student6.name = ",student6.name); // "Paola"
console.log("student5.course = ",student5.course); // ["Flutter", "Dart"]


class School {
  constructor(name,level, numberOfStudents){
  this._name = name;
  this._level = level;
  this._numberOfStudents = numberOfStudents;
};
get name() {
return this._name;
};
get level() {
  return this._level;
};
get numberOfStudents() {
  return this._numberOfStudents;
};
quickFacts() {
console.log(`This ${this._name} is the ${this._level} and it has ${this._numberOfStudents} students.`);
};
static pickSubstituteTeacher(substituteTeachers
  ) {
substituteTeachers = [''];
let randomNum = Math.floor(Math.random() * substituteTeachers.length);
return substituteTeachers[randomNum];
};
set numberOfStudents(value)  {
  this._numberOfStudents = value;
} 
};
class PrimarySchool extends School {
  constructor(name,level, numberOfStudents,pickupPolicy
    ){
    super(name,level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  };
  get pickupPolicy() {
    return this._pickupPolicy;
  }
};
class HighSchool extends School {
  constructor(name,level, numberOfStudents,sportsTeams){
    super(name,level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  };
};
class MiddleSchool extends School {
  constructor(name,level, numberOfStudents){
    super(name,level, numberOfStudents);
  }
};
const sierreNevada = new PrimarySchool("Sierre Nevada", "primary", 422 , "Students must be picked up by a parent, guardian, or a family member over the age of 15.");
sierreNevada.quickFacts();
console.log(sierreNevada);

 School.pickSubstituteTeacher(['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles']); 
School.pickSubstituteTeacher([]);
const elkhart = new HighSchool("Elkhart","high school", 515,['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey']
);
console.log(elkhart);
class SchoolCatalog {
constructor(){
this.myArray = [];
  };
addSchool(value){
this.myArray.push(value); 
};
};
let schoolCatalog = new SchoolCatalog();
schoolCatalog.addSchool(sierreNevada);
schoolCatalog.addSchool(elkhart);
//  schoolCatalog.addSchool();
schoolCatalog.addSchool(new MiddleSchool ('DevLadies',"middle", 106));
console.log(schoolCatalog);
var button = document.getElementById('submit_btn');
    let titleOfSchool = document.getElementById('titleOfSchool');
    let studentsNumber = document.getElementById('studentsNumber');
    let pickupPolicy = document.getElementById('pickupPolicy');
    let sportsTeams = document.getElementById('sportsTeams');
    let schoolOverview = document.getElementById('schoolOverview');
    
button.onclick = () => {
  let constructor = titleOfSchool.value === "High" ? High : titleOfSchool.value === "Middle" ? Middle : titleOfSchool.value === "Primary" ? Primary : "";
  let newAdd  = new constructor( titleOfSchool.value, studentsNumber.value, pickupPolicy.value, sportsTeams.value, schoolOverview.value);
  catalogLibrary.addSchool(newAdd);
   let result=[];
   catalogLibrary.schoolCatalog.forEach(elem => result.push(elem.title));
   console.log(catalogLibrary.schoolCatalog);
   return catalogLibrary.innerHTML = result.join(" <br> ");
};
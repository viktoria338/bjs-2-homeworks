
function Student(name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark)
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(...marks)
  } else {
    this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((sum, amount) => sum += amount) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks
  this.excluded = reason;
}
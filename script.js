// Function Constructor

/*
var john = {
    name: 'John',
    yearofBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearofBirth, job) {
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearofBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// practice protoypes with constructor

var Experience = function(time, songs, instrument) {
    this.time = time;
    this.songs = songs;
    this.instrument = instrument;
};

var Patrick = new Experience(12, 999, 'Electric Guitar');
var Luke = new Experience(1, 20, 'Classical Guitar');

Experience.prototype.avgSong = function() {
    console.log('Avg amount of songs learned per year is ' + 
    this.songs/this.time);
}

Patrick.avgSong();
Luke.avgSong();






class Animal {

    static type = 'Dog';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    voice () {
        console.log('I am animal');
    }
}

let animal = new Animal('Bobik', 6);

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    voice() {
        super.voice();
        console.log('I am cat')
    }

    get info () {
        console.log('test');
    }
    set info (test) {
        console.log(test + 'test');
    }
}
let cat = new Cat ('Murzik', 2, 'black')

get info () {
    return 'value';
}
set info (val) {
    return get info ()
}
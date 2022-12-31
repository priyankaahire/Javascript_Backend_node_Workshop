"use strict";
//~* class is the identity (Implementaion)
class Animal {
    eat() { console.log("champ! champ !!"); }
    sleep() { }
    procreate() { }
}
class Human extends Animal {
}
class Sanjay extends Human {
    writeCode() {
        console.log("print(Hello, world)");
    }
    playMusic() {
        console.log("sa ma, m g u....");
    }
}
class Brendan extends Human {
    passBEExam() {
        console.log("Graduate is CS");
    }
    writeCode() {
        console.log("Created Javascript");
    }
}
const devTeam = [new Sanjay(), /* new Human(), new Animal() */];
const orchestra = [new Sanjay(), /*new Brenden() */];
devTeam.forEach(dev => dev.writeCode());
orchestra.forEach(musician => musician.playMusic());

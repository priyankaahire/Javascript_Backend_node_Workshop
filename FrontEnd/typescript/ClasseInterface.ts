//~* class is the identity (Implementaion)

class Animal {
    eat() { console.log("champ! champ !!"); }
    sleep() {}
    procreate() {}
}

class Human extends Animal {
    //* Automatically *inherits* Animal features
}

//~? interface is CONTRACT, what we must achive, ourseleves
interface Engineer {
    passBEExam(): void //~! There is no implementation
}

interface Musician {
    playMusic(): void;
}

interface Developer {
    writeCode(): void;
}

class Sanjay extends Human implements Musician, Developer {
    writeCode(): void {
     console.log("print(Hello, world)")   
    }
    playMusic(): void {
        console.log("sa ma, m g u....")
    }

    //~* Sanajy is Human by birth...hence gets all feature any human has

}


class Brendan extends Human implements Engineer, Developer {
    passBEExam():void {
        console.log("Graduate is CS")
    }

    writeCode(): void {
        console.log("Created Javascript")
    }
}


const devTeam: Developer[] = [new Sanjay(), /* new Human(), new Animal() */]
const orchestra: Musician[] = [new Sanjay(), /*new Brenden() */]

devTeam.forEach(dev => dev.writeCode());
orchestra.forEach(musician => musician.playMusic())
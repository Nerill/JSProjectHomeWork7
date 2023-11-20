class Pokemon{

    #creature = 'Pokemon';

    constructor(name, type, defaultAttack){
        this.name = name;
        this.type = type;
        this.defaultAttack = defaultAttack;
    }

    attack(){ console.log(`${this.name} is attacking!`); }

    dodge(){ console.log(`${this.name} is dodging!`); }

    defende(){ console.log(`${this.name} defends.`) }

    getCreature(){ return this.#creature; }
}

class Bulbasaur extends Pokemon{

    #plant = true;

    constructor(){
        super('Bulbasaur', 'Grass', 'Tackle')
        this.evolvesFrom = "Beginning of evolution";
        this.evolvesInto = "Ivysaur";
    }

    isPlant(){return this.#plant;}

    elementalAttack(){
        console.log(`${this.name} makes a ${this.type}-type attack.`);
    }

    evolution(){
        console.log(`${this.name} evolves into ${this.evolvesInto}.`);
    }
}

class Charmander extends Pokemon{

    #color = 'Red';

    constructor(){
        super('Charmander', 'Fire', 'Scratch')
        this.evolvesFrom = "Beginning of evolution";
        this.evolvesInto = "Charmeleon";
    }

    getColor(){ return this.#color; } //спільний метод для Charmander, Charmeleon і Charizard.

    elementalAttack(){
        console.log(`${this.name} makes a ${this.type}-type attack.`);
    }

    evolution(){
        console.log(`${this.name} evolves into ${this.evolvesInto}.`);
    }
}

class Charmeleon extends Charmander{

    #height = `3' 07"`;

    constructor(){
        super();
        this.name = 'Charmeleon'
        this.evolvesFrom = "Charmander";
        this.evolvesInto = "Charizard";
        this.defaultAttack = "Dragon Breath";
    }

    getHeight(){ return this.#height; }

    evolutionFrom(){
        console.log(`${this.name} evolved from ${this.evolvesFrom}.`);
    }

    makeDefaultAttack(){
        console.log(`${this.name} make ${this.defaultAttack}.`);
    }
}

class Charizard extends Charmander{

    #subType = 'flying';

    constructor(){
        super();
        this.name = 'Charizard';
        this.evolvesFrom = "Charmeleon";
        this.evolvesInto = "Two Mega Evolutions Gigantamax";
        this.defaultAttack = "Ancient Power";
    }

    getSubType(){ return this.#subType; }

    evolutionFrom(){
        console.log(`${this.name} evolved from ${this.evolvesFrom}.`);
    }

    makeDefaultAttack(){
        console.log(`${this.name} make ${this.defaultAttack}.`);
    }
}

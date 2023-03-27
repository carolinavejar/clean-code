interface Bird {
    eat(): void;
}

interface RunningBird {
    run(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly()  { return 100 }
    public eat()  { }
}

class Humminbird  implements Bird, FlyingBird {
    public fly()  { return 200  }
    public eat()  { }
}

class Ostrich  implements Bird, RunningBird {
    public eat()  { }
    public run()  { }
}

class Penguin  implements Bird, SwimmerBird {
    public eat()  { }
    public swim() { }
}

function solve(arr) {
    class Cat{
        constructor(name, age){
            this.name = name
            this.age = age
        }

        meow(){
            console.log(`${this.name}, age ${this.age} Meow`);
        }
 
    }

    for (const cat of arr) {
        let name = cat.split(' ')[0];
        let age = cat.split(' ')[1];
        let currentCat = new Cat(name, age)
        currentCat.meow()
    }

}

solve(['Mellow 2', 'Tom 5']);
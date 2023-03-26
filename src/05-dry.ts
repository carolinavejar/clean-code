type Size = 'S'|'M'|'L'|'';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    toString() {
        if(this.name.length <= 0) throw new Error('name is empty')
        if(this.price <= 0) throw new Error('price is zero')
        if(this.size.length <= 0) throw new Error('size is empty')

        return `${this.name} (${this.price}) - (${this.size})`
    }

   
}
(() => {
    console.log("assdf");

    const bluePants = new Product()
    console.log(bluePants.toString);
    
})()
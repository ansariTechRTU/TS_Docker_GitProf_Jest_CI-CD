


const score: Array<number> = []
const names: Array<number> = []

function identityOne<Type>(val: Type): Type{
    return val

}





function getSearchProduct<Type>(product: Type[]): Type[] {
    console.log(product.length);
    return product;
}


interface Database {
    connection: string,
    username: string,
    password: string
}



function another<T, U extends Database>(val1: T , val2: U): object {
    return {
        val1,
        val2
    }
}





interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}


class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
const User = {
    name: "abd",
    email: "abd@gmail.com",
    isActive: true
}



function createUser(user: {name: string, isPaid: boolean}){}

createUser({name: "adam" , isPaid: false})

function createCourse():{name: string, id: number}{   //returning an obj
    return {name: "reactjs" , id: 7}
}


//type
type User = {
    readonly _id: string;  //readonly , so not editable
    name: string;
    email: string;
    isActive: boolean;

    linkedin?: string  //? , optional
}
function createUser2 (user: User){}




type cardNum = {
    cardNumber: number
}
type cardExpiry = {
    cardDate: string
}

type cardDetails= cardNum & cardExpiry & {
    cvv: number
}


export{}
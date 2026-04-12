
//const User: (string | number)[]= [1, "hc"]

let User: [string, number, boolean]

User= ["ab" , 45, true];   //sequence /order mattters



type User = [number, string]

const newUser: User = [111, "id@"]
newUser[1] = "id@@"
newUser.push(true) //not possible----before it was possible






//enum
const enum SeatChoice {
    AISLE,      //also we can start with value  -> AISLE = 10
    MIDDLE,
    WINDOW
}
const myseat = SeatChoice.MIDDLE









//interface
interface User2 {
    email: string,
    id: number,
    googleId?: string

    startTrail: () => string    //also startTrail(): string 
    getCoupon(couponName: string , value: number): number
}

interface User2 {     //this is allowed -> reopening of interface
    githubToken : string
}
interface Admin extends User2 {   //inheritance is also allowed
    role: string
}

const me: User2 = {email: "me@gmail.com" , id: 25,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "newCouper" , discount: 10) => {
        return 10
    },
    githubToken: "newToken"
}




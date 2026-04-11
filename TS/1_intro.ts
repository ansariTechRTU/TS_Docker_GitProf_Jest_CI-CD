// function addTwo(num){    //any type -problematic
//     return num+2
// }
// addTwo(5);



//fix
function addTwo(num : number){    
    return num+2
}
addTwo(5);


//also
function signUpUser (name: string, email: string, isPaid: boolean){
}
signUpUser("adam" , "adam@gmail.com" , true);


//wanna give default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("h" , "h@gmail.com");


//one more fix to addtwo func (adding return type should be only number)
function addTwoNew(num : number) : number{ 
    //return "hello"   //this was possible if we dont annotate the return value to be only number
    return num+2
}
addTwo(5);


//also TS automatically get aware of context --here it already knows its string, no need to tell
const heros = ["spidy" , "superman", "antman"];
heros.map((hero) : string =>{
    return `my fav hero is ${hero}`
})




//void to tell no return
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}












export{}
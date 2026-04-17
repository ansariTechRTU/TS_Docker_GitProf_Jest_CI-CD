
//type guard

function Login(id: number | null){
    if(!id){
        console.log("enter ur id plz");
        
    }
}





function printAll(strs: string | string[] | null){

    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }else if (typeof strs === "string"){
            console.log(strs);
            
        }
    }
}





interface User{
    name: string,
    email: string
}

interface admin{
    name: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}








function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
  } else {
    console.log(x.toUpperCase());
                
  }
}





type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish( pet: Fish | Bird ): pet is Fish{   //if not pet is fish -> then in next func still not confirmed  what it is
    return (pet as Fish).swim !== undefined
} 


function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"

    }else {
        pet 
        return "bird food"
    }
}









//Discriminatted Union

interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;


function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;

}


function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
                    
  }
}
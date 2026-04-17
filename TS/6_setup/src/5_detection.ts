
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







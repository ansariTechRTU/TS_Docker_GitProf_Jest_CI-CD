let score: number | string = 50;

score = 75;
score = "A"; //allowed string as mentioned above

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let abd: User | Admin = { name: "a", id: 70 };
abd = { username: "a@admin", id: 70 }; //allowed

//function getId(id: number | string){}

// BUT it will not wrk if we want to perform some opearation for ex

function getId(id: number | string) {
  // id.toLowerCase(0);  // not allowed but
  if (typeof id === "string") {
    id.toLowerCase(); //allowed
  }else if(typeof id === "number"){
     id= id+6
  }
}



//for array
const data: (number | string) [] = [1,2,4,5,"3"];
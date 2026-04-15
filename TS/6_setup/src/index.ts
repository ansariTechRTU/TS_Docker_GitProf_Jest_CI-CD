class User {
     
    // private course_count =1
    protected course_count =1

    public email: string
    name: string
    private readonly city: string = ''        //private -means u can access within obj only
    constructor(email: string , name: string){
        this.email = email,
        this.name=name
    }

    get getAppleEmail(): string{    //getter
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this.course_count

    }

    set courseCount(courseNum) {     //setter
       if(courseNum<=1){
        throw new Error("course count should be more than one")
       }
       this.course_count = courseNum
    }




}

class SubUser extends User {    //but here private things from User can not be accessed
          
    isFamily: boolean = true

    changeCourseCount(){
        this.course_count =4      //private initially  but with "protected" it will be accessible within class & their extended ones
    }
}





const myself = new User("me@mail.com" , "ansari")
console.log(myself)

// myself.city="Riga"
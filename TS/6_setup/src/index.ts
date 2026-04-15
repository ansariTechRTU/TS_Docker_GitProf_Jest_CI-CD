class User {
     
    private course_count =1

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
const myself = new User("me@mail.com" , "ansari")
console.log(myself)

// myself.city="Riga"
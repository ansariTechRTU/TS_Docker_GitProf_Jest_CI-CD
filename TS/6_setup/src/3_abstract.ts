abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
}

const sample = new TakePhoto("test" , "test")   //no new class can be created when abstract



class Insta extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("jcnjn")
    }

}
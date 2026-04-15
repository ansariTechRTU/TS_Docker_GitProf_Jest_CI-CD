interface TakePhoto  {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}
class Instagram implements TakePhoto {        //interface say must have things, if we dont include any of it it gives error
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){

    }
}

class Youtube implements TakePhoto, Story {
     constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}

    createStory(): void {
        console.log("story created")
    }
}


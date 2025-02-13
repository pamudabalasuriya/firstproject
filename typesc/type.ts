let x:number = 3;
x = 4;

let markArray: Array<Number> = [1,2,3];
markArray.push("scdas")


class Student {
    id: number;
    name: string;
    
    constructor(id: number, name: string){

    }
    
};

let student1:Student = new Student(1,"qwesd")
let student2:Student = new Student("1", "qwers");



interface server {
    noOfCPUs: number
    memoryInGB: number
    harddiskspaceInGB: number
}

interface server {
    hostName: string
}


let server1:server = {
    noOfCPUs : 8,
    memoryInGB : 16,
    harddiskspaceInGB : 500,
    hostName : "Pamuda"
}
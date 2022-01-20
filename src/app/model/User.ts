export class User {
    email: string = "";
    profilePhotoUrl: string = "";
    id: string = "";
    name: string = "";

    constructor(email:string, name: string) {
        this.email = email;
        this.name = name;
    }
}
"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class User {
    email;
    name;
    city = '';
    constructor(email, name) {
        this.email = email,
            this.name = name;
    }
}
const myself = new User("me@mail.com", "ansari");
console.log(myself);
myself.city = "Riga";
//# sourceMappingURL=index.js.map
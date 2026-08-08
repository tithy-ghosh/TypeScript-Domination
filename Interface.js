"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Using interface to define object shapes
function getDataofUser(obj) {
    obj.name,
        obj.email,
        obj.password,
        obj.gender;
    obj.phoneNumber; //Two interfaces in the same name have been merged
}
getDataofUser({
    name: 'Tithy', //Name will take the value which are string
    email: 'sgt.tithy.717@gmail.com',
    password: '12121',
    phoneNumber: 19203293
});
//getDataofUser() // This will show error as User type parameter should be passed
function getDataofAdmin(obj) {
    obj.email,
        obj.admin;
} //It will have all the value of user but it will have extra property named admin which is defined in the admin interface
//# sourceMappingURL=Interface.js.map
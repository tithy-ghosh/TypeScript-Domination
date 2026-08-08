/**
 * Interfaces: Primarily used to defined the ‘shape’ or structure of an object (e.g., names and types of its properties)
 */
// Defining Interface
interface User {
    name: string,
    email: string,
    password: string,
    gender?: string, //It can be passed or not. The code will work smothly without it being passed.Its optional
}
interface User {
    phoneNumber: number,
}
//Extending interface
interface Admin extends User{
    admin: boolean
}

//Using interface to define object shapes
function getDataofUser (obj: User){
    obj.name,
    obj.email,
    obj.password,
    obj.gender
    obj.phoneNumber //Two interfaces in the same name have been merged
}

getDataofUser({
    name:'Tithy' ,//Name will take the value which are string
    email: 'sgt.tithy.717@gmail.com',
    password: '12121',
    phoneNumber: 19203293
})

//getDataofUser() // This will show error as User type parameter should be passed

function getDataofAdmin(obj: Admin){
    obj.email,
    obj.admin
} //It will have all the value of user but it will have extra property named admin which is defined in the admin interface
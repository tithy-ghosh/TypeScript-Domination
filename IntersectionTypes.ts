let a:string |null //Its basically union

/**
 * Intersection Types: Using the ampersand (&) to combine multiple types into one.
 */

type User = {
    name: string,
    email: string,
}

type Admin = User & {
    getDetails(user: string): void
}

function abcd(a: Admin){
    a.email
    a.getDetails
}
//type Admin = string ; this  will show error. as type aliases has been declared in the same name
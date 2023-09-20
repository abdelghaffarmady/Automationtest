import  {faker} from "@faker-js/faker";

class UserApi{

static Register(){
   return cy.request({
        url:"/api/v1/users/register",
        method:"Post",
        body:{
            firstName:faker.name.firstName(),
            lastName:faker.name.lastName(),
            email:faker.internet.email(),
            password:"Soforx@123"
        },
    })
}
}
export default UserApi

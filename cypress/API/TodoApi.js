import  {faker} from "@faker-js/faker";

class TodoApi{
   static Add(token){
        return  cy.request({
            url:"/api/v1/tasks",
            method:"Post",
            auth:{
                bearer: token
            },
            body:{
                isCompleted: false,
                item:"Learn Cypress",
            },     
    })
    }

}
export default TodoApi
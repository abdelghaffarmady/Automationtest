/// <reference types="cypress"/>
import  {faker} from "@faker-js/faker";
import UserApi from "../API/UserApi";
import TodoApi from "../API/TodoApi";
import TodoPage from "../Pages/TodoPage";
import NewToDo from "../Pages/NewToDo";

describe("todo test cases",()=>{
    let token;
    beforeEach(()=>{
       UserApi.Register().then(Response =>{
            token= Response.body.access_token
        })
    })
    it("Should be able to add ",()=>{
        new TodoPage()
        .Load()
        .ClickOnAddBtn()
        .AddNewItem("Learn Cypress")
        .FirstItemShouldHaveText("Learn Cypress")
    })

    it("Should be able to Mark todo as complete",()=>{ 
    TodoApi.Add(token)
    new TodoPage()
    .Load()
    .ClickOnComplete()
    //.CompleteShouldHaveColor("rgb(33, 76, 97)")
    })
})



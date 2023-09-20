/// <reference types="cypress"/>

import LoginPage from "../Pages/LoginPage"
import TodoPage from "../Pages/TodoPage"

it("Should be able to login",()=>{
     new LoginPage()  
     .Load()
     .Login("abdelghaffarmady@gmail.com","Soforx@123")
     .WelcomeMessageShouldBeVisiable()
})
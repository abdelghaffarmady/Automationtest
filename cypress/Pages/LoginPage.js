import TodoPage from "./TodoPage"
class LoginPage{
    // Get elements or locators
    get emailInput(){ 
        return   cy.get('[data-testid="email"]')
    }

    get passwordInput(){
        return cy.get('[data-testid="password"]')
    }
    get SubmittBtn(){
        return  cy.get('[data-testid="submit"]')
    }

    //Methods
    Load(){
        cy.visit("/")
        return this
    }
    Login(email,password){
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.SubmittBtn.click()
        return new TodoPage()
    }


}
export default LoginPage
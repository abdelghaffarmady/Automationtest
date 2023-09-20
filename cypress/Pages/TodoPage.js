import NewToDo from "./NewToDo"
class TodoPage{

    get WelcomeMessage(){
        return cy.get('[data-testid="welcome"')
    }

    get AddBtn(){
        return         cy.get('[data-testid="add"]')
    }
    get FirstToDo(){
        return cy.get('[data-testid="todo-item"]').eq(0)
    }
    get FirstElement(){
        return cy.get('[data-testid="complete-task"]').eq(0)
    }
    //Methods
    Load(){
        cy.visit("/todo")
        return this
    }
    ClickOnAddBtn(){
        this.AddBtn.click() 
        return new NewToDo()
    }
    WelcomeMessageShouldBeVisiable()
    {
        this.WelcomeMessage.should("be.visible")
        return this
    }
    FirstItemShouldHaveText(text){
        this.FirstToDo.should('have.text',text)
        return this

    }
    ClickOnComplete()
    {
        this.FirstElement.click()
        return this
    }
    CompleteShouldHaveColor(color){
        this.FirstElement.should("have.css","background-color", color)
        return this

    }
  
}
export default TodoPage
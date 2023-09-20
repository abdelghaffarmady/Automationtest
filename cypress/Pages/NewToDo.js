import TodoPage from "./TodoPage"

class NewToDo{
    //Gets

    get newtodoInput(){
        return cy.get('[data-testid="new-todo"]')
    }
    get submitnewTaskBtn(){
        return cy.get('[data-testid="submit-newTask"]')
    }
  

    //Methods
    Load()
    {
        cy.visit("/todo/new")
    }
    AddNewItem(item)
    {
        this.newtodoInput.type(item)
        this.submitnewTaskBtn.click()
        return new TodoPage()
    }

}
export default NewToDo
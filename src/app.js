import Budget from "./models/Budget";
import View from "./View";
import {q,} from "./helper";




class Application {
    constructor() {
        this.budget = new Budget();
    }

    init() {
        View.displayBudget();
        this.setupEventListeners();
    }

    setupEventListeners() {
        q("#btn-submit").addEventListener("click", () => {
            this.addItem();

        });
        q("#btn-reset").addEventListener("click", () => {
            this.budget = new Budget();
            View.reset();

        });
        q(".header-budget").addEventListener("click", () => {
            //Category.renderCategory(this.budget.incomes, htmlElements.categoryChose.value);
            console.log(this.budget);
        });

        q(".statistics").addEventListener("click", () => {
            if (event.target.id === "delete") {
                this.deleteItem();
            }
        });
    }

    deleteItem() {
        this.budget.myDeleteItem(this.budget, +event.target.parentElement.parentElement.getAttribute("data-id"));
        this.budget.calculateBudget();
        View.displayBudget(this.budget);
        (event.target.parentElement).parentElement.remove();
    }

    addItem() {
        // get data from inputs
        const inputData = View.getInputData();
        const isValid = this.validateUserData(inputData);
        if (isValid) {
            const {type, category, description, value} = inputData;
            // const type = inputData.type;   const category = inputData.category  const description ....
            console.log(inputData);
            const item = this.budget.addItem(type, category, description, value);
            View.addListItem(item, type, category);
            View.clearInputs();
            View.displayBudget({
                totalExpenses: this.budget.totalExpenses,
                totalIncomes: this.budget.totalIncomes,
                total: this.budget.total,
                BudgetPrecent: this.budget.BudgetPrecent
            });
            View.changeColor(this.budget)
        }
    }

    validateUserData(data) {
        let reg = /[0-9]/g;
        return !(data.description === "" || data.value === ""
            || !(data.value.match(reg)) || data.length > 20
        );
    }
}

const app = new Application();
export default app;

//пройти for in , object.keys(dataObj). forEach(()=>{
// if (type of key === "obj"){
// function deeepClone(dataObj[obj])
// }
// записать ключ
// })
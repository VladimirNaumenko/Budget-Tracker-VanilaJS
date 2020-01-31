import Item from "./Item";
import {calculateMoney, myCalculateId} from "../helper";


class Budget {
    constructor() {
        this.itemsContainer = [];
        this.totalExpenses = 0;
        this.totalIncomes = 0;
        this.BudgetPrecent = 0;
        this.total = 0;
    }

    addItem(...args) {
        const [type, category, description, value] = [...args]
        let item = new Item(myCalculateId(), type, category, description, value);
        this.itemsContainer.push(item);
        this.calculateBudget();
        return item;
    }

    // тут можно сделать лучше черезе forEach (наверно)
    myDeleteItem(budget, id) {
        budget.itemsContainer = budget.itemsContainer.filter(el=> el.id !== id)
    }

    showBudget(budget) {
        console.log(budget);
    }

    calculateMoney(arr, type) {
        const arrayByType = arr.filter(function (item) {
            return item.type === type;
        });
        return arrayByType.reduce((sum, item) => sum + item.value, 0);
    }

    calculateBudgetPrecent(totalIncomes, totalExpenses) {
        return totalIncomes>totalExpenses? Math.floor(totalExpenses/totalIncomes*100):
            Math.floor( (totalExpenses/100) * (totalIncomes / 100));

    }

    calculateBudget() {
        this.totalExpenses = calculateMoney(this.itemsContainer, "exp");
        this.totalIncomes = calculateMoney(this.itemsContainer, "inc");
        this.total = this.totalIncomes - this.totalExpenses;
        this.BudgetPrecent = this.calculateBudgetPrecent(this.totalIncomes,this.totalExpenses);
    }

    getBudget() {
        return {
            total: this.total,
            totalExpenses: this.totalExpenses,
            totalIncomes: this.totalIncomes,
        };
    }

    reset() {

        this.itemsContainer = null;
        this.totalExpenses = 0;
        this.totalIncomes = 0;
        this.BudgetPrecent = 0;
        this.total = 0;
    }
}

export default Budget;
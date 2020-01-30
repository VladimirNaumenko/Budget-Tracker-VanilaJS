import {q} from "./helper";

q("statistics");
export const htmlElements = {
    typeSelector: document.querySelector("#selector"),
    categorySelect: document.querySelector("#category"),
    categoryBox: document.querySelector("#categories-list"),
    categoryChose: document.querySelector("#category-chose"),
    description: document.querySelector("#input-description"),
    inputValue: document.querySelector("#input-value"),
    submitBtn: document.querySelector("#btn-submit"),
    dltBtn: document.querySelector("#btn-delete"),
    incomesBox: document.querySelector("#incomes-list"),
    expensesBox: document.querySelector("#expenses-list"),
    budgetBox: document.querySelector(".header-budget"),
    incomeLabel: document.querySelector(".budget-block--income .budget-block-value"),
    expensesLabel: document.querySelector(".budget-block--expense .budget-block-value"),
        precent: document.querySelector(".budget-block-precent")
};

class View {
    static getInputData() {
        return {
            type: htmlElements.typeSelector.value,
            category: htmlElements.categorySelect.value,
            description: htmlElements.description.value,
            value: htmlElements.inputValue.value
        };
    }

    static addListItem(item, type) {
        const html = item.render();
        if (type === "inc") {
            htmlElements.incomesBox.insertAdjacentHTML("beforeend", html);
        } else if (type === "exp") {
            htmlElements.expensesBox.insertAdjacentHTML("beforeend", html);
        }
    }

    static demo(html) {
        htmlElements.incomesBox.insertAdjacentHTML("beforeend", html)
    }

    static displayCategories(budget, category) {
        return budget.filter(item => item.category === category);
    }

    static displayBudget(data = {}) {
        const {totalExpenses = 0, totalIncomes = 0, total = 0, BudgetPrecent=0} = data;
        htmlElements.incomeLabel.innerHTML = totalIncomes;
        htmlElements.expensesLabel.innerHTML = totalExpenses;
        htmlElements.budgetBox.innerHTML = total;
        htmlElements.precent.innerHTML = BudgetPrecent;
    }

static changeColor(budget){
        if (budget.total>0){
            console.log("color")
            htmlElements.budgetBox.classList.add("total");
        }
}
    static clearInputs() {
        htmlElements.description.value = "";
        htmlElements.inputValue.value = "";
    }

    static reset() {
        htmlElements.budgetBox.innerHTML = 0;
        htmlElements.incomeLabel.innerHTML = 0;
        htmlElements.expensesLabel.innerHTML = 0;
        while (htmlElements.incomesBox.firstChild) {
            htmlElements.incomesBox.removeChild(htmlElements.incomesBox.firstChild);
        }
        while (htmlElements.expensesBox.firstChild) {
            htmlElements.expensesBox.removeChild(htmlElements.expensesBox.firstChild);
        }
        while (htmlElements.categoryBox.firstChild) {
            htmlElements.categoryBox.firstChild.removeChild(htmlElements.categoryBox.firstChild);
        }
    }
}

export default View;


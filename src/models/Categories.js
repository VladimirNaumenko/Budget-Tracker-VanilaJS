import {htmlElements} from "../View";

class Category {
    static renderCategory(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
            let item = array[i];
            htmlElements.categoryBox.insertAdjacentHTML("beforeend",
                `     
      <li class="income-item" data-type='inc' data-id='${item.id}'>
        <span class="span-description">${item.description}</span>
        <div>
          <span class="span-value">${item.value}</span>
          <button class="btn btn-delete" id="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/></svg>
          </button>
        </div>
      </li>`);
        }
    }
}

export default Category;
export const calculateId = (array) => array.length + 1;
let i = -1;
export const myCalculateId = () => {
    i++;
    return i;
};

export function q(selector) {
    return document.querySelector(selector);
}

export const calculateMoney = (arr, type) => {
    const arrayByType = arr.filter(function (item) {
        return item.type === type;
    });
    return arrayByType.reduce((sum, item) => sum + item.value, 0);

};

export const showDate = (currentDate) => {
    const date = currentDate.getDate()
    const day = currentDate.getDay()
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let hours = currentDate.getHours();
    const addO = value => value<10? `0${value}`: value;
    return {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        date: addO(date),
        day: addO(day),
        hours: addO(hours),
        minutes: addO(minutes),
        seconds: addO(seconds),
    };

};
export const categoryColors = (category) => {
    console.log(category);
    if (category === "food") {
        return "orange";
    }
    if (category === "salary") {
        return "green";
    }
    if (category === "freelance") {
        return "blue";
    }
    if (category === "gift") {
        return "pink";
    }
    if (category === "") {
        return "grey";
    }
};


export function demoRender() {
    return `
<div id="stat-content" class="statistics-content">
    <div class="statistics-box">
    <h2 class="statistics-header statistics-header--income">Income:</h2>
<ul id="incomes-list" class="statistics-list">

    <li class="income-item" data-type="inc" data-id="0">
    <span class="span-description">Salary</span>
    <span class="span-description">19</span>
    <span class="span-description">food</span>
    <div>
    <span class="span-value">1500</span>
    <button class="btn btn-delete" id="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
</button>
</div>
<span class="span-time">EXTERNAL_FRAGMENT</span>
    </li>

    <li class="income-item" data-type="inc" data-id="3">
    <span class="span-description">freelanc</span>
    <span class="span-description">19</span>
    <span class="span-description">food</span>
    <div>
    <span class="span-value">800</span>
    <button class="btn btn-delete" id="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
</button>
</div>
<span class="span-time">EXTERNAL_FRAGMENT</span>
    </li>
    </ul>
    </div>
    <div class="statistics-box">
    <h2 class="statistics-header statistics-header--expense">Expenses:</h2>
<ul id="expenses-list" class="statistics-list">
    <li class="income-item" data-type="inc" data-id="1">
    <span class="span-description">bananas</span>
    <span class="span-description">19</span>
    <span class="span-description">food</span>
    <div>
    <span class="span-value">40</span>
    <button class="btn btn-delete" id="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
</button>
</div>
<span class="span-time">EXTERNAL_FRAGMENT</span>
    </li>


    </ul>
    </div>
    <div class="statistics-box">
    <div class="categories-header">
    <h2 class="statistics-header statistics-header--expense">Categories</h2>
    <select id="category-chose" class="dropdown statistics-header">
    <option value="food">Food</option>
    <option value="transport">Transport</option>
    </select>
    </div>
    <ul id="categories-list" class="statistics-list"></ul>
    </div>
    </div>
    `;
}

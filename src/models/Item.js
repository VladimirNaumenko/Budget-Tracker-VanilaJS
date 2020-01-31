import {showDate, categoryColors} from "../helper";

//import Date from "../helper";

class Item {
    constructor(...args) {
        const [id, type, category, description, value] = [...args]
        this.id = id;
        this.type = type;
        this.category = category;
        this.description = description;
        this.value = Number(value);
        this.time = showDate(new Date);
    }

    render() {
        return `
      <li class="income-item" data-type='inc' data-id='${this.id}'
       style='border-bottom-color:  ${categoryColors(this.category)}'>
      <div class="item-details">
        <span class="">${this.description}</span>
        <div>
          <span class="">${this.value}</span>
        </div>
       
          <button class="btn-delete"  id="delete">

          </button>
           </div>
                  <div class="time-container">
                  <span class="span-description">${this.category}</span>
        <span class ="span-time">${this.time.date}.${this.time.month}.${this.time.year.toString().slice(2, 5)} 
        <span class ="span-time"> ${this.time.hours}:${this.time.minutes}:${this.time.seconds}</span>
        </div>
      </li>
    `;
    }
}

export default Item;
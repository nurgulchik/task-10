// task-1
class Restaurant {
    constructor(name, cuisineType, served = 0) {
        this.name = name;
        this.cuisineType = cuisineType;
        this.served = served;
    }

    showInfo() {
       return`Restaurant: ${this.name} <br> Cuisine type: ${this.cuisineType} `;
    }
    
    

    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();

        if (currentDay === 6 || currentDay === 0) {
            return `${this.name} is closed`
        } else {
            if (currentHour > 9 && currentHour < 22) {
                return `${this.name} is open`;
            } else {
                return `${this.name} is closed`;
            }

        }  
    }

    serve() {
        return `${this.served += 1}`
    };

    setServed() {
        return Math.floor(num);
    }

    showTotalServed () {
        return Math.floor(num + (this.serve() - 1))
    }
}


const asman = new Restaurant("Asman", "kyrgyz");
const num = 12


document.write(asman.showInfo() + '<br>');
document.write(asman.isOpen() + '<br>');
document.write('Количество посетителей:' + ' ' + asman.serve() 
+ '<br>');
document.write('Общее число посетителей:' + ' ' + asman.showTotalServed() + '<hr>'
);

// task-2
class Cars {
    constructor(model, year, capacity, color) {
        this.model = model;
        this.year = year;
        this.capacity = capacity;
        this.color = color;
    }
    showCar() {
        document.write(`Марка авто: ${this.model} <br> Год выпуска: ${this.year} <br> Мощность двигателя: ${this.capacity} <br> Цвет машины: ${this.color}<br>`)
    }
}

class ElectroCars extends Cars {
    constructor(model, year, capacity, color, batteryvolume) {
        super (model, year, capacity, color);
        this.batteryvolume = batteryvolume;
    }

    showCar(){
        super.showCar();
        document.write(`Объем аккумулятора: ${this.batteryvolume} <br>`)
    }
    promote() {
        document.write (`Срочно продается: ${this.model}`)
    }

}
const car = new Cars ("Honda", 2020, 2500, "white",  );

const elcar = new ElectroCars ("Hyunday", 2021, 2000, "black", "175mm" );
car.showCar();
elcar.showCar();
elcar.promote();
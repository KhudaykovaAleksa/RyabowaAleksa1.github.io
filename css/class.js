// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.hello = () => {
//         alert(`Привет. Меня зовут - ${this.name}`);
//     }
// }

// let user1 = new User('Иван', '12345');
// let user2 = new User('Алексей', '68367');

// console.log(user2);

// User.prototype.bye = function() {
//     alert(`${this.name} - Пока!`);
// };

// let user3 = new User('Олег', '85743');

// user1.bye();


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return (this.width + this.height) * 2;
    }
}

let width = 300;
let height = 100;
let color = "f0f00f";

let rect1 = new Rectangle(width, height);
console.log(`Площадь прямоугольника с шириной ${rect1.width} и высотой ${rect1.height} равна ${rect1.calcArea()}. А периметр - ${rect1.calcPerimeter()}`);


class ColoredRectangle extends Rectangle {
    constructor(width, height, bgColor, text) {
        super(width, height);
        this.bgColor = bgColor;
        this.text = text;
    }

    showProperties() {
        alert(`
               Ширина: ${this.width}\n
               Высота: ${this.height}\n
               Текст: ${this.text}`)
    }

    createDiv() {
        let div = document.createElement('div');

        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.textContent = this.text;
        div.style.backgroundColor = '#'+ this.bgColor;
        
        div.style.filter = `hue-rotate(180deg)`;

        return div;
    }
}

let coloredRect1 = new ColoredRectangle(width, height, color, "Привет!")
document.body.prepend(coloredRect1.createDiv());

coloredRect1.showProperties();
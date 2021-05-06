// 1) Создайте объект прямоугольника со свойствами: координаты левого верхнего угла, высота и ширина.
// 2) Создайте функцию, которая примет в качестве параметр объект, и выведет в консоль все свойства объекта и их значения.
// 3) Используйте эту функцию для созданного в 1-м пункте объекта.
// 4) Измените значения всех свойств объекта из 1-го пункта.
// 5) Используйте ещё раз функцию, созданную во 2-м пункте.

// создаем объект
let point = {
  x: 0,
  h: 100,
  w: 150
}
console.log('1. Создан объект point', point)

let point1 = {}; // создаем пустой объект

// объявляем функцию перебераем и копируем объект
function obj(object, target) {
  console.log('2. Функция переберает и копирует объект по необходимости')
  for (let key in object) {
    console.log(`${key} - ` + object[key]);
    if (target) {
      target[key] = object[key];
    }

  }
}
obj(point, point1) //Вызываем функцию

// изменяем значения оъекта point
point.x = 35;
point.h = 45;
point.w = 65;

console.log('3. Выводим измененый point', point);

console.log('4. Выводим point1', point1)

obj(point, ) // еще раз вызываем функцию, объект уже изменен.

// есть встроенный метод

let point2 = {}; // Создаем пустой объект

Object.assign(point2, point);

console.log('5. Выводим новый объект копия point', point2);
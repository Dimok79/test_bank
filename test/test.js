var user1 = new Waiter(1,'1234', 'Петров');
var list_dish = []; // Список блюд
    list_dish.push(new Dish(false, 'Пельмени', 'Горячие пельмени'));
    list_dish.push(new Dish(false, 'Плов', 'Плов с мясом'));
    list_dish.push(new Dish(false, 'Суп Харче', 'Суп с крастным перцем'));
    list_dish.push(new Dish(false, 'Суп Солянка', 'Суп с копченой колбаской'));
    list_dish.push(new Dish(false, 'Чай', 'Горячий цай на выбор'));
    
    list_dish[5] = (new Dish(true, 'Сахар', ''));
    list_dish[6] = (new Dish(true, 'Соль', ''));
    list_dish[7] = (new Dish(true, 'Перец', ''));
    list_dish[8] = (new Dish(true, 'Песок', ''));

var v_order = new Order(user1); 

// QUnit.module('Тест оффициантов');

QUnit.test( "Тест оффициантов", function( assert ) {
  assert.ok(user1.AccessPW('1234') == true, "Проверка пароля!" );
  assert.equal(user1.GetFio('Петров'), 'Петров', "Получение ФИО!" );
});

QUnit.test( "Тест Заказа", function( assert ) {
//  console.log('v_order.Get_max_count_dish = ',v_order.Get_max_count_dish()); 
    for (var i = 0; i < v_order.Get_max_count_dish()-1; i++) {
        v_order.add(list_dish[i]);
    }
  assert.ok(v_order.add(list_dish[i++]) == true, "Блюдо - Максимальное количество!" );
  assert.ok(v_order.add(list_dish[i++]) == false, "Блюдо -Количество больше!" );
  assert.ok(v_order.add(list_dish[5]) == false, "Блюдо - Добавление приправы!" );
//   console.log('list_dish.length = ',v_order.Get_list_dish()); 
});

QUnit.test( "Тест Приправ на Блюдо", function( assert ) {
    list_dish[1].add_Sause(list_dish[5]);
    list_dish[1].add_Sause(list_dish[6]);

  assert.ok(list_dish[1].add_Sause(list_dish[7]) == true, "Приправа - Максимальное количество!" );
  assert.ok(list_dish[1].add_Sause(list_dish[8]) == false, "Приправа -Количество больше!" );
//   console.log('list_dish[1] = ',list_dish[1].Get_list_sause()); 
});

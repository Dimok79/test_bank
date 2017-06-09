
/*
 * 
 */
var list_users = []; // Список пользователей
var user = []; // Активный пользователь
var list_dish = []; // Список блюд
var v_order = {}; // Заказ


var on_enter = function(){
    user = []; // Активный пользователь
    console.log('Enter PW=', $("#in_pw").val());    
    list_users.forEach(function(item, i, arr) {
        console.log('user=',item);    
        if (item.AccessPW($("#in_pw").val())){
            user = item;    
            $("#btn_enter").hide();
            $("#in_pw").hide();
            $("#btn_exit").show();
            $("#id_hell").slideUp();
            $("#id_list").slideDown();
            v_order = new Order(user); // Создание заказа
            
            v_order.add(list_dish[0]);
            v_order.add(list_dish[1]);
            v_order.add(list_dish[2]);
            v_order.add(list_dish[3]);
    console.log('v_order=',v_order);    
        }
    });
    console.log('user=',user);    
}

var on_exit = function(){
    user = []; // Активный пользователь
    $("#in_pw").val('');
    $("#btn_exit").hide();
    $("#btn_enter").show();
    $("#in_pw").show();
    $("#id_list").slideUp();
    $("#id_hell").slideDown();
    console.log('Exit!');    
}

var out_list_dish = function(){
    list_dish.forEach(function(item, i, arr) {    
        
    });
};


var add_dish = function(p_id){
    v_order.add(list_dish[p_id]);
    console.log('add_dish!');    
}

var test = function(ttt){
    console.log('test=',ttt);    
    
}


$(document).ready(function() {
    list_users.push(new Waiter(1,'1111', 'Петров'));
    list_users.push(new Waiter(1,'2222', 'Иванов'));
    list_dish.push(new Dish(false, 'Пельмени', 'Горячие пельмени'));
    list_dish.push(new Dish(false, 'Плов', 'Плов с мясом'));
    list_dish.push(new Dish(false, 'Суп Харче', 'Суп с крастным перцем'));
    list_dish.push(new Dish(false, 'Суп Солянка', 'Суп с копченой колбаской'));
    list_dish.push(new Dish(false, 'Чай', 'Горячий цай на выбор'));
    list_dish[5] = (new Dish(true, 'Сахар', ''));
    list_dish[6] = (new Dish(true, 'Соль', ''));
    list_dish[7] = (new Dish(true, 'Перец', ''));
    list_dish[8] = (new Dish(true, 'Песок', ''));
    
    on_exit();
    $("#id_list").hide();
    
    console.log('list_users=',list_users);    
    
    console.log('Load!');    
    
});

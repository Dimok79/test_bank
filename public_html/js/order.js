
/*
 * 
 */
var Order = function (p_user) {
    var max_count = 3;  // Максимальное количество блюд DISH
    var list_dish = []; // Список блюд
    this.user = p_user; // Оффициант
    
    this.Get_max_count_dish = function(){  // Получить максимальное количество блюд
        return max_count;
    }
    this.Get_list_dish = function(){       // Получить список блюд
        return list_dish;
    }
    
    this.add = function(p_dish){ // Добавление блюда
        var f = false;
        f = (list_dish.length < max_count);
        if (f == true){
            f = (p_dish.type_sause != true); // Проверка на добавление именно Блюда а не приправы
        }    
        
        if (f == true){
            list_dish.push(p_dish);
        }
        return f;
    }
};



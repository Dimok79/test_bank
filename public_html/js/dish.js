
var Dish = function (p_sause, p_name, p_desc) {
    var max_count_sause = 3; // максимальное количество приправ
    var list_sause = []; // Список периправ
    
    this.type_sause = p_sause; // тип приправа
    this.name = p_name; // Наименование
    this.desc = p_desc; // Описание
    
    this.Get_max_count_sause = function(){
        return max_count_sause;
    }
    this.Get_list_sause = function(){  // Получить список приправ
        return list_sause;
    }
    
    this.add_Sause = function(p_dish){  // Добавить приправу
        var f = false;
        f = (list_sause.length < max_count_sause);
        if (f == true){
            list_sause.push(p_dish);
        }
        return f;
    }
    
};


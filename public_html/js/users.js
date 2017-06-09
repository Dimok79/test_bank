/*
 * Прототип порльзователей (оффицианты)
 * @param {type} tp  - тип официанта
 * @param {type} pw  - пароль
 * @param {type} fio - ФИО
 * @returns {Waiter} - пользователи
 */
var Waiter = function (p_tp, p_pw, p_fio) {
    // Свойства пользоватля только локально, поулчение свойст только через  функции GET.
    var tp = p_tp;  // Тип официанта
    var pw = p_pw;  //Пароль
    var fio = p_fio; //ФИО  
    
    this.GetFio = function(){ // Получить ФИО
        return fio;
    };    
    
    this.AccessPW = function(newpw){ // Проверка на пароль
        var f = false;
        f = (pw == newpw);
        return f;
    }
};

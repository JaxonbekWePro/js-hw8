function question(id){
    let id_card = +prompt('Напишите свой ID и ID не должно превышать 8 букв или символов')
    if(id_card.length >= 8){
        return id_card
    } else{
        return'Не должно превышать 8 букв или символов'
    }
}
    question(id)
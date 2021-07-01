const pickFromArray = function(array){
    let length = array.length;
    let rand = Math.floor( Math.random() * length );
    return array[rand]
}

module.exports = {
    pickFromArray
}
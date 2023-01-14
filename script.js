let input = document.getElementById("input")

function store(){
    var storage = input.value;

    const cookievalue = storage + ";";
    document.cookie = "name: " + cookievalue;
}
 array = [];
function submit(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;

    array.push(name1);
    array.push(name2);
    array.push(name3);
    array.push(name4);
    console.log(array);
    document.getElementById("Meow").innerHTML=array;
    document.getElementById("Next").style.display= "none";
    document.getElementById("sort").style.display= "inline-block";
}
function sort(){
    array.sort();
    console.log(array);
    document.getElementById("Meow").innerHTML=array;
}
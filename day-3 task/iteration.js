
var json = [{
    "id" : "1", 
    "name"  : "jagathish",
    "mobilenumber" : "9080454718",
    "mail": "jagathishveerappan@gmail.com"
},
{
    "id" : "2", 
    "name"  : "ananth",
    "mobilenumber" : "9876543210",
    "mail": "ananth@gmail.com"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.mobilenumber);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.name); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].name);
 
}
}
//for Of
var text = "";
for (var i of json[key].id) {
 text += i; 
}
 console.log(text);
 
 



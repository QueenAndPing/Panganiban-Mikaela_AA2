var i = 1;
while(i < 52){
    document.getElementById("demo").innerHTML += i + " ";
    i+=2;   
}

var x = 2;
do{
    document.getElementById("demo-two").innerHTML += x + " ";
    x+=2;
}
while(x < 51);

for(y = 1; y < 4097; y+=y){
    document.getElementById("demo-three").innerHTML += y + " ";
}
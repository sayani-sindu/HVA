colors = ["red", "green", "blue"];
console.log(colors[0]);

colors[1] = "yellow";
colors.push("black")
console.log(colors[colors.length - 1]);

for(let index = 0; index < colors.length; index++){
    console.log(colors[index]);
}
let index = 0;
while(index == colors.length){
    console.log(colors[index]);
    index ++;
}
for(const VAL of colors){
    console.log(VAL);
}

console.log(typeof colors);//object
console.log(colors.length);

colors.push("White");
let lastEle = colors.pop();
console.log(lastEle);
console.log(colors.indexOf("blue"));

colors.owner = "sindu";
console.log(colors);
for(const property in colors){
    console.log(`${property} : ${colors[property]}`);
}
temperature = [-3, 14, 22, 5, -10];

temperature.forEach(function(number){
    console.log(number);
});
temperature.forEach(number => console.log(number));

temperature.forEach(function(cel_temp){
    console.log((cel_temp * 9/5) + 32);
});
temperature.forEach(cel_temp => console.log(cel_temp * 9/5) + 32);

let temperatureInFahrenheit = temperature.map(function(temp){
    return ((temp * 9 / 5) + 32);
});
console.log(temperatureInFahrenheit);

temperatureInFahrenheit = temperature.map((temp) => ((temp * 9 / 5) + 32));
console.log(temperatureInFahrenheit);

let belowFreezing = temperature.filter(function(temp){
    return temp < 0;
});
console.log(belowFreezing);
belowFreezing = temperature.filter((temp) => temp < 0);
console.log(belowFreezing);
temperature = [-3, 14, 22, 5, -10];

temperature.forEach(function(number){
    console.log(number);
});
temperature.forEach(number => console.log(number));

temperature.forEach(function(cel_temp){
    console.log((cel_temp * 9/5) + 32);
});
temperature.froEach(cel_temp => console.log(cel_temp * 9/5) + 32);

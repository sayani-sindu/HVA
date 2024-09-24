const preHeatOven = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const preHeatOven = true;

            if(preHeatOven){
                resolve("Preheat oven to 180deg");
            }
            else{
                reject("Failed task");
            }
        }, 1000)
    })
};

const addSugarAndChocoChips = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const addChoco = true;

            if(addChoco){
                resolve("Place butter and chocolate chips until melted");
            }
            else{
                reject("Failed task");
            }
        }, 1000)
    })
};

const addFlourCocoAndSalt = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const addSaltFlour = true;

            if(addSaltFlour){
                resolve("Add Flour, coco and melt it");
            }
            else{
                reject("Failed task");
            }
        }, 1000)
    })
};

const bakeMixture = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const bakeMixture = false;

            if(bakeMixture){
                resolve("Bake it for 24 min");
            }
            else{
                reject("Failed task four");
            }
        }, 1000)
    })
};


const bakeChocolateBrownies = async () =>{
    try{
        const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy your brownies");
    }
    catch(error){
        console.log(error);
    }
    
}


bakeChocolateBrownies();
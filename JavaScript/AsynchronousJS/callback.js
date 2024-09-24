function task1(callback){
    setTimeout(()=>{
        console.log("1");
        callback();
    }, 1000);
}

function task2(callback){
    setTimeout(()=>{
        console.log("2");
        callback();
    }, 2000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("3");
        callback();
    }, 4000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("4");
        callback();
    }, 100);
}

function task5(callback){
    setTimeout(()=>{
        console.log("5");
        callback();
    }, 5000);
}

function task6(callback){
    setTimeout(()=>{
        console.log("6");
        callback();
    }, 500);
}

function task7(callback){
    setTimeout(()=>{
        console.log("7");
        callback();
    }, 4000);
}

function task8(callback){
    setTimeout(()=>{
        console.log("8");
        callback();
    }, 3000);
}


task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                        task7(()=>{
                            task8(()=>{

                            })
                        })
                    })
                })
            })
        })
    })
})

//called callback hell ===> The chain ao callbacks
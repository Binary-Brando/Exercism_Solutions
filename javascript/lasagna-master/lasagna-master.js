/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timeRemaining){
    if (!timeRemaining && timeRemaining != 0) { return 'You forgot to set the timer.'}
    switch(timeRemaining){
        case 0:
            return 'Lasagna is done.';
        default:
            return 'Not done, please wait.';        
    }
}	

export function preparationTime(layers, timePerLayer = 2){
    return layers.length * timePerLayer;
}

export function quantities(layers){
    const result = {
        'noodles': 0,
        'sauce': 0,
    }
    for (let i = 0; i < layers.length; i++){
        switch (layers[i]){
            case 'noodles':
                result.noodles += 50;
                break;
            case 'sauce':
                result.sauce += 0.2;
        }
    }
    return result;
}

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions){
    let batchMultiplier = portions / 2;
    let scaledRecipe = Object.assign({},recipe);
    for (const property in scaledRecipe){
        scaledRecipe[property] *= batchMultiplier;
    }
    return scaledRecipe;
}

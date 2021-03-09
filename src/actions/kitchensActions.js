import * as types from './types';

export function getKitchens(data) {
    return { type: types.GET_KITCHENS, data }
}

export function addKitchen(data) {
    return { type: types.ADD_KITCHEN, data }
}

export function deleteKitchen(data) {
    return {type: types.DELETE_KITCHEN, data}
}

export function updateKitchen(data) {
    return {type: types.UPDATE_KITCHEN, data}
}
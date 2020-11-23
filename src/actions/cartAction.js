import * as ActionTypes from './actionTypes'

export const addCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    product
  }
}
export const changeQuantity = (product) => {
  return {
    type: ActionTypes.CHANGE_QUANTITY,
    product
  }
}
export const removeProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    product
  }
}
export const addWishList = (product) => {
  return {
    type: ActionTypes.ADD_WISH_LIST,
    product
  }
}

export const addPreviewList = (product) => {
  return {
    type: ActionTypes.ADD_PREVIEW,
    product: product
  }
}
export const renameProduct = (product, newName) => {
  return {
    type: ActionTypes.RENAME_PRODUCT,
    product,
    newName
  }
}
export const addFeatureProduct = (products) => {
  return {
    type: ActionTypes.ADD_FEATURE_PRODUCT,
    products
  }
}
export const addNewProduct = (products) => {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    products
  }
}
export const addWishListPro = (products) => {
  return {
    type: ActionTypes.ADD_WISH_LIST_PRO,
    products
  }
}
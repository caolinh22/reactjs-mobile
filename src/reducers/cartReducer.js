// reducers/peopleReducer.js
import * as ActionTypes from '../actions/actionTypes';
const initialState = {
  // products: [{name: 'ip7', quantity: 0, id: 1223}]
  products: [],
  wishlist: [],
  previewList: [],
  featureProduct: [],
  newProduct: []
}


export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case ActionTypes.CHANGE_QUANTITY:
      // kiểm tra xem sản phẩm đó có tồn tại k
      const isExist = state.products.find(el => el._id === action.product._id)
      // nếu đúng sp thì gán quantity mới, dùng map để lặp qua các sản phầm,
      const data = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: action.product.quantity })
        }
        console.log("action.product.quantity", action.product.quantity)
        return e
      })
      console.log("data", data)
      // trả về state mới, nếu sp tồn tại thì run data
      // nếu sản phẩm k tồn tại thì return state.product ban dau
      return {
        ...state,
        products: isExist ? data : [...state.products, action.product],
      };



    case ActionTypes.RENAME_PRODUCT:
      // kiểm tra xem sản phẩm đó có tồn tại k
      const isExistRNF = state.featureProduct.find(el => el._id === action.product._id)
      const isExistRN = state.newProduct.find(el => el._id === action.product._id)
      const isExistRNW = state.wishlist.find(el => el._id === action.product._id)
      console.log('isExistRNF', isExistRNF)
      console.log('isExistRN', isExistRN)
      // nếu đúng sp thì gán name mới, dùng map để lặp qua các sản phầm,
      const dataRNF = state.featureProduct.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, name: action.newName })
        }
        return e
      })
      const dataRN = state.newProduct.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, name: action.newName })
        }
        return e
      })
      const dataRNW = state.wishlist.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, name: action.newName })
        }
        return e
      })
      console.log("dataRN", dataRN)
      //trả về state mới, nếu sp tồn tại thì update chạy const data gán name mới
      return {
        ...state,
        featureProduct: isExistRNF ? dataRNF : state.featureProduct,
        newProduct: isExistRN ? dataRN : state.newProduct,
        wishlist: isExistRNW ? dataRNW : state.wishlist,

      };

    case ActionTypes.ADD_CART:
      // kiểm tra xem sản phẩm đó đã có trong list cart chưa
      const isExistAddNew = state.products.find(el => el._id === action.product._id)
      // nếu có rồi thì tăng số quantity (số lượng) lên, dùng map để lặp qua các sản phầm,
      // nếu sản phẩm đó trùng với sản phẩm gửi lên thì tăng quantity
      const dataAddNew = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: Number(e.quantity) + 1 })
        }
        // console.log(action.product.name)
        return e
      })
      // trả về store, nếu có sản phẩm trong list cart thì trả về cái đã đc tăng quantity
      // còn không thì thêm mới
      return {
        ...state,
        products: isExistAddNew ? dataAddNew : [...state.products, action.product],
      };

    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p._id !== action.product._id),
      };

    case ActionTypes.ADD_WISH_LIST:
      // kiem tra no co trong list chua
      const isExistWl = state.wishlist.find(el => el._id === action.product._id)
      // neu co se tra ve item, ko co se tra ve undefined

      return {
        ...state,
        wishlist: isExistWl ? state.wishlist.filter(e => e._id !== action.product._id)
          : [...state.wishlist, action.product]
      };


    //  wishlist: isExistWl ? state.wishlist : [...state.wishlist, action.product]
    // case 'ADD_PREVIEW':
    case ActionTypes.ADD_PREVIEW:
      // kiem tra xem no co namw= trong list da add ko
      const isExistPrev = state.previewList.find(el => el._id === action.product._id)
      return {
        ...state,
        previewList: isExistPrev ? [...state.previewList] : [action.product, ...state.previewList]
      }

    case ActionTypes.ADD_FEATURE_PRODUCT:
      return {
        ...state,
        featureProduct: action.products
      }
    case ActionTypes.ADD_NEW_PRODUCT:
      return {
        ...state,
        newProduct: action.products
      }
    case ActionTypes.ADD_WISH_LIST_PRO:
      return {
        ...state,
        wishListPro: action.products
      }


    default:
      return state;
  }
}

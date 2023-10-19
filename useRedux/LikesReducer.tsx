import { SingleProduct } from "../models/ProductModel";
import { LikesEnum } from "../useRedux/LikesEnum";
import { productSetData } from "../utils/storage";

export interface ILikeAction {
  type: LikesEnum,
  payload: SingleProduct
}

export const LikesReducer = (state: SingleProduct[] = [], action: ILikeAction ) => {

  switch(action.type) {

    case LikesEnum.LIKE_ADD: {
      const likeIndex = state.findIndex( (item) => item.id === action.payload.id )
      if (likeIndex === -1) {
        const newArr = [...state, action.payload]
        productSetData(newArr)
        return newArr
      }
    }
    return state

    case LikesEnum.LIKE_REMOVE: {
      const likeIndex = state.findIndex( (item) => item.id === action.payload.id )
      if (likeIndex > -1) {
        const newArr = Object.assign([], state)
        newArr.splice(likeIndex, 1)
        productSetData(newArr)
        return newArr
      }
    }
    return state

    default:
    return state

  }

}

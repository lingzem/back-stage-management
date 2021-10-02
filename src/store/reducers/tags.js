import * as types from "../action-types";
const initState = {
  taglist: [],
};

export default function tags(state = initState, action){
    switch(action.type){
        // add
        case types.TAGSVIEW_ADD_TAG:
            const tag = action.tag;
            if (state.taglist.includes(tag)) {
                return state;
            } else {
              return {
                ...state,
                taglist: [...state.taglist, tag],
              };
            } 
        // delete
        case types.TAGSVIEW_DELETE_TAG:
            return {
                ...state,
                taglist: [...state.taglist.filter((item) => item !== action.tag)],
            };
        // empty
        case types.TAGSVIEW_EMPTY_TAGLIST:
            return {
                ...state,
                taglist: [
                ...state.taglist.filter((item) => item.path === "/dashboard"),
                ],
            };
        // close other
        case types.TAGSVIEW_CLOSE_OTHER_TAGS:
            return {
                ...state,
                taglist: [
                ...state.taglist.filter((item) => item.path === "/dashboard" || item === action.tag),
                ],
            };
        default:
        return state;
        
    }
}
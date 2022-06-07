const CHANGEINDEX="CHANGEINDEX";
const PREVDELETE="PREVDELETE";

export const changeIndex=(index)=>{
    return {
        type:CHANGEINDEX,
        index
    }
}
export const prevDelete=()=>{
    return {
        type:PREVDELETE
    }
}

export const fullpageIndex=(state={now:0, prev:0}, action)=>{
    switch(action.type){
        case CHANGEINDEX:
            return {now:action.index, prev:state.now};
        case PREVDELETE:
            return {...state, prev:-1};
        default:
            return {...state};
    }
}
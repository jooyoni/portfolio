const CHANGEINDEX="CHANGEINDEX";

export const changeIndex=(index)=>{
    return {
        type:CHANGEINDEX,
        index
    }
}


export const fullpageIndex=(state=-1, action)=>{
    switch(action.type){
        case CHANGEINDEX:
            return action.index;
        default:
            return -1;
    }
}
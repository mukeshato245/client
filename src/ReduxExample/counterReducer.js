const initialData= {
    count: 100,
    data: 1000
}

const counterReducer = (state = initialData, action) => {
    switch(action.type){
        case "INCREASE_COUNT": return {...state, count: ++state.count}
                    //    ... -> rest operator , spread operator
                    // preserve previous state

        case "DECREASE_COUNT": return {...state, count: --state.count}

        case "ADD_DATA": return {...state, data: state.data + 100}

        case "REDUCE_DATA": return {...state, data: state.data - 100}
                
        
        default: 
            return state
    }
}

export default counterReducer

const initialState = {
    giveuser_id: 0,
    email: '', 
    wants_statement: true,
    wants_updates: true,
    mylist: []
}


const UPDATE_MYLIST = 'UPDATE_MYLIST'
const REMOVE_CHARITY = 'REMOVE_CHARITY'
const UPDATE_USER = 'UPDATE_USER'

export default function reducer(state = initialState, action){
    const {type, payload} = action
    
    switch(type){
        // case UPDATE_MYLIST:
        //     let newState = Object.assign({}, state)
        //     newState.mylist.push(payload)
        //     return newState
        // case REMOVE_CHARITY:
        //     newState = {...state}
        //     let removeIndex = newState.mylist.findIndex((e) => { 
        //         return e.id === payload
        //     })
        //     newState.mylist.splice(removeIndex, 1)
        //     ('New State', newState)
        //     return newState
        case UPDATE_USER:
            return Object.assign({}, state, payload)
            
        default:
            return state
    }
    
}


export function updateMyList(charity){
    
    return{
        type: UPDATE_MYLIST,
        payload: charity
    }
}
export function removeCharity(id){
    
    return{
        type: REMOVE_CHARITY,
        payload: id
    }
}
export function updateUser(user){
    
    return{
        type: UPDATE_USER,
        payload: user
    }
}
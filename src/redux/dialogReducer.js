export const addMessageCreator = (message) => ({type: 'ADD-MESSAGE', message})

//---------------------------------------------------------------------------ACTIONS
const ADD_MESSAGE = 'ADD_MESSAGE'

//---------------------------------------------------------------------------STATE
const initialState = {
    dialogs: [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Valera'}
    ],
    messages: [
        {content: 'HI'},
        {content: 'Hey'},
        {content: 'Whats ap?'},
        {content: 'I love you'},
        {content: 'Lets go f or a ride'}

    ],
    underConstruction: true
}

//---------------------------------------------------------------------------REDUCER

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {content: action.message}]
            }
        default:
            return state
    }

}

export default dialogsReducer
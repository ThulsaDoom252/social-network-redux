//---------------------------------------------------------------------------STATE

const initialState = {
    friends: [
        {name: 'Andrew',
            image: 'https://p3-tt.byteimg.com/origin/pgc-image/97997b8db8cb4c6e9463b89b0159a488.jpg'},
        {
            name: 'Sasha',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DyQDEOg-lkwdFXGfDEZkSKmBllenE3vB9g&usqp=CAU'
        }
    ]
}

//---------------------------------------------------------------------------REDUCER


const navReducer = (state = initialState, action) => {
    return state
}

export default navReducer
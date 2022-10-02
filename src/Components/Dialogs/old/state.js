 let reRenderEntireTree = () => {
     console.log('State changed');
 }

let state = {

    profilePage: {
        posts: [
            {message: 'Hi, how are you?', likesCount: 15},
            {message: 'It is my first post', likesCount: 20}
        ],
        newPostText: '',
        addPost(text) {
            let newPost = {
                id: 5,
                message: this.newPostText,
                likesCount: 0
            };
            this.posts.push(newPost)
            this.newPostText = ''
            reRenderEntireTree(state)

        },
        updateNewPostText(newText)  {
            this.newPostText = newText;
            reRenderEntireTree(state)

        },
    },
    messagesPage: {
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
        newMessage: '',
        addMessage(text) {
            this.messages.push({content: this.newMessage})
            this.newMessage = ''
            reRenderEntireTree(state)
        },
        updateNewMessageText(newTextMessage) {
            this.newMessage = newTextMessage
            reRenderEntireTree(state)

        },
    },
    NavPage: {
        friends: [
            {name: 'Andrew', image: 'https://p3-tt.byteimg.com/origin/pgc-image/97997b8db8cb4c6e9463b89b0159a488.jpg'},
            {
                name: 'Dima',
                image: 'http://qqpublic.qpic.cn/qq_public/0/0-2662906478-03B5678701443372F01038EA8322D9F5/900?fmt=jpg&size=36&h=700&w=700&ppv=1'
            },
            {
                name: 'Sasha',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DyQDEOg-lkwdFXGfDEZkSKmBllenE3vB9g&usqp=CAU'
            }
        ]
    },
    subscribe(observer)  {
        reRenderEntireTree = observer;
        window.state = state

    }

}



export default state
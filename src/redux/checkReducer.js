import React from "react";
export let EnterAC = (text) => ({type: 'Enter-text', text: text})
export let CheckAC = (text) => ({type: 'Check', text:text})

let inittialState = {
    value: '111111',
    pidori: ['Ivan','Andrey'],
    krasavchiki: ['Anatoly','Kim'],
    ref: React.createRef(),
}

let checkReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'Enter-text': {
            let valueCopy = {...state, value: action.text}
            return valueCopy
            }
        default:
            return state
        case 'Check':
          let valueCopy = {...state, value: action.text}
            if(valueCopy.value === '')
                return alert('Введите что-то')
            else if(valueCopy.value === state.pidori[0]||valueCopy.value === state.pidori[1])
                return alert('ПИДОРАС!')
            else if(valueCopy.value === state.krasavchiki[0] || valueCopy.value === state.krasavchiki[1])
                return alert('КРАСАВЧИК!')
            else if (valueCopy.value >= 0)
                return alert('НЕ МОГУ СУДИТЬ ПО ЧИСЛУ')
            else return alert('ПОКА ХЗ')
    }
}

export default checkReducer
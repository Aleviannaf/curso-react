import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco
    number: 0
}

function reduce(state, action) {
    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'numberMulti7':
             return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload}
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

const UseReducer = props => {
    const [state, dispatch] = useReducer(reduce, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="texte">{state.user.name}</span>
                    :
                    <span className="texte">Sem Usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={()=>dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_add2' })}>
                        +2
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberMulti7' })}>
                        * 7
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberDiv25' })}>
                        / 25
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberInt' })}>
                        parseInt
                    </button>     
                    <button className="btn" onClick={() => dispatch({ type: 'numberAddN', payload: 11 })}>
                        parseInt
                    </button>           
                </div>
            </div>
        </div>
    )
}

export default UseReducer

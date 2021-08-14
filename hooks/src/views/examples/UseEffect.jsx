import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calFatorial(number) {
    const n = parseInt(number)
    if (n < 0) return -1
    if (n === 0) return 1
    return calFatorial(n - 1) * n
}


const UseEffect = props => {
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    

    //exercicio #01
    useEffect(function () {
        setFatorial(calFatorial(num))
    }, [num])
    //setFatorial(calFatorial(num))
    //Exercicio #02
    const [status, setStatus] = useState(1)

    useEffect(()=>{
        setStatus(num % 2 === 0 ?"par": "impar")
    },[num])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
                <input
                    className="input"
                    type="number"
                    value={num}
                    onChange={e => setNum(e.target.value)}
                ></input>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Numero: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect

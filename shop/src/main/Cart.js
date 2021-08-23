import React, { useState, useMemo, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './Spec.scss';

function Cart(props) {
    let setStock = useSelector((state)=>state.reducer);
    let alertStat = useSelector((state)=>state.reducer2);
    
    let dispatch = useDispatch();
    


    return (
        <div>

            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>이건뭘까</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        setStock.map((a, i) => {
                            return (
                            <tr key={i}>
                                <td>{ a.id + 1 }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td><button onClick={()=>{dispatch({type : '+', id : i})}}>
                                    +</button>
                                    <button onClick={()=>{dispatch({type : '-', id : i})}}>
                                    -</button>
                                </td>
                            </tr>    
                            )
                        })
                    }


                </tbody>
            </Table>

            {
                alertStat === true
                    ? (
                        <div className="my-alert2">
                            <p>지금 구입하면 20% 세일!</p>
                            <button onClick={() => { dispatch({ type: 'off', curStat: alertStat.modalstat}); console.log(alertStat.modalstat) }}>X</button>
                        </div>
                    )
                    : null
            }

            <Parent name="jon" age="20"></Parent>
        </div>
    );

}

function Parent(props) {
    useEffect(() => {
        console.log(1111);
    }, [test1])

    useEffect(() => {
        console.log(2222);
    }, [test2])


    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    
    const Test1 = useMemo(() => test1, [name]);
    const Test2 = useMemo(() => test2, [age])

    function test1() {

        return (
            <div>props.name : {name}</div>
        )
    }
    
    function test2() {

        return (
            <div>props.age : {age}</div>
        )
    }

    return (
        <div>
            <Test1 name={props.name}></Test1>
            <Test2 age={props.age}></Test2>
        </div>
    );
}





// function storeToProp(state) {
//     //console.log(state.reducer2);
//     return {
//         state : state.reducer,
//         modalstat : state.reducer2
//     }

// }

export default Cart
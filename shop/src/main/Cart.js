import React, { memo, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

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
    return (
        <div>
            <Test0 name = {props.name}></Test0>
            <Test1 age = {props.age}></Test1>
        </div>
    )
}

function Test0(props) {
    useEffect(()=>{console.log('render1' + props.name)});
    return<div>1111</div>
}

let Test1 = memo(function(props){
    useEffect(()=>{ console.log('render2' + props.age)});
    return <div>2222</div>
});

// function storeToProp(state) {
//     //console.log(state.reducer2);
//     return {
//         state : state.reducer,
//         modalstat : state.reducer2
//     }

// }

export default Cart

// export default Cart;
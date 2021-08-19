import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

import './Spec.scss';

function Cart(props) {

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
                        props.state.map((a, i) => {
                            return (
                            <tr key={i}>
                                <td>{ a.id + 1 }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td><button onClick={()=>{props.dispatch({type : '+', id : i})}}>
                                    +</button>
                                    <button onClick={()=>{props.dispatch({type : '-', id : i})}}>
                                    -</button>
                                </td>
                            </tr>    
                            )
                        })
                    }


                </tbody>
            </Table>

            {

                props.modalstat === true
                    ? (
                        <div className="my-alert2">
                            <p>지금 구입하면 20% 세일!</p>
                            <button onClick={() => { props.dispatch({ type: 'off', curStat: props.modalstat}); console.log(props.modalstat) }}>X</button>
                        </div>
                    )
                    : null
            }



        </div>
    );
}

function storeToProp(state) {
    console.log(state.reducer2);
    return {
        state : state.reducer,
        modalstat : state.reducer2
    }

}

export default connect(storeToProp)(Cart)

// export default Cart;
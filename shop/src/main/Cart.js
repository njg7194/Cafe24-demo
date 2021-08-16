import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

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

        </div>
    );
}

function storeToProp(state) {
    return {
        state: state
    }

}

export default connect(storeToProp)(Cart)

// export default Cart;
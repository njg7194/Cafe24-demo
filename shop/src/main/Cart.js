import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {

    return (
        <div>

            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.state[0].id}</td>
                        <td>{props.state[0].name}</td>
                        <td>{props.state[0].quan}</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
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
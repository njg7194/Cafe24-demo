/* eslint-disable */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button} from 'react-bootstrap';

function Spec() {

    let history = useHistory();
    console.log(history);

    return (
        <div>
            <div className="container">
                <Button variant="outline-primary" onClick={() => { history.goBack() }}>뒤로가기</Button>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">상품명</h4>
                        <p>상품설명</p>
                        <p>120000원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

  export default Spec;
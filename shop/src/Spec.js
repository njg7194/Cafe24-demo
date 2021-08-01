/* eslint-disable */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Spec(props) {

    let { id } = useParams();
    let history = useHistory();

    let finded = props.shoes.find((item)=>{
        return item.id ==id
    });

    console.log(id);


    return (
        <div>
            <div className="container">
                <Button variant="outline-primary" onClick={() => { history.goBack() }}>뒤로가기</Button>
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{finded.title}</h4>
                        <p>{finded.content}</p>
                        <p>{finded.price} 원</p>
                        <button className="btn btn-danger">주문하기!</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

  export default Spec;
/* eslint-disable */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import './Spec.scss';

let 뿡 = styled.div`
    padding : 20px;
    font-size : 25px;
`;

let 뿡뿡 = styled.h4`
    padding : 20px;
    font-size : 25px;
    color : ${props => props.color}
`;


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



                <뿡>Hello</뿡>
                <뿡뿡 color = {'red'} >스타일드 프롭 가져오기 테스트</뿡뿡>

                <div className="hello">
                    <h4>PLEASE</h4>
                </div>

                <div className="my-alert">
                    <p>재고없다 빨리 사라</p>
                </div>

                <div className="my-alert2">
                    <p>없다고 사라고</p>
                </div>



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
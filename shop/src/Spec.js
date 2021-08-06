/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
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
    let [alert, alertSet] = useState(true);
    let [inputData, inputData변경] = useState('');
    let finded = props.shoes.find((item) => {
        return item.id == id
    });
    
        useEffect(() => {
            var timer1 = setTimeout(() => { alertSet(false) }, 2000);
    
            return () => {
                clearTimeout(timer1);
            }
        }, []);

    return (
        <div>

            {inputData}
            <input onChange={(e) => { inputData변경(e.target.value) }}/>

            <div className="container">



                <뿡>Hello</뿡>
                <뿡뿡 color={'red'} >스타일드 프롭 가져오기 테스트</뿡뿡>
                {
                    alert
                        ? <Alert />
                        : null
                }


                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{finded.title}</h4>
                        <p>{finded.content}</p>
                        <p>{finded.price} 원</p>
                        <Stock stock={props.stock} stockSet={props.stockSet} id={id}> </Stock>
                        <button className="btn btn-danger" onClick={() => { stockDeduct() }}>주문하기!</button>
                        <Button variant="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</Button>
                    </div>
                </div>
            </div>
        </div>

    )
    function Alert() {
        return (
            <div className="my-alert">
                <p>재고없다 빨리 사라</p>
            </div>
        )
    }

    function stockDeduct() {
        let tmp = [...props.stock];
        
        tmp[id] = (tmp[id] - 1);
        props.stockSet(tmp);

        return null;
    }
}

function Stock(props) {
    return (
        <div>
            <p>재고 : { props.stock[props.id] }</p>
        </div>
    )
}
  export default Spec;

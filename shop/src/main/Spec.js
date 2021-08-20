/* eslint-disable */
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Table, Nav, Tab } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group"



import { stockContext } from './App.js';

import styled from 'styled-components';
import './Spec.scss';
import { connect } from 'react-redux';

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

    let stock = useContext(stockContext);

    let { id } = useParams();
    let history = useHistory();
    let [alert, alertSet] = useState(true);
    let [inputData, inputData변경] = useState('');
    let finded = props.shoes.find((item) => { return (item.id + 1) == id }); //데이터셋에서 현제 페이지 id에 따른 아이템 출력
    let [tab, setTab] = useState(0);
    let [aniSwitch, setAniSwitch] = useState(false);

    console.log(finded);

    const nodeRef = useRef(null);

    useEffect(() => {
        var timer1 = setTimeout(() => { alertSet(false) }, 2000);

        return () => {
            clearTimeout(timer1);
        }
    }, []);

    return (
        <div>

            {inputData}
            <input onChange={(e) => { inputData변경(e.target.value) }} />

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
                        <Stock id={id}> </Stock>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                stockDeduct();
                                props.dispatch({
                                    type: '++',
                                    payload: {
                                        id: finded.id + 1,
                                        name: finded.title,
                                        quan: (Math.floor(Math.random() * 299) + 1)}
                                    });
                                history.push('/cart');
                                }}
                        >주문하기!</button>
                    <Button variant="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</Button>
                </div>
            </div>

            <div className="container">

                <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => { setAniSwitch(false); setTab(0) }}>상세정보</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => { setAniSwitch(false); setTab(1) }}>리뷰</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={() => { setAniSwitch(false); setTab(2) }}>판매자</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {/* nodeRef써야warning 안뜸. 리엑트 부트스트렙 에서 CSSTransition 쓰려면 저거 써야한다고함.
                        라이브러리 만든 사람이 리엑트에서 더이상 지원하지 않는 함수를 써서 그렇다고 함.*/}
                    <CSSTransition nodeRef={nodeRef} in={aniSwitch} classNames="wow" timeout={500}>
                        <div ref={nodeRef}><TabComponent tab={tab} aniSwitch={aniSwitch} setAniSwitch={setAniSwitch}></TabComponent></div>
                    </CSSTransition>
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
        let tmp = [...stock.stock];
        // console.log(tmp); contextAPI 검증용

        tmp[id] = (tmp[id] - 1);
        stock.stockSet(tmp);

        return null;
    }
}

function Stock(props) {
    let stock = useContext(stockContext);
    return (
        <div>
            <p>재고 : {stock.stock[props.id - 1]}</p>
        </div>
    )
}

function TabComponent(props) {
    useEffect(() => {
        props.setAniSwitch(true);

    });

    if (props.tab === 0) {
        return <div>0번째 내용</div>
    } else if (props.tab === 1) {
        return <div>1번째 내용</div>
    } else if (props.tab === 2) {
        return <div>2번째 내용</div>
    }
}


function storeToProp(state) {
    //console.log(state.reducer2);
    return {
        state : state.reducer,
        modalstat : state.reducer2
    }

}

export default connect(storeToProp)(Spec);

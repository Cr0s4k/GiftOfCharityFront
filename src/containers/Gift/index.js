import React, {Component} from 'react';
import './style.css';
import API from '../../services/API'
import Footer from "../../components/Footer";
import ErrorMessage from "../../components/ErrorMessage";
import GiftTitleBar from "../../components/GiftTitleBar";
import GiftComponent from "../../components/GiftComponent";
// import '../../../node_modules/animate.css/animate.min.css'

import {Track, TrackedDiv, TrackDocument} from 'react-track';
import {topTop,
    bottomBottom,
    calculateScrollY} from 'react-track/tracking-formulas';

import {tween} from 'react-imation';

import {rgba, px, percent} from 'react-imation/tween-value-factories';

import cx from 'classnames';

class Index extends Component {
    constructor(props){
        super(props);
        document.title="Congratulations!";
        this.state = {
            gift: undefined,
            error: false
        };
    }

    componentDidMount() {
        API.getGift(this.props.match.params.token)
            .then(gift => {
                this.setState({gift: gift });
            })
            .catch(e => {
                this.setState({error: true})
            })
    }

    handleError() {
        document.title = "Error";
        return (
            <ErrorMessage
                title="Error!"
                description="The gift you are trying to find it doesn't exists!"
                handleClose={this.handleCloseError}
            />
        )
    };

    render() {
        return (
            <TrackDocument formulas={[topTop, calculateScrollY]}>
                {(topTop, scrollY) =>
                    <div >
                        <TrackedDiv className="pin-cont" formulas={[topTop, bottomBottom]}>
                            {(posTopTop, posBottomBottom) =>
                                <section
                                    className={cx("pin",{
                                        'pin-pin': scrollY > posTopTop,
                                        'pin-unpin': scrollY > posBottomBottom})}>
                                    <h3
                                        className="pin-txt"
                                        style={tween(scrollY,[
                                            [[posTopTop], { top: percent(0), marginTop: px(0) }],
                                            [[posTopTop+50], { top: percent(50), marginTop: px(-60) }]
                                        ])}>Are you ready?
                                    </h3>

                                    <div
                                        className="reveal"
                                        style={tween(scrollY, [
                                            [[posTopTop+100], {width: percent(0), backgroundColor: rgba(0, 0, 122, 1)}],
                                            [[posTopTop+250], {width: percent(100), backgroundColor: rgba(226, 189, 154, 1)}]
                                        ])}>
                                        <h3 className="reveal-txt">Sure?</h3>
                                    </div>
                                </section>
                            }
                        </TrackedDiv>
                        <div className="divForFooter">
                            <GiftTitleBar/>
                            { this.state.gift && !this.state.error ?(
                                <GiftComponent gift={this.state.gift}/>
                            ): !this.state.gift && !this.state.error ? (
                                <div/>
                            ): this.handleError()}
                            <Footer/>
                        </div>
                    </div>

                }
            </TrackDocument>
            // <div className="divForFooter">
            //     <GiftTitleBar/>
            //     { this.state.gift && !this.state.error ?(
            //         <GiftComponent gift={this.state.gift}/>
            //     ): !this.state.gift && !this.state.error ? (
            //         <div/>
            //     ): this.handleError()}
            //     <Footer/>
            // </div>
        );
    }
}

export default Index;

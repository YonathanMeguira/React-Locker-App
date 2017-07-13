/**
 * Created by if_found_call_0586288454 on 13/07/2017 ap. J.-C..
 */
import React from 'react';
import Button from 'material-ui/Button';
import 'react-material-layout/dist/react-material-layout.min.css';
import '../components/index.css';
import '../components/animate.css';
import {connect} from 'react-redux';
import {addNumber} from '../action/actions';
import {compareCodes} from '../action/actions';
import equals from 'lodash/fp/equals';
import {MorphReplace} from 'react-svg-morph';
import {LockedMode, UnlockedMode} from './lockerIcons';
import classNames from 'classnames';


class CodeSection extends React.Component {

    render() {


        function addNumberToCurrentCode(index, event) {
            const newValue = parseInt(event.target.value, 0);
            this.props.addNumberToCurrentCode(newValue, index);
        }

        function checkCodes(event) {
            const currentCode = this.props.currentCode;
            const secretCode = this.props.secretCode;
            var res = equals(currentCode, secretCode);
            this.props.broadcastCodeValidity(res);
            event.preventDefault();
        }


        var formClass = classNames({
            'code-form mb-4': true,
            'animated wobble': !this.props.codesMatch,
            'btn-over': this.props.codesMatch
        });

        return (
            <div className="main" data-flex data-layout="row" data-layout-align="center center">
                <div>
                    <form data-flex data-layout="row" className={formClass} onSubmit={checkCodes.bind(this)}>
                        <Button type="submit" raised color="primary" className="mr-3" id="sb">Check</Button>
                        <input type="tel" maxLength={1} onChange={addNumberToCurrentCode.bind(this, 0)}/>
                        <input type="tel" maxLength={1} onChange={addNumberToCurrentCode.bind(this, 1)}/>
                        <input type="tel" maxLength={1} onChange={addNumberToCurrentCode.bind(this, 2)}/>
                        <input type="tel" maxLength={1} onChange={addNumberToCurrentCode.bind(this, 3)}/>
                        <div>
                            <MorphReplace width={50} height={50}>
                                {this.props.codesMatch && typeof this.props.codesMatch !== 'string' ?
                                    <UnlockedMode key="checked"/> : <LockedMode key="checkbox"/>}
                            </MorphReplace>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        currentCode: state.lockerApp.currentCode,
        secretCode: state.lockerApp.secretCode,
        codesMatch: state.lockerApp.codesMatch
    })
}
const mapDispatchToProps = dispatch => {
    return {
        addNumberToCurrentCode: (number, index) => {
            dispatch(addNumber(number, index))
        },
        broadcastCodeValidity: value => {
            dispatch(compareCodes(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeSection);


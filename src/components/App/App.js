import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {quests} from '../../plot/quests';
import Chatbot from '../ChatBot/Chatbot'; 
import { connect } from 'react-redux';
import { changeShowPopup } from '../../store/actions/codeActions'
import sound from '../../audio/sans.mp3'
import sound2 from '../../audio/sans.ogg'
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            answer: false
        };
    }

    changeButtonState = () => {
        this.setState({isEdit: true});
    };
    changeButtonState2 = () => {
        this.setState({isEdit: false});
    };

    togglePopup = () => {
        this.props.changeShowPopup(false);
    }

    render() {

        this.passStages = this.props.passStages;
        this.passQuests = this.props.passQuests;
        this.currentStage = this.props.currentStage;
        this.currentQuest = this.props.currentQuest;
        this.writeCode = this.props.writeCode;
        this.code = this.props.code;
        this.showPopup = this.props.showPopup;

        //проверка есть ли пройденый квест в вайт листе, если есть показать попап и удалить
        const newList = JSON.parse(localStorage.whiteList);
        const canIShowPopup = newList[this.currentStage].indexOf(this.currentQuest) !== -1;
        let indexOfElement = newList[this.currentStage].indexOf(this.currentQuest);
        if (canIShowPopup && this.showPopup) {
            
            delete newList[this.currentStage][indexOfElement];
            localStorage.setItem('whiteList', JSON.stringify(newList))
        }

        return (
            <div className="main">
                <div>
                    <audio controls autoPlay loop>
                        <source src={sound2} type="audio/ogg"/>
                            <source src={sound} type="audio/mpeg"/>
                            Your browser does not support the audio element.
                    </audio>
                </div>
                <div className="leftpanel">
                    <Leftpanel  func={this.changeButtonState}
                                func2={this.changeButtonState2}/>
                </div>
                {
                (!this.state.isEdit)
                ?
                <div>
                <div className="editor">
                    <Codeditor
                        textAnswer={quests[this.currentStage].quests[this.currentQuest].test.answer}
                        text={this.code}
                        answer={this.state.answer}
                        writeCode={this.writeCode}
                        resets={this.props.resets}
                        />
                </div>
                <div className="terminal">
                    <Terminal
                        className="terminal"
                        testCode={quests[this.currentStage].quests[this.currentQuest].test}
                        regexps={quests[this.currentStage].quests[this.currentQuest].regexps}
                        regexpsNone={quests[this.currentStage].quests[this.currentQuest].regexpsNone}
                        />
                </div>
                </div>
                : <HellRules passStages={this.passStages} passQuests={this.passQuests}/>
            }
                <div>
                    {
                        (!this.state.isEdit) ? <Chatbot stage={this.currentStage}
                        quest={this.currentQuest}/> : null
                    }
                </div>
                {//POPUP 

                    this.showPopup && canIShowPopup?
                        <Popup stage={this.currentStage} quest={indexOfElement} togglePopup={this.togglePopup}/>
                        : null
                }
                
            </div>
        )

    }
}


const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest,
        writeCode: store.writeCode,
        code: store.code,
        resets: store.resets,
        showPopup: store.showPopup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeShowPopup: (can) => dispatch(changeShowPopup(can))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
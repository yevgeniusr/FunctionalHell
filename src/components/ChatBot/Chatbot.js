import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";
import {quests} from "../../plot/quests";

export default class Chatbot extends Component {

    constructor() {
        super();

        this.state = {
            visible: true,
            replics: [],
            content: [],
            dialogN: 0,
            hintsN: 0,
        }
    }

    writeReplics = (replics) => {
        let x = 0;
        let interval = setInterval(() => {
            let replic = `${replics.name}:~$ ${replics.text[x++]}`;
            this.setState({
                replics: [...this.state.replics, replic],
                content: this.state.content + replic,
            });
            if (x >= replics.text.length) {
                clearInterval(interval);
            }
        }, 1000);
    };

    showChat() {
        const state = this.state;
        state.visible = !state.visible;
        this.setState({state})
    }

    getDialogs = () => {
        console.log("GET DIALOGS!!!");
        this.setState({
            content: this.state.content +  this.state.replics.map((r, i) => <li key={i}>{r}</li>)
        });
    };

    getHints() {
        const hints = quests[localStorage.passStages].quests[localStorage.passQuests].hints;
        if (this.state.hintsN < hints.length) {
            this.setState({
                content: this.state.content + "\n" + hints[this.state.hintsN],
                hintsN: this.state.hintsN + 1,
            });
        }

        console.log(hints[this.state.hintsN])
    }

    componentDidMount() {
        try {
            this.writeReplics(dialogs[localStorage.passStages][localStorage.passQuests][this.state.dialogN]);
        }  catch {
            console.log("non replics")
        }
        
    }

    render() {

        if (this.state.visible === true)
            return (
                <div className='chatbot'>
                    <button className='buttonchatclose' onClick={this.showChat.bind(this)}>Close</button>
                    <div className="dialogbox">{this.state.content}</div>
                    {/*<button className='chatbutton' onClick={this.getDialogs.bind(this)}>nextDialog</button>*/}
                    <button className='chatbutton' onClick={this.getHints.bind(this)}>getHint</button>
                </div>
            );
        return (
            <div>
                <button className='buttonchatopen' onClick={this.showChat.bind(this)}>Chat</button>
            </div>
        )
    }

}
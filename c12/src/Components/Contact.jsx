import React from 'react';



class Contact extends React.Component{

    constructor(){
        super()
        this.state = {
            feedback: '', 
            name: '', 
            email: ''
        }
    }

    handleChange = (event) => {
        this.setState({feedback: event.target.value})
    }

    handleSubmit = (event) => {
        const templateId = 'template_tt9f297';
    
        this.sendFeedback(templateId, {message: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
    
    sendFeedback (templateId, variables) {
    window.emailjs.send(
        'service_ejcupbt', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    render() {
        return (
            <div id="contact">
                <form className="test-mailing">
                    <h5>If you have any further questions please contact the Courier Twelve team with the below form.</h5>
                    <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange}
                        placeholder="Message..."
                        required
                        value={this.state.feedback}
                        style={{width: '80%', height: '150px'}}
                    />
                    </div>
                    <input className="contact" type="text" placeholder="Your Name..." onChange={this.handleNameChange}></input>
                    <input className="contact" type="text" placeholder="Your Email..." onChange={this.handleEmailChange}/>
                    <input id="contactButton" type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Contact
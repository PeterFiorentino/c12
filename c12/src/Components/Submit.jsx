import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


class Submit extends React.Component {
    constructor(){
        super()
        this.state = {
            contestant_name: "",
            contestant_email: "",
            genre: "",
            log_line: "",
            page_length: "",
            thank_you: false
        }
    }


    changeContestantName = (e) => {
        this.setState({ contestant_name: e.target.value})
    }

    changeContestantEmail = (e) => {
        this.setState({ contestant_email: e.target.value})
    }

    changeLogLine = (e) => {
        this.setState({ log_line: e.target.value})
    }

    changeGenre= (e) => {
        this.setState({ genre: e.target.value})
    }

    changePageLength= (e) => {
        this.setState({ page_length: e.target.value})
    }

    handleSubmit = (event) => {
        const templateId = 'template_r8im1mh';
    
        this.sendFeedback(templateId, {log_line: this.state.log_line, from_name: this.state.contestant_name, reply_to: this.state.contestant_email, genre: this.state.genre, page_length: this.state.page_length})

        this.setState({
            contestant_name: "",
            contestant_email: "",
            log_line: "",
            genre: "",
            page_length: "",
            thank_you: true
        })
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

    render(){
        return (
            <div id="Book">
                <div className="payment">
                
                    <div>
                        <form id="round2form" onSubmit={this.addCustomer}>
                            <input type="text" placeholder="Name" value={this.state.contestant_name} onChange={this.changeContestantName} className="purchaseBox"></input>
                            <input type="text" placeholder="Email" value={this.state.contestant_email} onChange={this.changeContestantEmail} className="purchaseBox"></input>
                            <input type="text" placeholder="Log Line" value={this.state.log_line} onChange={this.changeLogLine} className="purchaseBox"></input>
                            <input type="text" placeholder="Genre" value={this.state.genre} onChange={this.changeGenre} className="purchaseBox"></input>
                            <input type="text" placeholder="Page Length" value={this.state.page_length} onChange={this.changePageLength} className="purchaseBox"></input>
                            <input type="file"  className="purchaseBox" id="myFile" name="filename" accept=".pdf"></input>
                            
                            {/* <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} /> */}
                        </form>
                        {/* {this.state.thank_you ? <p id="thankyou">Thank you for your interest in We Will Never Forget! Please check your email for payment instructions.</p> : <p></p>} */}
                    </div>   
                    <br>
                    </br>
                    
                    <PayPalScriptProvider options={{ "client-id": "test" }} id="paypal">
                        <PayPalButtons style={{ layout: "vertical" }} />
                    </PayPalScriptProvider>
                </div> 
            </div>
        )
    }

}

export default Submit
import React from 'react';
import script from '../script.jpeg';

class About extends React.Component {

    render() {
        return (
            <div className="contestAbout">
                <h1> Together We Can Make Your Movie </h1>
                <div id="aboutContestTeam">
                    <div id="scriptAndAbout">
                        <div >
                            <p className="aboutText">
                            The Courier Twelve Screenwriting Contest is a one of a kind
                            opportunity. Unlike any other screenwriting contest, Courier
                            Twelve is partnering with (TALENT NAME HERE) to find the
                            next great small budget, feature screenplay to PRODUCE.
                            </p>
                            <br></br>
                            <p className="aboutText">
                            After years of submitting to contests themselves, the Courier
                            Twelve team realized that screenwriting contests were missing a
                            great opportunity. Finding the next great writer and script isn’t
                            enough, we should be finding the next indie script to go into
                            production with.
                            </p>
                        </div>
                        <img src={script} id="scriptPic" alt="team"></img>
                    </div>
                        <p className="aboutText" id="bottomAbout">
                            Open to all writers with a small budget screenplay, the Courier
                            Twelve Screenwriting Contest is your opportunity to not only
                            have your script be found, but your opportunity to have your
                            script be made into a movie! 
                        </p>
                        <br></br>
                        <br></br>
                </div>
            </div>
        )
    }
}

export default About
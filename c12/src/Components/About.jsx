import React from 'react';
import team from '../creative-roles-feature.jpg';

class About extends React.Component {

    render() {
        return (
            <div className="contestAbout">
                <div id="abuotContestTeam">
                    <img src={team} id="teamPic" alt="team"></img>
                    <h2>The Inspiration</h2>
                    <div>
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
                        <br></br>
                        <p className="aboutText">
                        Open to all writers with a small budget screenplay, the Courier
                        Twelve Screenwriting Contest is your opportunity to not only
                        have your script be found, but your opportunity to have your
                        script be made into a movie! 
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                    <h2>Rules</h2>
                    <ul>
                        <li className="rules">
                        All writers must be at least 18 years old.
                        </li>
                        <li>
                        All writers are eligible, including professional writers.
                        </li>
                        <li>
                        Anyone can submit, however the script must be in English.
                        (Occasional dialogue in other languages is acceptable.)
                        </li>
                        <li>
                        Scripts based on material not owned by the writers are not
                        acceptable. However, scripts based on entities in public domain are
                        acceptable.
                        </li>
                        <li>
                        Electronic, PDF submissions only.
                        </li>
                        <li>
                        Cover letters will not be read.
                        </li>
                        <li>
                        By entering the competition, the writer(s) acknowledge their eligibility
                        for the competition.
                        </li>
                        <li>
                        Courier Twelve receives the right amend these rules at any time.
                        </li>
                        <li>
                        A writer or a writing team can submit multiple scripts to Courier
                        Twelve. Meaning, you can not submit multiple versions of a script
                        but you can submit multiple ideas to the contest.
                        </li>
                        <li>
                        All entry fees are non-refundable.
                        </li>
                        <li>
                        The decision of the judges and (TALENT HERE) will be final and
                        cannot be contested. However, if the winning writer(s) decline to go
                        into production, Courier Twelve team and (talent here) will move on
                        to the second place winning script.
                        </li>
                    </ul>
                    <br></br>
                    <br></br>
                    <h2>Guidelines</h2>
                    <div>
                        <p>
                        In partnership with (TALENT HERE) Courier Twelve has
                        obtained an investment of $2,000,000 to cover the
                        production costs of your script!!
                        </p>
                        <br>
                        </br>
                        <p>
                        Because of our low budget, we cannot choose a big budget
                        screenplay. We will gladly read your buddy-cop action
                        adventure set in space with big explosions and spaceship
                        chases but it will not be able to win.
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                    <h2>Examples of movies we are looking for</h2>
                    <ul>
                        <li>Emily the Criminal (2022)</li>
                        <li>Red Rocket (2021)</li>
                        <li>Palm Springs (2022)</li>
                        <li>Malcolm and Marie (2021)</li>
                        <li>Minari (2020)</li>
                        <li>Buried (2010)</li>
                        <li>Napoleon Dynamite (2004)</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <h2>Prize</h2>
                    <p>The Courier Twelve Screenwriting Contest is a
                        truly one of a kind event.
                        </p>
                        <br></br>
                        <p>
                        The winner will have the chance to partner with
                        Courier Twelve and TALENT HERE and see their
                        feature script become a movie!!
                        </p>
                        <br></br>
                        <p>
                        It is important to note that the winner will receive
                        an offer to purchase their script. Following
                        negotiations, the writer(s) will have the option to
                        become apart of the producing team as we move
                        into production.</p>
                        <br></br>
                        <br></br>
                </div>
            </div>
        )
    }
}

export default About
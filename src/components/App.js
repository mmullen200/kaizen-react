import React, {Component} from 'react';
import './App.css';
import {Button, Container, Grid} from 'semantic-ui-react';
import Header from './Header';
import BodyText from './BodyText';

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleText = this.toggleText.bind(this);
        this.state = {
            bodyText:
                [<Container>"All changes, even positive ones, are scary. Attempts to reach goals through radical or
                    revolutionary means often fail because they heighten fear. But the small steps of kaizen disarm the
                    brain’s fear response, stimulating rational thought and creative play." -Robert Maurer</Container>,
                    <Container textAlign='center'>Small questions create a mental environment that welcomes unabashed
                        creativity and playfulness. When you ask small questions of others, you channel that creative
                        force toward team goals. By asking small questions of yourself, you lay the groundwork for a
                        personalized program for change. -Robert Maurer</Container>,
                    <Container textAlign='center'>"The easy technique of mind sculpture uses “small thoughts” to help
                        you develop new social, mental, and even physical skills— just by imagining yourself performing
                        them!" -Robert Maurer</Container>,
                    <Container>"Small actions are at the heart of kaizen. By taking steps so tiny that they seem trivial
                        or even laughable, you’ll sail calmly past obstacles that have defeated you before. Slowly— but
                        painlessly!— you’ll cultivate an appetite for continued success and lay down a permanent new
                        route to change." -Robert Maurer</Container>,
                    <Container>"We are so accustomed to living with minor annoyances that it’s not always easy to
                        identify them, let alone make corrections. But these annoyances have a way of acquiring mass and
                        eventually blocking your path to change. By training yourself to spot and solve small problems,
                        you can avoid undergoing much more painful remedies later." -Robert Maurer</Container>,
                    <Container>"Whether you wish to train yourself or others to instill better habits, small rewards are
                        the perfect encouragement. Not only are they inexpensive and convenient, but they also stimulate
                        the internal motivation required for lasting change." -Robert Maurer</Container>,
                    <Container>The kaizen approach to life requires a slower pace and an appreciation of small moments.
                        This pleasant technique can lead to creative breakthroughs and strengthened relationships, and
                        give you a daily boost toward excellence. -Robert Maurer</Container>
                ],
            selectedText: undefined
        }
    }

    toggleText = (myIndex) => {
        const text = this.state.bodyText[myIndex];
        this.setState(() => ({selectedText: text}));

    }

    render() {



        const subtitle = "Small steps, big change";


        return (

            <div className="App">



                <Header subtitle={subtitle}/>




                <Grid columns={3} divided>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>

                        <Container>"All changes, even positive ones, are scary. Attempts to reach goals through radical or
                            revolutionary means often fail because they heighten fear. But the small steps of kaizen disarm the
                            brain’s fear response, stimulating rational thought and creative play." -Robert Maurer</Container>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>


                </Grid>




            </div>

        );
    }
}

export default App;
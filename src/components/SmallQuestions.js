import React from 'react';
import {Button, Container, Grid} from 'semantic-ui-react';

const SmallQuestions = () => (
    <div>


        <Grid columns={3} divided>
            <Grid.Column></Grid.Column>
            <Grid.Column>

                <Container textAlign='center'>Small questions create a mental environment that welcomes unabashed
                    creativity and playfulness. When you ask small questions of others, you channel that creative
                    force toward team goals. By asking small questions of yourself, you lay the groundwork for a
                    personalized program for change. -Robert Maurer</Container>
            </Grid.Column>
            <Grid.Column></Grid.Column>


        </Grid>


    </div>
);

export default SmallQuestions;
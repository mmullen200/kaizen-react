import React from 'react';
import {Button, Container, Grid} from 'semantic-ui-react';

const SmallActions = () => (
    <div>


        <Grid columns={3} divided>
            <Grid.Column></Grid.Column>
            <Grid.Column>

                <Container>"Small actions are at the heart of kaizen. By taking steps so tiny that they seem trivial
                    or even laughable, you’ll sail calmly past obstacles that have defeated you before. Slowly— but
                    painlessly!— you’ll cultivate an appetite for continued success and lay down a permanent new
                    route to change." -Robert Maurer</Container>
            </Grid.Column>
                <Grid.Column></Grid.Column>


        </Grid>


    </div>
);
export default SmallActions;
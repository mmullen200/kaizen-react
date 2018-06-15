import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Sidebar, Segment, Button, Menu, Image, Icon, Header} from 'semantic-ui-react';

class SidebarLeftOverlay extends Component {
    state = {visible: false}

    toggleVisibility = () => this.setState({visible: !this.state.visible})

    render() {
        const {visible} = this.state
        return (
            <div>
                <Button onClick={this.toggleVisibility}>Menu</Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        width='thin'
                        visible={visible}
                        icon='labeled'
                        vertical
                        inverted
                    >
                        <Menu.Item as={Link} to="/">Kaizen</Menu.Item>
                        <Menu.Item as={Link} to="/small-actions">Take Small Actions</Menu.Item>
                        <Menu.Item as={Link} to="/small-moments">Identify Small Moments</Menu.Item>
                        <Menu.Item as={Link} to="/small-problems">Solve Small Problems</Menu.Item>
                        <Menu.Item as={Link} to="/small-questions">Ask Small Questions</Menu.Item>
                        <Menu.Item as={Link} to="/small-rewards">Bestow Small Rewards</Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg'/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default SidebarLeftOverlay;

import React, { Component } from 'react';

import { AppDB } from "../db/db-init";

class Selection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userEmail: this.props.location.state.userEmail,
            rooms: []
        }
    }

    componentDidMount() {
        AppDB.ref("Rooms").on('child_added', (s) => this.roomAddListener(s));
        AppDB.ref("Rooms").on("child_removed", (s) => this.roomRemoveListener(s));
    }

    render() {
        return (
            <div>
                <h2>Available Rooms</h2>
                <button>Create</button>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Owner</td>
                            <td>Persons</td>
                            <td>Password</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Test</td>
                            <td>UserName</td>
                            <td>5/9</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }

    roomAddListener(snapshot) {
        const item = snapshot.val();

        const newRooms = this.state.rooms.slice(); /* creates a copy */
        newRooms.push({ ...item, mykey: snapshot.key }); /* adds a new item */

        this.setState({ rooms: newRooms });
    }

    roomRemoveListener(snapshot) {
        /* snapshot.key will hold the key of the item being REMOVED */
        const newRooms = this.state.rooms.slice().filter(z => z.mykey !== snapshot.key);
        this.setState({ rooms: newRooms });
    }
}

export default Selection;
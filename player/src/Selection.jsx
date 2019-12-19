import React, { Component } from 'react';

class Selection extends Component {
    render() {
        return (
            <div>
                <h2>Available Rooms</h2>
                <div>
                    <select>
                        <option value="room1">Room1</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Selection;
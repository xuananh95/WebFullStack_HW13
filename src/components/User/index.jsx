import React from 'react'
import './styles.css'

class User extends React.Component {
    render() {
        return (
            <div className="user-item">
                <div className="item item-left">
                    <img src={this.props.avatar} alt="profile" width="150" height="150" />
                </div>
                <div className="item item-right">
                    <h2>{this.props.name}</h2>
                    <p><em>Age: </em>{this.props.age}</p>
                    <p><em>Country: </em>{this.props.country}</p>
                </div>
            </div>
        )

    }
}


export default User
import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>This is a Home Component!</p>
                <p>User name is: {this.props.user.name}</p>
                <p>User age is: {this.props.user.age}</p>
                <p>User hobbies are:</p>
                <ul>
                    {this.props.user.hobbies.map((hobby, i)=>
                        <li key={i}>{hobby}</li>
                    )}
                </ul>

                {this.props.children}

            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};
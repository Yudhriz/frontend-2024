import PropTypes from 'prop-types';

const Profile = ({ name, major }) => (
    <div>
        <h1>Hello, world!</h1>
        <h2>My name is {name}</h2>
        <p>I am {major}</p>
    </div>
);

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
};

export default Profile;

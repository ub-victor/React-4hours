import PropTypes from 'prop-types';

const Student = ({ name = "Guest", age = 0, isStudent = false }) => {
    return ( 
        <div className="student">
            <p>Name: {name}</p>
            <p>age: {age} </p>
            <p>Student: {isStudent ? "Yes" : "No"} </p>
        </div>
     );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false
// };Default it react 18+ does not work to make it work you have to paste directly in the Coponant declaration as we did


export default Student;
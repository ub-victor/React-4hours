import Prototypes from 'prop-types'

const Student = ({name,age, isStudent}) => {
    return ( 
        <div className="student">
            <p>Name: {name}</p>
            <p>age: {age} </p>
            <p>Student: {isStudent?"Yes" : "No"} </p>
        </div>
     );
}

Student.prototypes = {
        name:Prototypes.string,
        age: Prototypes.number,
        isStudent: Prototypes.bool

}
export default Student;
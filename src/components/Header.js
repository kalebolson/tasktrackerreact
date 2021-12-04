import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'something else'
}

//This will just throw an error into the console if title is not a string
//Will not crash page unless we add .isRequired
Header.propTypes = {
    title: PropTypes.string
}

//Example of adding css style in js
//We could also do this inline with {{color: 'red'}}
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header

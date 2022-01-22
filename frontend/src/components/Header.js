import PropTypes from 'prop-types'

const Header = ({ title, color }) => {
    return (
        <h1 className='header' style={{color: color}}>{title}</h1>
    )
}

Header.defaultProps = {
    title: 'Travel Website',
    color: 'gray'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Header

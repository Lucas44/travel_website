import PropTypes from 'prop-types'

const Infobox = ({ text, color }) => {
    return (
        <div>
            <h2 style={{ color: color }}>{text}</h2>

        </div>
    )
}

Infobox.defaultProps = {
    text: 'Travel information will go here',
    color: 'gray'
}

Infobox.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Infobox

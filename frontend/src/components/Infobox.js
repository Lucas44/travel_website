import PropTypes from 'prop-types'

const Infobox = ({ text, color }) => {
    return (
        <div class='textbox' style={{ color: color }}>
            <h3>{text}</h3>
            <br/>
            <p>The covid pandemic has had a devastating effect on the global tourism sector. </p>
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

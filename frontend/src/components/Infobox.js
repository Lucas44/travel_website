import PropTypes from 'prop-types'

const Infobox = ({ text, color }) => {
    return (
        <div class='textbox' style={{ color: color }}>
            <h3>{text}</h3>
            <br/>
            <p>The covid pandemic has had a devastating effect on the global tourism sector. According to a United Nations report,
                incoming tourism levels dropped between 60% and 80% in 2020, and only partially recovered in 2021. <br/> With this in mind,
                we hope this project will help users combine their desire to rediscover the world with an awareness of the positive (and
                negative) effects their actions might have on local communities. Explore the map below to learn more about how you can help
                revitalize tourism-dependent economies across the world.
            </p>
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

import PropTypes from 'prop-types'

const Infobox = () => {
    return (
        <div id='textbox'>
            <p>The Covid-19 pandemic has had a devastating effect on the global tourism sector. According to a United Nations report,
                incoming tourism levels dropped between 60% and 80% worldwide in 2020, and only partially recovered in 2021.
            </p>
            <p> We hope this project will help you combine your desire to rediscover the world with an awareness of the benefits of
                sustainable tourism. Explore the map below to learn more about how you can help
                revitalize tourism-dependent economies across the world.</p>
        </div>
    )
}


Infobox.propTypes = {
    text: PropTypes.string,
}

export default Infobox

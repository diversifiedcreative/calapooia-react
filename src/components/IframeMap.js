import React from 'react';

const mapContainerStyles = {
    height: 'calc(100vh - 56px)',
    width: '100%'
}

function IframeMap () {
    return(
        <div style={mapContainerStyles}>
            <iframe src="https://www.google.com/maps/d/embed?mid=1YYanY-SRGh1d46XEZcPJA_wU_P9tgbX9&hl=en" width="100%" height="100%" title="THe Calapooia River"></iframe>
        </div>
    )
}

//add a toast indicating that the sidebar may be opened for better map controls

export default IframeMap;
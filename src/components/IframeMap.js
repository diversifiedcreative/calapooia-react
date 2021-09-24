import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import './customToastify.css';
import sidebarGoogMapIcon from '../img/sidebarGoogMapIcon.png';

const mapContainerStyles = {
    height: 'calc(100vh - 56px)',
    width: '100%',
}

toast.configure();

const toastMessage = <div>Click <img src={sidebarGoogMapIcon} alt="sidebar logo"/> icon above to open map navigation tools.</div>

const mapToast = () => {
    toast(toastMessage, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

function IframeMap () {

    useEffect(() => {
        mapToast();
    }, []);

    return(
        <div style={mapContainerStyles}>
            <iframe src="https://www.google.com/maps/d/embed?mid=1YYanY-SRGh1d46XEZcPJA_wU_P9tgbX9&hl=en" width="100%" height="100%" title="The Calapooia River" />
        </div>
    )
}

//add a toast indicating that the sidebar may be opened for better map controls

export default IframeMap;
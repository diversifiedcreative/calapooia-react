import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from 'config';
import './customToastify.css';

const mapContainerStyles = {
    height: 'calc(100vh - 56px)',
    width: '100%',
}

toast.configure();

const toastMessage = <div style={{textAlign: "center"}}>Click <img src={baseUrl + 'img/sidebarGoogMapIcon.png'} alt="sidebar logo"/> icon above to open map navigation tools.</div>

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

function Explore () {

    useEffect(() => {
        mapToast();
    }, []);

    return(
        <div style={mapContainerStyles}>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1YYanY-SRGh1d46XEZcPJA_wU_P9tgbX9" width="100%" height="100%" title="The Calapooia River" />
        </div>
    )
}

export default Explore;
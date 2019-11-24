import React, { Component } from 'react';
import '../../css/gallery.css'

class Gallery extends Component {
    render() {
        return (
            <div className="gallery-box" id="navGallery" >  
                <div className="first-image bg-positioning  gallery-filter gallery-border reset-image"></div>
                <div className="second-image bg-positioning  gallery-filter gallery-border reset-image"></div>
                <div className="third-image bg-positioning gallery-filter gallery-border reset-image"></div>
                <div className="fourth-image bg-positioning gallery-filter gallery-border reset-image"></div>
                <div className="fifth-image bg-positioning gallery-filter gallery-border reset-image"></div>
                <div className="sixth-image bg-positioning gallery-filter gallery-border reset-image"></div>

            </div>

        )
    }
}
export default Gallery;
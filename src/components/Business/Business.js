import React from 'react';
import './Business.css';

class Business extends React.Component {
   
    render() {
        const price = this.props.business.price;
        let cena;
        if (price === '€' || price === '$') {
            cena = "cheap"
        } else if (price === '€€' || price === '$$'){
            cena = "average"
        } else if (price === '€€€' || price === '$$$'){
            cena = "expensive"
        } else if (price === '€€€€' || price === '$$$$'){
            cena = "very expensive"
        } else { 
            cena = `no info` 
        }

        return (
            <div className="Business">

                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt=''/>
                </div>
                
                <h2>{this.props.business.name}</h2>

                <div className="Business-information">
                    <div className="Business-reviews">
                        <h3>Type: {this.props.business.category}</h3>
                        <h3 className="rating"> Rating: {this.props.business.rating}</h3>
                        <div className="Business-address">
                            <p>Adress: {this.props.business.address}&nbsp;
                            {this.props.business.city}</p>
                        </div>
                        <p>{this.props.business.reviewCount} reviews</p>
                        <div className="other">
                            <p>Phone: {this.props.business.phone}</p>
                            <p>Price: {cena}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Business;
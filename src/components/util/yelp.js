// import timeout from './fetchWithTimeout';

const apiKey = 'RNs7XN4XBfW-iLD0DdGmIx_VLm7buUU3Kwa05f0vT3p-vEZaNtS7PDV_x0LEX1pfz932iGPC8WxlGgREJGIOALqzYLkbmRpkxsbuLqSw8-h6fiEn3TOfFf79xR37XnYx';
const Yelp = {

    searchYelp(term, location, sortBy){
        document.getElementById('root').style.cursor = `progress`;
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        , {
            headers:{
                Authorization:`Bearer ${apiKey}`
            }
        })
        .then(response => {
        return response.json();
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses && jsonResponse.businesses.length>0) {
                return jsonResponse.businesses.map(business => {
                    document.getElementById('root').style.cursor = `default`;
                    return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    phone: business.phone,
                    price: business.price
                    };
                });
            } else {
                document.getElementById('root').style.cursor = `default`;
                throw new Error('empty response');
            }
        })
        .catch((err) => {
            throw new Error(`${err.message}`);
        })
    }
}

export default Yelp
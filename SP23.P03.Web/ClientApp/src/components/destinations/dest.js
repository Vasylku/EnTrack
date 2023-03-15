/* import {React, useEffect, useState} from 'react';
import DestSearch from "./dest_search.js";
import DestinationCard from "./destinations";


const Dest = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('trains');
    const [stations, setStations] = useState([]);


    useEffect(() => {
       Promise.all([ fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`),
       fetch(`api/stations`)])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => {
                setImages(data1.hits);
                setIsLoading(false);
                setStations(data2);
            })
            .catch(err => console.log(err));
          }, [term]);
    return(
        <div>

            <DestSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

            {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
                <div className="grid grid-cols-3 gap-2 mx-6 justify-items-center">
                    {images.map(image => (
                        <DestinationCard key={image.id} image={image} stations={stations} />
                    ))}
                </div>
                }
        </div>

    )
}
export default Dest; */
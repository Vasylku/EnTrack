import React from 'react';

const DestinationCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <img src={image.webformatURL} alt="" className="w-full"/>
            <div className="px-6 py-4">
                <ul>
                    <li>
                        <strong>Station: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Address: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Review: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
                ))}
            </div>
        </div>
    )
}

export default DestinationCard;
import React from 'react';

interface Creator {
    name: string;
    id: string;
    handle: string;
    pic: string;
}

interface Submission {
    title: string;
    description: string;
    mediaUrl: string;
    thumbnail: string;
    hyperlink: string;
    placeholderUrl: string;
}

interface VideoThumbnailProps {
    creator: Creator;
    submission: Submission;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = (props) => {
    const { title, description, thumbnail } = props.submission;
    const { name, handle, pic } = props.creator;

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative">
                <img src={thumbnail} alt={title} className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <svg
                        className="w-16 h-16 text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.016 13.167l4.242-2.5-4.242-2.5v5z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex items-center mt-4">
                <img src={pic} alt={name} className="w-8 h-8 rounded-full mr-2" />
                <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">@{handle}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoThumbnail;

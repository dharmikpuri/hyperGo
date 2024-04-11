import React, { useState, useEffect } from 'react';
import VideoThumbnail from './Components/VideoThumbnail';

interface Creator {
    name: string;
    id: string;
    handle: string;
    pic: string;
}

interface Comment {
    count: number;
    commentingAllowed: boolean;
}

interface Reaction {
    count: number;
    voted: boolean;
}

interface Submission {
    title: string;
    description: string;
    mediaUrl: string;
    thumbnail: string;
    hyperlink: string;
    placeholderUrl: string;
}

interface Post {
    postId: string;
    creator: Creator;
    comment: Comment;
    reaction: Reaction;
    submission: Submission;
}

interface VideoData {
    posts: Post[];
    page: number;
    offset: number;
}

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Post[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('https://internship-service.onrender.com/videos?page=2');
            const data: VideoData = await response.json();
            console.log('Data from API:', data); // Log the data here
            setVideos(data.posts || []); // Ensure data.posts is not undefined
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    console.log(videos,"videos") // Empty arra is coming 
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Video List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {videos && videos.length > 0 && videos.map((video) => (
                    <VideoThumbnail key={video.postId} creator={video.creator} submission={video.submission} />
                ))}

            </div>
        </div>
    );
};

export default VideoList;

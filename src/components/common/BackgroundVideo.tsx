import React from "react";

interface BackgroundVideoProps {
    className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ className = "body-overlay bg-video" }) => {
    return (
        <video className={className} muted autoPlay loop playsInline>
            <source type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default BackgroundVideo;

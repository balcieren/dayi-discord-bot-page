import { FC, useEffect, useRef } from "react";

interface Props {
  url: string;
  startDelay?: number;
}

const BackgroundVideo: FC<Props> = ({ startDelay = 0, url }) => {
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, startDelay);
  }, []);
  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        zIndex: 0,
        left: "50%",
        top: "50%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        filter: "grayscale(100%)",
      }}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;

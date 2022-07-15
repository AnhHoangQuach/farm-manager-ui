import { useState, useEffect } from 'react';

const useUserMedia = (requestedMedia) => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableVideoStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch (err) {
        // Handle the error
        console.warn(err);
      }
    }

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return () => {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
};

export default useUserMedia;

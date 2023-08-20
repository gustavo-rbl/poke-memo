import { useState } from "react";
import song from "../../assets/audio/battle-screen.mp3";
import { FaVolumeHigh, FaVolumeOff } from "react-icons/fa6";

function AudioPlayer() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="flex flex--center">
        <div onClick={() => setPlay((old) => !old)}>
          {play ? <FaVolumeHigh className="icon--v01" /> : <FaVolumeOff className="icon--v01" />}
        </div>

        {play && (
          <audio src={song} controls loop={true} autoPlay={false} className="fade--in">
            Your browser does not support audio.
          </audio>
        )}
      </div>
    </>
  );
}

export default AudioPlayer;

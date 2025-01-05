import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../API";
import ReactPlayer from "react-player";
/*import JoinScreen from "./components/JoinScreen";
import MeetingView from "./components/MeetingView";
import Controls from "./components/Controls";
import ParticipantView from "./components/ParticipantView";*/


function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
    const onClick = async () => {
      await getMeetingAndToken(meetingId);
    };
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex align-items-center">
          <input
            className="form-control form-control-sm me-2"
            type="text"
            placeholder="Enter Meeting Id"
            style={{ width: "200px" }}
            onChange={(e) => {
              setMeetingId(e.target.value);
            }}
          />
          <button onClick={onClick} className="btn btn-outline-primary me-2">
            Join
          </button>
          {" or "}
          <button onClick={onClick} className="btn btn-outline-primary ms-2">
            Create Meeting
          </button>
        </div>
      </div>
    );
        
}


function ParticipantView(props) {
  const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
      useParticipant(props.participantId);
 
    const videoStream = useMemo(() => {
      if (webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        return mediaStream;
      }
    }, [webcamStream, webcamOn]);
 
    useEffect(() => {
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
 
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
 
    return (
      <div>
        <p>
          Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
          {micOn ? "ON" : "OFF"}
        </p>
        <audio ref={micRef} autoPlay playsInline muted={isLocal} />
        {webcamOn && (
          <ReactPlayer
            //
            playsinline // extremely crucial prop
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            height={"300px"}
            width={"300px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )}
      </div>
    );
}


function Controls(props) {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
      <div>
        <button onClick={() => leave()} class="btn btn-outline-primary ">Leave</button>
        <button onClick={() => toggleMic()} class="btn btn-outline-primary ">toggleMic</button>
        <button onClick={() => toggleWebcam()} class="btn btn-outline-primary ">toggleWebcam</button>
      </div>
    );
}


function MeetingView(props) {
   const [joined, setJoined] = useState(null);
      //Get the method which will be used to join the meeting.
      //We will also get the participants list to display all participants
      const { join, participants } = useMeeting({
        //callback for when meeting is joined successfully
        onMeetingJoined: () => {
          setJoined("JOINED");
        },
        //callback for when meeting is left
        onMeetingLeft: () => {
          props.onMeetingLeave();
        },
      });
      const joinMeeting = () => {
        setJoined("JOINING");
        join();
      };
   
      return (
        <div className="container_meeting">
          <h3>Meeting Id: {props.meetingId}</h3>
          {joined && joined == "JOINED" ? (
            <div>
              <Controls />
              {[...participants.keys()].map((participantId) => (
                <ParticipantView
                  participantId={participantId}
                  key={participantId}
                />
              ))}
            </div>
          ) : joined && joined == "JOINING" ? (
            <p>Joining the meeting...</p>
          ) : (
            <button onClick={joinMeeting} class="btn btn-outline-primary ">Join</button>
          )}
        </div>
      );
}


function App() {
  const [meetingId, setMeetingId] = useState(null);


  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };


  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };


  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Grace's Org",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}


export default App;

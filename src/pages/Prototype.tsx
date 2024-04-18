import protoPoster from "../assets/images/proto-poster.jpg";
import Page from "../components/Page";
import VideoContainer from "../components/VideoContainer";

export default function Prototype() {
  return (
    <Page showBack>
      <VideoContainer
        url="https://d3gpdaqrcqt21a.cloudfront.net/3v_2.mp4"
        poster={protoPoster}
        title="3V Prototype"
      />
    </Page>
  );
}

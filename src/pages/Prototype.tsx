import protoPoster from "../assets/images/proto-poster.jpg";
import Page from "../components/Page";
import VideoContainer from "../components/VideoContainer";

export default function Prototype() {
  return (
    <Page showBack>
      <VideoContainer
        url="https://d35w2e6bivcda.cloudfront.net/proto.mp4"
        poster={protoPoster}
        title="3V Prototype"
      />
    </Page>
  );
}

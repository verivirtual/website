import aboutPoster from "../assets/images/about-poster.jpg";
import Page from "../components/Page";
import VideoContainer from "../components/VideoContainer";

export default function About() {
  return (
    <Page showBack>
      <VideoContainer
        url="https://d35w2e6bivcda.cloudfront.net/about.mp4"
        poster={aboutPoster}
        title="About"
      />
    </Page>
  );
}

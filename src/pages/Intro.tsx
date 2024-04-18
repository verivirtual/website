import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Page from "../components/Page";

export default function Intro() {
  return (
    <Page>
      <div
        className="flex flex-1 flex-grow flex-col justify-center items-center py-4 gap-y-8 md:gap-y-12 mb-4"
        style={{ backgroundColor: "#090909" }}
      >
        <div className="flex justify-center">
          <img src={logo} alt="3V logo" className="max-w-sm" />
        </div>
        <div className="flex flex-col px-8 items-center">
          <div className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </div>
        </div>
        <div className="flex justify-center gap-12">
          <div className="border-b border-white hover:border-b-0 hover:cursor-pointer">
            <NavLink to="/about" className="text-md link-text">
              About
            </NavLink>
          </div>
          <div className="border-b border-white hover:border-b-0 hover:cursor-pointer">
            <NavLink to="/proto" className="text-md link-text">
              3V Prototype
            </NavLink>
          </div>
        </div>
        <div className="text-center">
          For more information, contact the team at
          <br />
          {`info <at> verivirtual <dot> com`}
        </div>
      </div>
    </Page>
  );
}

import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClassComponent from "./ProfileClass";
const About = () => {
  return (
    <>
      <h1>This is about us page</h1>
      {/* <Outlet></Outlet> */}
        <ProfileClassComponent name={"Bhuki maa"} />
    </>
  );
};

export default About;

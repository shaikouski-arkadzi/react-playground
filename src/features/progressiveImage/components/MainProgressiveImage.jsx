import { MyImage } from "./MyImage";

import MushroomSM from "../images/mushroom-small.jpg";
import Mushroom from "../images/mushroom.jpg";

import "../styles/style.css";

function MainProgressiveImage() {
  return (
    <div>
      <h1>Progressive Image</h1>
      <h2>Emulate 3G in DevTools for test</h2>

      <MyImage src={Mushroom} placeholderSrc={MushroomSM} height="300" />
    </div>
  );
}

export default MainProgressiveImage;

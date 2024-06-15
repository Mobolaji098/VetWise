import Alongsidevets from "./alongsidevets";
import Appointment from "./appointment";
import Bettervetcare from "./bettervetcare";
import Frontpage from "./frontpage";
import Frontpagescroll from "./frontpagescroll";
import Navbar from "./navbar";
import Realcare from "./realcare";
import Vetwisebenefit from "./vetwisebenefit";

export default function Landingpage() {
  return (
    <div>
      <Navbar />
      <Frontpage />
      <Frontpagescroll/>
      <Vetwisebenefit/>
      <Alongsidevets/>
      <Appointment/>
      <Bettervetcare/>
      <Realcare/>
    </div>
  );
}

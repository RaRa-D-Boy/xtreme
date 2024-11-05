
import CollectionPage from "./portal/collections/colleactions";
import ContextPage from "./portal/context/context";
import FlyPage from "./portal/fly/page";
import GravityPage from "./portal/gravity/page";
import HomePage from "./portal/home/page";
import MotionPage from "./portal/motion/motion";
import UltraPage from "./portal/ultra/ultra";
export default function Home() {
  return (
    <section className="">
      <HomePage />
      <FlyPage />
      <CollectionPage />
      <UltraPage />
      <ContextPage />
      <MotionPage />
      <GravityPage />
    </section>
  );
}

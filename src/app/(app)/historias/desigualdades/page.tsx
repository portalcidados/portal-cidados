import { Conclusao } from "./components/conclusao";
import Footer from "./components/footer";
import Intro from "./components/intro";
import { IntroMare } from "./components/intro-mare";

export default function Desigualdades() {
  return (
    <div>
      <Intro />
      <IntroMare/>
      <Conclusao />
      <Footer />
    </div>
  );
}
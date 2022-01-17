import Typical from "react-typical";
import { useEffect, useState } from "react";
import "./Text.css";

const Text = () => {
  const [effect, setEffect] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (effect.fade === "fade-in") {
        setEffect({
          fade: "fade-out",
        });
      } else {
        setEffect({
          fade: "fade-in",
        });
      }
    }, 3000);

    return () => clearInterval(timeout);
  }, [effect.fade]);

  return (
    <div>
      Day 1 Studio
      <div className={effect.fade}>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[" Let the journey begin ", 6000]}
        />
      </div>
    </div>
  );
};

export default Text;

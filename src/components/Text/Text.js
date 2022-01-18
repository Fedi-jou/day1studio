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
    }, 9000);

    return () => clearInterval(timeout);
  }, [effect.fade]);

  return (
    <div>
      <div className={effect.fade}>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={["DAY 1 STUDIO", 3000, "Let the journey begin", 7000]}
        />
      </div>
    </div>
  );
};

export default Text;

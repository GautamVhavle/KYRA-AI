import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "What are my rights if I'm arrested by the police?",
        1000,
        "I've been accused of a crime I didn't commit. What should I do?",
        2000,
        "Can I appeal a criminal conviction?",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "40px",
        color: "#EEEEEE",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;

// 리액트 라이브러리
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "@dotlottie/player-component";
// 리액트 컴포넌트
import IntroLogo from "./introLogo.png";

function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/first");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Box
        className="introLogo"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"white"}
      >
        <dotlottie-player
          src="https://lottie.host/888a741c-ec55-4062-8b3c-38b8cd81acf3/DmmLc53jSv.json"
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </>
  );
}

export default IntroPage;

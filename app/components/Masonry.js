"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Masonry() {
  const [isActive, setIsActive] = useState("photos");

  const photoImages = [
    "/images/photo1.jpg",
    "/images/kapil-sharma.jpg",
    "/images/zakir.jpeg",
    "/images/photo1.jpg",
    "/images/kapil-sharma.jpg",
    "/images/zakir.jpeg",
    "/images/photo1.jpg",
    "/images/kapil-sharma.jpg",
  ];


  const handleTabChange = (tab) => {
    setIsActive(tab);
  };

  return (
    <Stack sx={{ maxHeight: "100vh", overflow: "hidden" }}>
      <Stack
        sx={{
          bgcolor: "#0C0C19",
          border: "1px solid #211F44",
          height: "180vh",
          width: "100vw",
          borderRadius: "50% 50% 0 0",
          overflow: "hidden",
          zIndex: 2,
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            borderRadius: "120px",
            bgcolor: "#12121C",
            p: 2,
            zIndex: 2,
            justifyContent: "center",
            textAlign: "center",
            width: 400,
            mt: 10,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          }}
        >
          <Typography
            variant="body1"
            onClick={() => handleTabChange("photos")}
            sx={{
              bgcolor: isActive === "photos" ? "#fff" : "#23232D",
              color: isActive === "photos" ? "#23232D" : "#fff",
              p: 2,
              borderRadius: "30px",
              width: 200,
              cursor: "pointer",
              margin: "10px",
            }}
          >
            Photos
          </Typography>
          <Typography
            variant="body1"
            onClick={() => handleTabChange("videos")}
            sx={{
              bgcolor: isActive === "videos" ? "#fff" : "#23232D",
              color: isActive === "videos" ? "#23232D" : "#fff",
              p: 2,
              borderRadius: "30px",
              width: 200,
              cursor: "pointer",
            }}
          >
            Videos
          </Typography>
        </Stack>
        <Stack
          direction="row"
          width="62vw"
          alignItems={"center"}
          alignSelf={"center"}
          mx="auto"
          gap={3}
          sx={{ marginTop: 10 }}
          flexWrap={"wrap"}
        >
          {isActive === "photos"
            ? photoImages.map((image, i) => (
                <Card
                  key={i}
                  circle={i === 0 || i === 2}
                  square={i === 5 || i === 7}
                  image={image}
                />
              ))
            : Array.from({ length: 3 }, (_, i) => <VideoCard key={i} />)}
        </Stack>
      </Stack>
    </Stack>
  );
}

const Card = ({ circle, square, image }) => {
  return (
    <Box
      sx={{
        border: "1px #fff solid",
        borderRadius: circle ? "86% 89% 2% 79%" : square ? "0%" : "12px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "23%",
        height: 200,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />
  );
};

const VideoCard = () => {
  return (
    <Box
      sx={{
        border: "1px #fff solid",
        borderRadius: "12px",
        backgroundImage: `url(/images/arijit.jpeg?sig=${Math.random() * 100})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "31%",
        height: 400,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />
  );
};

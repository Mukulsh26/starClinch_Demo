"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Masonry from "./components/Masonry";
import Header from "./components/Header";
import DesignTeams from "./components/DesignTeams";

export default function Home() {
	const [category, setCategory] = useState('Comedians');
	const [image, setImage] = useState('/images/zakir.jpeg'); // replace with your image URL
  
	const categories = ['Comedians', 'Dancer', 'Singers'];
	const images = [
	  '/images/zakir.jpeg',
	  '/images/Dancer.jpeg',
	  '/images/Singer.jpg'
	];
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setCategory(prevCategory => {
		  const newIndex = (categories.indexOf(prevCategory) + 1) % categories.length;
		  setImage(images[newIndex]);
		  return categories[newIndex];
		});
	  }, 2000); // Change every 3 seconds
  
	  // Clear interval on component unmount
	  return () => clearInterval(interval);
	}, []);

  return (
    <Stack>
      {/* <Header /> */}
      <Stack
        sx={{
          position: "relative",
          maxHeight: "100vh",
          height: "100vh",
          alignItems: "center",
          my: 10,
        }}
      >
        <Stack
          sx={{
            position: "relative",
            height: 800,
            width: "100vw",
            zIndex: 10,
          }}
        >
          <Stack
            sx={{
              background: "linear-gradient(to bottom, transparent 0%, black )",
              height: 800,
              width: "100vw",
              left: "0",
              top: 0,
              position: "absolute",
              zIndex: 100,
            }}
          />
          <Box
            sx={{
              background: "radial-gradient(circle at center, rgba(61, 35, 33,0.3),rgba(61, 35, 33,1))",
              width: 650,
              height: 650,
              borderRadius: "50%",
              position: "absolute",
              left: "20%",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              border: "10px solid red", // Added red border
            //   overflow: "hidden", // Ensure image doesn't overflow border
            }}
          >
            <img src={image} alt={category} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
				color: 'white',
                top: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {category}
            </Typography>
          </Box>
          <Stack
            sx={{
              position: "absolute",
              right: "5%",
              top: "45%",
              width: "22%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="h1"
              sx={{ mb: 4, textAlign: "left", fontSize: "50px" }}
            >
              <u style={{ color: 'gray', textDecoration: 'none' }}>Choose <br /> from</u> 100+ categories
            </Typography>
			<Typography
              sx={{
                mb: 5,
                textAlign: "left",
                fontSize: "28px",
                background: "linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
                WebkitBackgroundClip: "text",
                cursor: "pointer", // Ensure cursor is a pointer
                WebkitTextFillColor: "transparent",
                display: "inline-block", // Ensure proper clickable area
              }}
            //   onClick={handleClick} // Ensure the click handler is assigned
            >
              Explore All Categories <ArrowRight color="#fff" htmlColor="#fff" />
            </Typography>
          </Stack>
        </Stack>
      </Stack>
			<Masonry />
			<Stack sx={{ mx: "10%", my: 12, gap: 12 }}>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						justifyContent: "flex-start",
						marginBottom: "20px",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(/images/Maggi.jpg)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						marginRight: "12%",
						marginBottom: "20px",
						justifyContent: "flex-end",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(/images/Maggi.jpg)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						marginBottom: "20px",
						justifyContent: "flex-start",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(/images/Maggi.jpg)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						marginRight: "12%",
						marginBottom: "20px",
						justifyContent: "flex-end",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(/images/Maggi.jpg)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
			</Stack>

			<Carousel />
			<Stack>
				<Box
					sx={{
						height: "100vh",
						width: "100%",
						backgroundImage: "url(/images/photo2.png)",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: "10",
						marginBottom: '10%'
					}}
				>
				</Box>
			</Stack>
			{/* <DesignTeams/> */}
			<Footer />

		</Stack>
	);
}

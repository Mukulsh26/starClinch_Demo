"use client";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useState } from "react";

export default function Carousel() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [images, setImages] = useState([
		"/images/nora.jpg",  // Replace with actual image file names
		"/images/image8.jpeg",
		"/images/image7.jpg",
		// Add more local image paths as needed
	]);
	const [texts, setTexts] = useState([
		"Nora Fatehi for an event hosted by XYZ performed at Pune.",
		"Zakir Khan for an event hosted at Pune for Meesho.",
		"Kapil Sharma for an event hosted by XYZ performed at Bangalore.",
		// Add more text descriptions as needed
	]);

	// Function to handle click on left icon
	const handleLeftClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	// Function to handle click on right icon
	const handleRightClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};
	return (
		<Stack
			sx={{
				alignItems: "center",
				my: 24,
				py: 10,
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "40%",
					left: "-35%",
					width: "70%",
					height: "50px",
					bgcolor: "#212127",
					transform: "rotate(-45deg)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					"&::before": {
						content:
							'"Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today"',
						color: "#fff",
						fontSize: 24,
						position: "absolute",
						whiteSpace: "nowrap",
						animation: "marquee 5s linear infinite alternate",
					},
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					bottom: "40%",
					right: "-35%",
					width: "70%",
					height: "50px",
					bgcolor: "#212127",
					transform: "rotate(-45deg)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					"&::before": {
						content:
							'"Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today Headlights of Today"',
						color: "#fff",
						fontSize: 24,
						position: "absolute",
						whiteSpace: "nowrap",
						animation: "marquee 5s linear infinite alternate",
					},
				}}
			/>
			<style>
				{`
					@keyframes marquee {
						0% {
							transform: translateX(0%);
						}
						100% {
							transform: translateX(100%);
						}
					}
				`}
			</style>
			<Typography
				variant="h4"
				fontSize={45}
				color="#fff"
				sx={{ textAlign: "center" }}
			>
				Recent Shows made star-
				<br />
				studded by StarClinch
			</Typography>
			<Stack
				direction="row"
				sx={{
					my: 8,
					alignItems: "center",
					justifyContent: "center",
					gap: 2,
					width: "100%",
				}}
			>
				<IconButton
					onClick={handleLeftClick}
					sx={{
						bgcolor: "#212127",
						boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5);",
					}}
				>
					<ArrowLeft color="#fff" htmlColor="#fff" />
				</IconButton>
				<Stack
					direction="row"
					sx={{
						alignItems: "center",
						width: "60%",
						boxSizing: "border-box",
						justifyContent: "space-between",
					}}
				>
					<Box
						sx={{
							backgroundImage: `url(${images[currentImageIndex]})`,
							backgroundSize: "cover",
							borderTopLeftRadius: "45%",
							borderTopRightRadius: "45%",
							height: 400,
							marginLeft: '10%',
							width: "50%",
						}}
					/>
					<Stack
						sx={{
							width: "30%",
							justifyContent: "center",
							alignItems: "center",
							mt: 2,
						}}
					>
						<Typography variant="h4" fontSize={36} sx={{ letterSpacing: 1.1 }}>
							{texts[currentImageIndex]}
						</Typography>
						<br />
						<Typography style={{marginRight: '30%'}}>
							<CalendarMonthIcon style={{marginTop: '10px'}} color="#fff" htmlColor="#fff" /> 
							<u style={{textDecoration: 'none', fontSize: '20px'}}>14th March 2023</u>
						</Typography>
					</Stack>
				</Stack>
				<IconButton
					onClick={handleRightClick}
					sx={{
						bgcolor: "#212127",
						boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5);",
					}}
				>
					<ArrowRight color="#fff" htmlColor="#fff" />
				</IconButton>
			</Stack>
		</Stack>
	);
}

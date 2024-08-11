import { ArrowRightAltSharp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
	return (
		<Stack
			sx={{
				position: "relative",
				maxHeight: "100vh",
				height: "100vh",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					background:
						"linear-gradient(to bottom, rgba(149, 77, 136,1), rgba(149, 77, 136,0.2))",
					width: 500,
					height: 500,
					borderRadius: "50%",
					position: "absolute",
					left: "-10%",
					top: "10%",
					boxShadow:
						"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				}}
			></Box>
			<Box
				sx={{
					background:
						"radial-gradient(circle at center, rgba(90, 39, 69,0.3),rgba(90, 39, 69,1))",
					width: 600,
					height: 600,
					borderRadius: "50%",
					position: "absolute",
					right: "-25%",
					top: "0%",
					boxShadow:
						"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				}}
			></Box>
			<Stack
				sx={{
					background: "rgba( 255, 255, 255, 0.1 )",
					boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
					backdropFilter: "blur( 40px )",
					WebkitBackdropFilter: " blur( 40px )",
					borderRadius: "300px",
					border: "1px solid rgba( 255, 255, 255, 0.18 )",
					height: 500,
					width: "80vw",
					textAlign: "center",
					p: 8,
					alignItems: "center",
					justifyContent: "center",
					gap: 2,
				}}
			>
				<Typography variant="h1" color="#fff">
					20+ Talented Folks
				</Typography>
				<Stack sx={{ position: "relative", alignItems: "center" }}>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							top: "-60px", // Adjust this value to position the label vertically
							left: "2%",
							rotate: "-20deg",
						}}
					>
						<Typography variant="h5">Fun</Typography>
					</Stack>
					<Stack
						sx={{
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							top: "-160px", // Adjust this value to position the label vertically
							left: "2%",
							rotate: "-20deg",
							color: "#ED7AA6",
							fontFamily: "fantasy",
						}}
					>
						We're the team of
					</Stack>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							top: "-100px", // Adjust this value to position the label vertically
							left: "88%",
							rotate: "20deg",
						}}
					>
						<Typography variant="h5" component="span">
							Inclusive
						</Typography>
					</Stack>
					<Typography
						variant="body2"
						color="#fff"
						sx={{ width: "50%", fontSize: 16 }}
					>
						From passion drived dedication to impactful contribution, we do it
						all here. We are growing and will be excited to hear from you
					</Typography>
				</Stack>

				<Button
					sx={{
						background:
							"linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
						borderRadius: 8,
						textTransform: "capitalize",
						color: "#fff",
						px: 4,
						py: 2,
						fontSize: "1rem",
						mt: 2,
					}}
					endIcon={<ArrowRightAltSharp />}
				>
					Join Our Team
				</Button>
				<Stack
					sx={{
						position: "relative",
						width: "100%",
						bgcolor: "red",
						alignItems: "center",
						// transition: "transform 1s ease-in", // Add transition for smooth scaling effect
						// "&:hover > div": {
						// 	transform: "translateY(-20px)", // Translate upwards and scale up on hover
						// },
						opacity: 0.5,
						transition: "transform 0.3s ease", // Add transition for smooth scaling effect
						"&:hover > div": {
							opacity: 1,
							transform: "translateY(-20px) scale(1.1)", // Translate upwards and scale up on hover
							transition: "transform 0.3s ease", // Add transition for smooth translateY effect
						},
					}}
				>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							bottom: "-80px", // Adjust this value to position the label vertically
							left: "20%",
							rotate: "-20deg",
						}}
					>
						<Typography variant="body1" component="span">
							Focused
						</Typography>
					</Stack>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							bottom: "-80px", // Adjust this value to position the label vertically
							left: "30%",
							rotate: "20deg",
						}}
					>
						<Typography variant="body1" component="span">
							Collaborative
						</Typography>
					</Stack>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							bottom: "-80px", // Adjust this value to position the label vertically
							left: "40%",
							rotate: "-20deg",
						}}
					>
						<Typography variant="body1" component="span">
							United
						</Typography>
					</Stack>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							bottom: "-80px", // Adjust this value to position the label vertically
							left: "50%",
							rotate: "20deg",
						}}
					>
						<Typography variant="body1" component="span">
							Vibrant
						</Typography>
					</Stack>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							bottom: "-80px", // Adjust this value to position the label vertically
							left: "60%",
							rotate: "-20deg",
						}}
					>
						<Typography variant="body1" component="span">
							Dynamic
						</Typography>
					</Stack>
					<Stack
						sx={{
							background: "rgba( 255, 255, 255, 0.01 )",
							boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
							backdropFilter: "blur( 5px )",
							WebkitBackdropFilter: " blur( 5px )",
							borderRadius: "300px",
							border: "1px solid rgba( 255, 255, 255, 0.18 )",
							position: "absolute",
							left: 0,
							px: 3,
							py: 1,
							bottom: "-80px", // Adjust this value to position the label vertically
							left: "70%",
							rotate: "20deg",
						}}
					>
						<Typography variant="body1" component="span">
							Motivated
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}

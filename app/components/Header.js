import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Header() {
	return (
		<Stack
			direction="row"
			alignContent={"center"}
			component={"nav"}
			sx={{ p: 4, boxSizing: "border-box" }}
		>
			<Typography variant="h6" color="#fff">
				Starcinch
			</Typography>
			<Stack
				direction={"row"}
				alignItems={"center"}
				sx={{ ml: "auto", width: "40%", justifyContent: "space-around" }}
			>
				<Typography variant="body1" color="#fff">
					Book Celebrities
				</Typography>
				<Typography variant="body1" color="#fff">
					Join Community
				</Typography>
				<Typography
					variant="body1"
					color="#fff"
					sx={{
						background:
							"linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
						"-webkit-background-clip": "text",
						"-webkit-text-fill-color": "transparent",
					}}
				>
					Post your requirements
				</Typography>
			</Stack>
		</Stack>
	);
}

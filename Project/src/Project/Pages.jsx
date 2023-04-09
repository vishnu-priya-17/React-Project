import React from "react";
import Post from "./Post";

const Pages = () => {
const blogPosts = [
	{
	title: "TODAY'S INFO",
	body: `
The luminosity of a star is a measure of how bright it is (unit watts) while apparent brightness or just brightness  is a measure of how bright it appears to us on Earth(unit W/m^2)`,
	author: "Twinstar ",
	imgUrl:
		"https://lh3.googleusercontent.com/-y_NawPlGmdY/Y-7hOmqf6bI/AAAAAAAAAPk/RcOXyy05RQAxqDJ3KgI1n5ovuaYrAR2XgCNcBGAsYHQ/s1600/1676599608668879-0.png",
	},
	{
	title: "TODAY'S INFO",
	body: `The distance of the star has been obtained from space by the Hipparcod satellite, which was able to determine the distance of stars up to 650 light-years than the parallax method which can only calculate up to 500 light-years.`,
	author: "Twinstar",
	imgUrl:
		"https://lh3.googleusercontent.com/-RCJr2WWeHIQ/Y-ULzf-woHI/AAAAAAAAAPc/Er01iGaVcrgINJ49m6EQE66z8YOSpu-YgCNcBGAsYHQ/s1600/1675955147479580-0.png",
	},
	{
	title: "TODAY'S INFO",
	body: `In radio astronomy ,the jansky, which is the measure of the energy received from a star (in watts) per unit of surface area(square meter) and of frequency observed(hertz). `,
	author: "Twinstar",
	imgUrl:
		"https://lh3.googleusercontent.com/-lValnGoMXIg/Y83lhfvkF9I/AAAAAAAAAPM/NfOlncO8eYEWup4Sc0CxvXpRf_JHM0TBgCNcBGAsYHQ/s1600/1674438019149204-0.png",
	}
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Pages;

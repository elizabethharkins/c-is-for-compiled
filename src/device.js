

// Mobile S - 240px
// Mobile M - 480px
// Mobile L - 532px
// Tablet S - 37.500em, 600px
// Tablet M - 50em, 800px
// Tablet M+ - 52em, 832px
// Tablet L - 56.250em, 900px
// Laptop S - 64em, 1024px
// Laptop M - 68.750em, 1100px
// Laptop M+ - 70em, 1120px
// Lapton Min - 73em, 1168px
// Laptop Standard - 75em, 1200px
// Laptop L - 81.250em, 1300px
// Desktop - 85em, 1360px


// 15em, 240px
// 30em, 480px
// 33.250em, 532px
// 37.500em, 600px
// 50em, 800px
// 52em, 832px
// 56.250em, 900px
// 64em, 1024px
// 68.750em, 1100px
// 70em, 1120px
// 73em, 1168px
// 75em, 1200px
// 81.250em, 1300px
// 85em, 1360px


const size = {
  	mobileS: "240px",
	mobileM: "480px",
	mobileL: "532px",
	tabletS: "600px",
	tabletM: "800px",
	tabletMP: "832px",
	tabletL: "900px",
	laptopS: "1024px",
	laptopM: "1100px",
	laptopMP: "1120px",
	laptopMin: "1168px",
	laptop: "1200px",
	desktop: "1300px",
	desktopL: "1360px"
};

export const device = {
  	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tabletS: `(max-width: ${size.tabletS})`,
	tabletM: `(max-width: ${size.tabletM})`,
	tabletMP: `(max-width: ${size.tabletMP})`,
	tabletL: `(max-width: ${size.tabletL})`,
	laptopS: `(max-width: ${size.laptopS})`,
	laptopM: `(max-width: ${size.laptopM})`,
	laptopMP: `(max-width: ${size.laptopMP})`,
	laptopMin: `(max-width: ${size.laptopMin})`,
	laptop: `(max-width: ${size.laptop})`,
	desktop: `(max-width: ${size.desktop})`,
	desktopL: `(max-width: ${size.desktopL})`,
};

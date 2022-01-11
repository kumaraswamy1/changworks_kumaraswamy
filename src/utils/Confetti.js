import confetti from "canvas-confetti";

const chang = () => {
	confetti({
		particleCount: 150,
		spread: 90,
		scalar: 0.5,
		origin: { y: 1 },
		colors: ["#DAA520", "#FFD700"],
	});
};

export default chang;

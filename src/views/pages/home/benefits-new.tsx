import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import BenefitsImg1 from "../../../assets/images/benefits-bg-1.png";
import BenefitsImg2 from "../../../assets/images/benefits-bg-2.png";

const BenefitsNew: React.FC = () => {
	const alignCenter = { display: "flex", alignItems: "center" };

	return (
		<section className="w-full relative min-h-[100vh] font-grotesk bg-benefitBg bg-no-repeat bg-cover">
			<div className="">
				<Parallax pages={2}>
					{/* <ParallaxLayer
						offset={0}
						speed={0.5}
						style={{ ...alignCenter, justifyContent: "center" }}
					>
						<p className={styles.scrollText}>Scroll down</p>
					</ParallaxLayer> */}

					<ParallaxLayer
						offset={0}
						sticky={{ start: 0 }}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div className={`${styles.card} ${styles.sticky}`}>
							<p>I'm a sticky layer</p>
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={0}
						speed={1.5}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div
							className={`${styles.card} ${styles.parallax} ${styles.purple}`}
						>
							<p>I'm not</p>
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={1}
						speed={1.5}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
							<p>Neither am I</p>
						</div>
					</ParallaxLayer>
				</Parallax>
			</div>
		</section>
	);
};

export default BenefitsNew;



import React from "react";
import "./TheCollection.css";
import { Header } from "./components/Header";
import styled from "styled-components";
const GridWrapper = styled.div`
	background: var(--collection-bg-gradient);
	color: var(--dark-grey);
	font-family: 'Droid Serif', serif;
	font-size: 16px;
	max-width: 80em;
	display: grid;
	grid-template-rows: 1fr 3fr;
	box-shadow:var(--collection-gw-box-shadow);

	@media (min-width: 85em) {
		grid-template-rows: 1.2fr 3.5fr;
		margin: 140px auto 0 auto;
	}
	@media (max-width: 85em) {
		margin: 140px auto 0 auto;
	}
	@media (min-width: 37.5em) and (max-width: 64em) {
		grid-template-rows: 0.9fr 3.5fr;
	}
	@media (max-width: 37.438em) {
		grid-template-rows: 0.5fr 3fr;
	}
	@media (max-width: 30em) {
		grid-template-rows: 0.33fr 3fr;
	}
`;


export const TheCollection = () => {
	return (
		<GridWrapper>

			<Header />

			<div className="collection-content">
				<div className="columns">

					<div className="column one">
						<div className="head">
							<span className="headline hl1">Build, Build, Build!</span>
							<p>
								<span className="headline hl4">I love ...</span>
							</p>
						</div>
						<ul>
							<li>JavaScript</li>
							<li>CSS3</li>
							<li>HTML5</li>
							<li>React</li>
							<li>Node</li>
							<li>Express</li>
							<li>Postgres</li>
							<li>Flexbox</li>
							<li>Grid</li>
							<li>Typography</li>
							<li>Art Direction</li>
							<li>Solutions</li>
							<li>Problem-Solving</li>
							<li>Teamwork</li>
							<li>Learning</li>
							<li>Sharing</li>
							<li>Mentoring</li>
							<li>People</li>
							<li>My Team</li>
							<li>Your Team</li>
							<li>Our Team</li>
							<li>A Job Well Done</li>
						</ul>
					</div>

					<div className="column two">
						<div className="head">
							<span className="headline hl3">Your Story Here!</span>
							<p>
								<span className="headline hl4">JavaScript</span>
							</p>
						</div>
						<p> Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.
							<span className="links">
								<a href="/">Live</a> - <a href="/">GitHub</a>
							</span>
						</p>
					</div>


					<div className="column three">
						<div className="head">
							<span className="headline hl1">Your Story Here!</span>
							<p>
								<span className="headline hl2">Redux</span>
							</p>
						</div>
						<p>Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.
							<span className="links">
								<a href="/">Live</a> - <a href="/">GitHub</a>
							</span>
						</p>
						<figure className="figure">
							<img className="media" src="" alt="" />
							<figcaption className="figcaption">The way you view it is the way you do it.</figcaption>
						</figure>
					</div>

					<div className="column four">
						<div className="head">
							<span className="headline hl3">Your Story Here!</span>
							<p>
								<span className="headline hl4">React</span>
							</p>
						</div>
						<p>Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.
							<span className="links">
								<a href="/">Live</a> - <a href="/">GitHub</a>
							</span>
						</p>
					</div>

					<div className="column five">
						<div className="head">
							<span className="headline hl1">Your Story Here!</span>
							<p>
								<span className="headline hl4">JavaScript</span>
							</p>
						</div>
						<p>Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.
							<span className="links">
								<a href="/">Live</a> - <a href="/">GitHub</a>
							</span>
						</p>
					</div>

					<div className="column seven">
						<div className="head">
							<span className="headline hl1">Your Story Here!</span>
							<p>
								<span className="headline hl4">React</span>
							</p>
						</div>
						<p>Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.
							<span className="links">
								<a href="/">Live</a> - <a href="/">GitHub</a>
							</span>
						</p>
					</div>

					<div className="column six">
						<span className="citation">Confident, calm, driven, intuitive dev with an eye for UX/UI and a heart for people
						</span>
					</div>
					<div className="image"></div>
					<div className="speech-bubble">Let's chat!</div>

				</div>
			</div>

		</GridWrapper>
	);
}




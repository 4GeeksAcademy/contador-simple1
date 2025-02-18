import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Contador } from "./contador.jsx";


//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(false)
	const [isCountdown, setIsCountdown] = useState(false)
	const [alert, setAlert] = useState (0)



	useEffect(() => {		
		if(timer == alert && alert != 0) window.alert("time's up!")

		if (active) {
			setTimeout(() => {
				setTimer(value => value + 1)
			}, 1000)
		}
		if (isCountdown) {
			setTimeout(() => {
				setTimer(value => value - 1)
			}, 1000)
		}

	}, [timer, active, isCountdown])

	const startStop = () => setActive(value => !value)
	const resetTimer = () => setTimer(value=> value=0 )
	const handleChange = e => setTimer(value=> value= e.target.value)


	return (
		<main className="text-center">
			<section className="counter-holder">

				<Contador number={<span className="fa-regular fa-clock"></span>} />
				<Contador number={Math.floor(timer / 100000) % 10} />
				<Contador number={Math.floor(timer / 10000) % 10} />
				<Contador number={Math.floor(timer / 1000) % 10} />
				<Contador number={Math.floor(timer / 100) % 10} />
				<Contador number={Math.floor(timer / 10) % 10} />
				<Contador number={Math.floor(timer % 10)} />
			</section>
			<section className="container text-center my-5">
				<h2>Contador</h2>
				<div>
					<button
						disabled={active}
						onClick={startStop} className="mx-1 btn bg-primary">Start</button>
					<button
						disabled={!active}
						onClick={startStop} className="mx-1 btn btn-danger">Stop</button>
					<button onClick={resetTimer} className="mx-1 btn bg-warning">Reset</button>
				</div>
			</section>
			<section className="container text-center">
				<h2>Cuenta atras</h2>
				<form
					className="form-control"
					onSubmit={e=>e.preventDefault()}>
					<label className="form-text">
						Empezar:
						<input
							className="form-control"
							type="number"
							value={timer}
							onChange={e=> handleChange(e)}
						/>
					</label>
					<div>

						<input
							disabled={isCountdown}
							onClick={()=>setIsCountdown(value => !value)}
							className="my-3 mx-1 btn bg-primary" type="submit" value={"start"}/>
						<input
							disabled={!isCountdown}
							onClick={()=>setIsCountdown(value => !value)}
							className="my-3 mx-1 btn btn-danger" type="submit" value={"stop"} />
					</div>
				</form>
			</section>
			<section className="container text-center my-5">
				<h2>Alerta</h2>


				<form
					className="form-control"
					onSubmit={e => e.preventDefault()}>
					<label className="form-text">
						Alerta en:
						<input
							className="form-control"
							type="number"							
							onChange={e => setAlert(value => value = e.target.value)}
						/>
					</label>
					<div>

						<input							
							onClick={()=>window.alert("Alert created")}
							className="my-3 m-1 btn bg-info" type="submit" value={"Crear"} />
					</div>
				</form>
			</section>
		</main >
	);
};

export default Home;



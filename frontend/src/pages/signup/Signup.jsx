
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [input, setInput] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInput({ ...input, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(input);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1'>
				<h1 className='text-3xl font-semibold text-center text-white'>
					Sign Up <span className='text-blue-900'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2 tracking-wide'>
							<span className='text-base label-text tracking-wide font-bold text-black '>Full Name:</span>
						</label>
						<input
							type='text'
							placeholder='Type full name'
							className='w-full tracking-wide  input placeholder-gray-500 text-white border-black h-10'
							value={input.fullName}
							onChange={(e) => setInput({ ...input, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text tracking-wide font-bold text-black'>Username:</span>
						</label>
						<input
							type='text'
							placeholder='Create a username'
							className='w-full tracking-wide  input border text-white placeholder-gray-500 border-black h-10'
							value={input.username}
							onChange={(e) => setInput({ ...input, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text tracking-wide font-bold text-black'>Password:</span>
						</label>
						<input
							type='password'
							placeholder='Enter password'
							className='w-full tracking-wide  input placeholder-gray-500 text-white border-black h-10'
							value={input.password}
							onChange={(e) => setInput({ ...input, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text font-bold tracking-wide text-black'>Confirm Password:</span>
						</label>
						<input
							type='password'
							placeholder='Confirm password'
							className='w-full tracking-wide  input placeholder-gray-500 text-white border-black h-10'
							value={input.confirmPassword}
							onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

					<Link
						to={"/login"}
						className='text-sm text-white hover:underline hover:text-blue-300 mt-2 inline-block'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border bg-black border-white text-white' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;

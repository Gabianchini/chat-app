const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
	return (
		<div className='flex'>

			<div className='form-control gap-2'>
				<label className={`label gap-2 cursor-pointer pl-3 ${selectedGender === "male" ? "selected" : ""}`}>
					<input
						type='checkbox'
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
						/>
						<span className='label-text'>Male</span>
				</label>
			</div>
			
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer pl-3 ${selectedGender === "female" ? "selected" : ""}`}>
					<input
						type='checkbox'
						className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
						/>
						<span className='label-text'>Female</span>
				</label>
			</div>
			
            <div className='form-control'>
				<label className={`label gap-2 cursor-pointer pl-3 ${selectedGender === "non binary" ? "selected" : ""}`}>
					<input
						type='checkbox'
						className='"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">'
						checked={selectedGender === "non binary"}
						onChange={() => onCheckboxChange("non binary")}
						/>
						<span className='label-text'>Non Binary</span>
				</label>
			</div>
			
            <div className='form-control'>
				<label className={`label gap-2 cursor-pointer pl-3 ${selectedGender === "I prefer not to say" ? "selected" : ""}`}>
					<input
						type='checkbox'
						className='"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">'
						checked={selectedGender === "I prefer not to say"}
						onChange={() => onCheckboxChange("I prefer not to say")}
						/>
						<span className='label-text'>I prefer not to say</span>
				</label>
				
			</div>

		</div>
	);
};
export default GenderCheckbox;
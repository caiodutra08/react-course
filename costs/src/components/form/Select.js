import React from "react";
import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
	return (
		<div className={styles.form_control}>
			<label htmlFor={name}>{text}:</label>
			<select name={name} id={name} onChange={handleOnChange} value={value || ""}>
				<option>Selecione uma categoria</option>
				{options.map(({ id, name }) => (
					<option value={id} key={id}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;

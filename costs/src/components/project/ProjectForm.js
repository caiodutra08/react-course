import React from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
	return (
		<form className={styles.form} action="">
			<Input
				type="text"
				text="Nome do projeto"
				name="name"
				placeholder="Insira o nome do projeto"
			/>
			<Input
				type="number"
				text="Orçamento do projeto"
				name="budget"
				placeholder="Insira o orcamento total"
			/>
			<Select text="Categoria" name="category_id" />
			<SubmitButton text={btnText} />
		</form>
	);
}

export default ProjectForm;

import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
	const [ingredients, setIngredients] = useState([
		"all the main spices",
		"pasta",
		"ground beef",
		"tomato paste",
	]);

	const [recipeShown, setRecipeShown] = useState(false);

	function addIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

	function getRecipe() {
		setRecipeShown((prevRecipe) => !prevRecipe);
	}

	return (
		<main>
			<form className="add-ingredient-form" action={addIngredient}>
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingridient"
					name="ingredient"
				/>
				<button>Add ingridient</button>
			</form>
			{ingredients.length > 0 ? (
				<IngredientsList recipe={getRecipe} ingredients={ingredients} />
			) : null}
			{recipeShown ? <ClaudeRecipe /> : null}
		</main>
	);
}

import { useState, useRef, useEffect } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../jsfunctions/ai";

export default function Main() {
	const [ingredients, setIngredients] = useState([
		"chicken",
		"all the main spices",
		"corn",
		"heavy cream",
		"pasta",
	]);
	const [recipe, setRecipe] = useState("");
	const [error, setError] = useState("");
	const recipeSection = useRef(null);

	function addIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		if (newIngredient === "") {
			setError("Nothing to add");
		} else {
			setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
			setError("");
		}
	}

	function removeIngredient(props) {
		setIngredients((prevIngredients) =>
			prevIngredients.filter((ingredient) => ingredient !== props)
		);
	}

	async function getRecipe() {
		console.log("Getting the recipe");
		const recipeMarkdown = await getRecipeFromMistral(ingredients);
		setRecipe(recipeMarkdown);
		console.log("Displaying the recipe");
	}

	useEffect(() => {
		if (recipe !== "" && recipeSection.current !== null) {
			recipeSection.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [recipe]);

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
			{error.length > 0 ? <h2 style={{ color: "red" }}>{error}</h2> : null}
			{ingredients.length > 0 ? (
				<IngredientsList
					ref={recipeSection}
					recipe={getRecipe}
					ingredients={ingredients}
					remove={removeIngredient}
				/>
			) : null}
			{recipe ? <ClaudeRecipe recipe={recipe} /> : null}
		</main>
	);
}

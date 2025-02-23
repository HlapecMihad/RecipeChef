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
	const [numberOfPeople, setNumberOfPeople] = useState(1);
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
		console.log(`Getting the recipe for ${numberOfPeople} people`);
		const recipeMarkdown = await getRecipeFromMistral(
			ingredients,
			numberOfPeople
		);
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
			<div className="form-container">
				<form className="number-of-servings-form">
					<legend>Number of servings</legend>
					<input
						type="number"
						onChange={(e) => setNumberOfPeople(Number(e.target.value))}
						defaultValue={1}
					/>
				</form>
				<form className="add-ingredient-form" action={addIngredient}>
					<div className="add-ingredient-form-input">
						<legend>Add ingredients</legend>
						<input
							type="text"
							placeholder="e.g. oregano"
							aria-label="Add ingridient"
							name="ingredient"
						/>
					</div>
					<button>Add ingridient</button>
				</form>
			</div>
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

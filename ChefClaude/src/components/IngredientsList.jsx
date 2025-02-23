export default function IngredientsList(props) {
	const mappedIngredients = props.ingredients.map((ingredient) => (
		<div className="ingredient-list" key={ingredient}>
			<li className="ingredient-list-li">{ingredient}</li>
			<button
				className="ingredient-list-button"
				onClick={() => props.remove(ingredient)}
			>
				Remove
			</button>
		</div>
	));

	return (
		<section>
			<h2>Ingredients on hand:</h2>
			<ul className="ingredients-list" aria-live="polite">
				{mappedIngredients}
			</ul>
			{props.ingredients.length > 3 ? (
				<div className="get-recipe-container">
					<div ref={props.ref}>
						<h3>Ready for a recipe?</h3>
						<p>Generate a recipe from your list of ingredients.</p>
					</div>
					<button onClick={props.recipe}>Get a recipe</button>
				</div>
			) : null}
		</section>
	);
}

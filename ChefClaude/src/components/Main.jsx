export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const mappedIngredients = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit() {
        console.log("Form submitted!")
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingridient"
                />
                <button>Add ingridient</button>
            </form>
            <ul>
                {mappedIngredients}
            </ul>
        </main>
    )
}
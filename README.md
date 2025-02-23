# RecipeChef

A user-friendly recipe app where you can input your ingredients, and the Mistral AI generates a recipe based on what you've got.

## Prerequisites

Before you begin, ensure you have the following versions installed:

- **npm**: 10.9.2 (`npm -v`)
- **node**: 23.6.1 (`node --version`)

## Caution
You need to get your own API key from "https://huggingface.co/" and put it into "./src/jsfunctions/ai.js".  
Change "const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)" to "const hf = new HfInference(YOUR API KEY !!!)", otherwise you won't be able to get back the recipe based on ingredients and servings.

## Getting Started

### To run this project on your local machine, follow these steps (if you are using vscode and cmd):

#### Using cmd:

1. clone this repository
2. "cd RecipeChef/ChefClaude"
3. "code ." (to open up vscode)

#### Using vscode:

4. npm install
5. npm run dev

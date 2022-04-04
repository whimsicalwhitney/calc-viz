## Setup

`npm i`

See package.json engines section for npm and node requirements.


## Usage

To run locally: `npm start`

To run tests: `npm test`

### Routes

#### **POST /calculate**

```curl
curl --location --request POST 'http://localhost:3000/calculate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "expression": "sqrt(3^2 + 4^2)"
}'
```

#### **POST /vizualize-calculation**

```curl
curl --location --request POST 'http://localhost:8080/vizualize-calculation' \
--header 'Content-Type: application/json' \
--data-raw '{
    "expression": "3+4*2-1"
}'
```

## Thoughts on implementation


I started by following the instructions on building a calculator and realized that I'd realistically use an existing, well-tested library to execute. After that, I started thinking about how I could reflect my values in interests in this project. This led me to visulizations.

I like using visuals to learn, so I approached this problem from the perspecitve of a user wanting to see how a calculation is evaluated step-by-step. The original idea is to have an input in the UI where a user can type a mathematical expression (integers only) and click a button to "evaluate". When the button is clicked, the UI will send a request to the API with the expression as the request body. The API will return instructions for how the UI should visualize the calculation for the user. For example, if the expression is 3+4*2, the API would deliver instructions to render 4 circles, double each circle, then render 3 additional circles. The UI would then draw 4 circles on the page, split each of those 4 circles into two (similar to how a cell divides), the draw 3 more circles. The screen will have a total of 11 circles drawn by the end of the calculation visualization.


The idea isn't fully fleshed out as I spent only a couple hours on this. Ideally, I'd like some more guidance from "product/design" on some use cases. For example, with this model, how should division be displayed? How should calculations that result in non integers be displayed (like 5÷3)? What about negative numbers? How should invalid expressions be messaged to the user? Will we want to change how the UI vizualizes the calculation? Will we want the user to be able to choose how the calculation is vizualized?


From the API perspective, there are still more facets to consider. Is the response flexible enough to allow various UIs to visualize with different methods but specific enough that each step is captured in the directions?


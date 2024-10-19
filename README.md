To run the code:
run command: 
node shamir_answer.js

To solve the problem of finding the constant term c of a polynomial using Shamir's Secret Sharing algorithm, follow these steps:

Step 1: Parse the JSON Input
Read the JSON input to extract the number of roots n and the minimum number of roots k required.
Extract each root, which consists of a key (x-value) and a value encoded in a specific base.
Step 2: Decode the Y Values
For each root, decode the y-value from its specified base to a decimal integer.
Use the base conversion method to convert the encoded y-value to a decimal number.
Step 3: Select the Required Roots
Since k=m+1, select any k roots from the provided n roots to construct the polynomial.
Step 4: Use Lagrange Interpolation
Apply Lagrange interpolation to find the polynomial that passes through the selected k points.
The polynomial is of degree m, and you need to find the constant term c.
Step 5: Calculate the Constant Term c
The constant term c is the y-intercept of the polynomial, which can be found using the Lagrange interpolation formula.
Final Answer
Print the constant term c.

#Recipe proportions calculator

An online calculator for comparing different recipes for a single dish.

This was inspired when I was looking for a chutney recipe: there seemed 
to be a variety of recipes that used a wide range of different proportions. 
I wanted to compare these, but it was a bit of a manual job so I decided 
to automate it.

For each recipe, a set of ingredients is input; the amount for each of 
the ingredients is normalised (so that all different measurements, 
including imperial, cups (volume) and eggs can be compared against 
metric measurements), and a bar produced using a canvas element so that 
the proportions can be seen. This can be repeated for each different 
recipe and the proportions compared.

Currently the measurements are all assumed to be grammes.


##Still to do

- Produce sectioned canvas bar (colour coded)
- Create normalisation formulae and function
- Write the list of ingredients on the page as they're entered
- Produce further results divs on the page using Javascript 
- Make the bar responsive - read the length when it's less than 600px


##Future ideas

- Produce fallback for older browsers, maybe using ASCII art
- Save results in a database so they can be returned to
- All ingredients listed and displayed in alphabetical order
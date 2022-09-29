# FEW Assessment

The problem presented here is meant to simulate a coding interview. Use this as a a way to measure your progress and current ability. The problem includes many of the concepts covered in class and should give you an opportunity to see how much you have mastered. 

This assessment is meant measure your skills in: 

1. HTML
2. CSS
3. JavaScript

Read the description below. Feel free to ask as many clarifying questions as you might need to to get a clear picture of what is expected. 

Your goal taking the assessment is to create the project pictured below:

![Screen Shot](screen-shot.png)

To create this you'll need to use HTML and CSS.

This web page has some functionality pictured in the animated Gif below. You'll use JavaScript to create this functionality. 

![Example](example.gif)

It should completed wholley with vanilla HTML, CSS, and JS. 

## Submission Instructions

Zip your solution and submit it to GradeScope. 

## Challenge 1 - HTML

The first challenge is to create the markup. At this stage your project will not look like the example. The goal of this section is write the markup that can later be styled to look like this solution. 

1. **Create an html** file with the default HTML markup. This should include: 
  1. doctype, html, head, title, and body tags
2. **Add four sections** to your page. You'll be adding different content and styling each of these sections as described below. 
3. **Add content** to each of your sections. Refer to the images above for a visual guide to what you need to have. 
  1. The first section (upper left) should display your name as a heading followed by "FEW Assessment"
  2. This section (upper right) should contain three inputs each with a label. Each input should have a label. The first two inputs should take numbers as input, and the last should input a color. 
		1. Label: Width, input type: number
		2. Label: Height, input type: number
		3. Label: Color, input type: color (type color will show the color picker)
	3. (Lower left) Should display some fixed headings and some dynamic values that you will add with JavaScript. 
		1. Title: Width
		2. Title: Height
		3. Title: Color 
	4. The last section (lower right) will display a box. The size and color of the box will controlled by JavaScript. 

## Challenge 2 - CSS

You should write the CSS here yourself, do not use Bootstrap or other CSS library. Your goal is to style the mark up you wrote in the last challenge to look like the images above. 

1. Set the font for all elements to Helvetica. 
2. Arrange the four sections into a grid. Each section should 200px by 200px with a 1px solid black border.  
3. Position all four elements in the center of the page. 
3. Use Flex Box to arrange the contents of each section/box in a column and centered on the main axis.
4. The inputs should all have a 1px border and 0.5em of padding.  

## Challenge 3 - JavaScript

You should use vanilla JS for this section. Don't use any libraries. 

The goal of this section is write JavaScript that will create the functionality shown in the animated gif above and described below. 

**Overview:** Changing the values in the inputs in the upper right should display those values in the in the lower left, and change the width, height, and color of the box in the lower right. Watch the animated gif example it shows the features in use live. 

- Use JavaScript to reference DOM elements. This is a general instruction. You'll need to define a variable that referenes each of the inputs and display elements.
- Use event listeners to display values entered in the form elements in the box in the lower left. See the example above. 
	- Changing the width in the width input should display the value of the width followed by px in the box in the lower left. The width of the colored box in the lower right should change it's width to match the entered value in px.
	- Changing the height in the height input should display the value in the lower left. The height of the colored box in the lower right should change it's height to match the value entered in px. 
	- Changing the color should display the color value in the lower left. The colored box in the lower right should change it's color to match the color chosen. 

# 1700_Final_Web_Assessment

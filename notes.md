Create start page
3 different screens we're creating
Keep track of some state that indicates if the initial screen should be displayed or the quizz should be displayed

Requirements
Two screens (Start and questions)
Pull 5 questions from te OTDB API
Tally correct answers after "check answer" is clicked
Styled and polished

Some hints:

- Use a library to decode HTML entities on response from API (he or html-entities)
- Create new array with all answers. Randomly insert the correct_answer into the array with the incorrect_answers. Use google/ChatGPT for help on how to shuffle items in an array at random or how to insert an item randmly into a array
- Limit answer choice to 1 and stle selected answer: either (1) track the selected answer index inside each quesiton object, OR (2) use an HTML form w/radio

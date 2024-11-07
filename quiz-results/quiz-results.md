Quiz Results
============

Go1 supports learners completing quizzes on subjects they are learning. For this challenge, we'll focus on quizzes that only have multiple-choice questions, but each question only has one correct answer, and learner can only select single answer (each answer to the question is one of A, B, C or D).

For this challenge, we'll be looking at the quality of a given quiz. The dataset contains a list of correct answers (for all questions in quiz) and a list of anonymised learner answers.

We're interested in finding out about what's the easiest question in the quiz. The easiest question is question most learners get correct.

Return the index of the question most learners get correct.

Example input:
```json
// Correct Answers 
["A", "B", "C"]

// Learner Responses 
[
    ["A", "B", "B"],
    ["C", "B", "C"],
    ["A", "B", "C"],
    ["B", "B", "A"],
    ["A", "B", "C"]
]
```

Example output:
```json
"The easiest question is index 1"
```

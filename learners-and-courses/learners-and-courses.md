Learners and Courses
====================

Learners are people using Go1 to learn something. Courses are videos, quizzes, interactive experiences, etc. 

For this challenge, the dataset contains a map of LearnerIds and a list of CourseIds that the Learner's have completed.

We'd like to know about courses that have only been completed by a single learner.

Return a list of CourseId's that have only been completed by 1 Learner.

Example input:
```json
{
  "Learner-0001": [
    "Course-0001",
    "Course-0002",
    "Course-0003"
  ],
  "Learner-0002": [
    "Course-0002",
    "Course-0003",
    "Course-0004"
  ]
}
```

Example output:
```json
[ "Course-0001", "Course-0004" ]
```
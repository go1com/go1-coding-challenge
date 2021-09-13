How To Add A New Code Challenge
===============================

To add a code challenge please follow these steps:
1. Verify your question meets our standards, and they you have tested the question with a peer.
1. Create a new directory with a ```challenge-name``` that is indicative of the data used in the challenge.
1. Create ```challenge-name.md```. Add your challenge using the template included below. 
1. Create 3-5 json data samples for the problem space and put them in ```challenge-name.data.md```. Small descriptions of the data are allowed, but keep it minimal.
1. Create a new child Confluence page [here](https://go1web.atlassian.net/wiki/spaces/PE/pages/2134704603) called ```challenge-name```.
1. Double check everything and create an MR.
1. Ask the #technical-interviewers Slack channel for review, and translation assistance.
1. Once there is general signoff, check-in!


What Makes A Good Coding Challenge
----------------------------------

Good coding challenges:
- are solvable in a limited amount of time
- are 2-step challenge
- have mulitple ways to solve the challenge
- have a link to Go1
- are scalable

Interviews are short, 60 minutes disappears so quickly. If you, the creator of the question, can't solve the challenge in less than 10 minutes it's too difficult.

Aim for 2-step coding problems. These tend to be the sweet spot between too hard and too easy. The way to think of 2-step questions is that there is an intermediate step required between input and the result. For instance, in [Learners and Courses](./challenges/learners-and-courses.md), the first step is to count the number of learners for a course, the second step is to limit the result to only courses with a count of 1. 

If there is only a single way to solve a challenge, candidates have less options to move the challenge forward. Try to create challenges that are open to multiple solutions. The easiest way to ensure this is to have fairly simple output states. Very specific output expectations create more constraints, and less solution options.

A good challenge is in the language of Go1. Every candidate has used an online learning tool before. A coding challenge that uses online learning concepts allows us to share some of what we do with candidates.

An absolute must is the ability to scale the question. Some candidate will be nervous and this will lead them to brain block! Having a path to simlify can help candidates overcome the block with a quick win, then they can come back to the original problem. Other candidates may have seen the problem before, and having an option to increase the complexity is important to not waste candidate and interviewers time.


Code Challenge Template
-----------------------

```markdown
{CODING CHALLENGE NAME}
=======================

{Description of the data}

{Description of the problem}

{Clear directive of what is required}

{Simple example of output}
```


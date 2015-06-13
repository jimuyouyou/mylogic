# branch for all in one - frontend & backend, without REST

# mylogic
Detect and enhance one's logic

## issues
https://github.com/jimuyouyou/mylogic/issues

## clone
git clone https://github.com/jimuyouyou/mylogic.git

## How to edit it
- e:
- cd work/mylogic
- meteor
- http://localhost:3000/

## how to get code
git pull

## how to commit code
- git add -A
- git commit -m "background for all"
- git push

## packages
- meteor add bootstrap
- meteor add iron:router
- meteor add ian:accounts-ui-bootstrap-3
- meteor add accounts-password
- meteor add sanjo:jasmine
- meteor add velocity:html-reporter

## url
- http://jasmine.github.io/2.3/introduction.html
- https://atmospherejs.com/sanjo/jasmine
- https://github.com/iron-meteor/iron-router

## general design
### questions
- support different question types: single choice, multiple choice, blank fill
- each question, anwser has its own tag and value, dvalue and exp
- question has additional tag atag, a combined value of anwser tag
- question has anws, refers to answers lable value
- question has qtype, namely question type

### question and report
- each person can take all questions
- when registering automatically a user get his record, in collection quest_userid: question id, status(-1 unansered, 0 wrong, 1 correct), and tags, atags
- atags will be updated automatically at midnight if necessary, this can be ensured at the input as well
- when registering automatically a user get his report, in collection report_userid
- report is generated when user manually click generate report
- report is generated automatically at midnight for all users
- report list tags with strong/weak level, and a link of correct/wrong answers attached to the tag, inside which is a link to each question
- a link of practice similiar questions for all tags
- a link of explanations of each tag


### tags 
- tag, exp

### practice
- choose those not anwsered questions by default
- customized questions by tag, atag

### report analysis
- UserReport: {userId, stag, crate, level}
- question tag is general categeory, atag is detail for anwsers
- analyze by both tag and atag, seperated by comma
- inc+ and dec+ for each correct/incorecct question/anwser
- sort by percentage dec+, tag-specific, question tag 

### dynamic collection name is required






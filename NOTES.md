***MVP Community Dashboard***

* What admins want to know:
    - Who is recording their classes?
    - With what frequency?
    - How are the trends in teacher talk vs student?
    - Are teachers sharing info with one another?

* What teachers want:
    - Privacy
    - Don't want data used against them in evaluations

**SHAPE OF OUR DATA**

    *USERS*
    {
        "userId":"B8zm5UUVCzW2mETioupSlJZ6mRA3",
        "signUpDate":"2019-01-25T23:23:25.886Z",
        "role":"Teacher",
        "subjectTaught":null
    }

    *RECORDING*
    {
        "recordingId":"PPBzcDhnJlTFXk39THlR",
        "userId":"BWf6JYY87lQhjsYRZFxThUPHcXD3",
        "startDateTime":"2018-09-28T16:28:18.785Z",
        "duration":3834,
        "teacherTalk":36,
        "studentTalk":56,
        "groupTalk":5,
        "silence":2,
        "studentTalkGoal":0,
        "platform":"web",
        "browser":"Chrome",
        "device":null,
        "sharedWith":[]
    }

*Technical Goals*
    <!-- - Read the data from the files  -->
    <!-- - Format data to use -->
    - Create front end displaying data (but what data?)

*Overall Goal*
    - show administrators just enough data to satisfy their curiosity about usage
    - package the data in a way that tells a flattering, successful story
    - maintain the trust of our users, so it is very important that users feel that this community dashboard respects and protects their privacy

**Brainstorm**
    Given the data we have, what information can we draw? What is the most useful data? Flattering data?

    * show % of teacher / student talk over time
      ** If we take it as a given that increased student talk === better learning, then seeing an increase in student talk over time presents a flattering image for TeachFX's usage
      
    * show how consistently teachers are able to hit their % goals

    * show which role uses app most 
    * show which subject uses app most
    * show which subjects has most student talk
    * Anonymous analytics
      * % of users who use chrome / mobile / android / etc.
      * average duration of recordings

**Feature #1**
    * Show teacher & student talk % over time
      ** Show average %
      ** Show % by user
      ** Show % by subject
      ** % by role

**Feature #2**
    * Pie chart of recording. Student vs teacher vs 
      * Use a library to speed up developement
    * Create a pie chart for each recording for talk %s
      

**To Dos**
<!-- * Pie chart for talk % -->
<!-- * Pie chart for platform use -->
* What role records most - basic column chart
* What subject records most - basic column
* Student talk trend over time
* Info about whether reach their student talk goals
* Create widgets for each one
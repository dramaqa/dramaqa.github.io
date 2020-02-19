---
layout: page
title: Workshop 2020
headertitle: '<br><h1 class=title>2nd DramaQA Workshop 2020</h1>'
subtitle: '<h4 class="subtitle">16TH EUROPEAN CONFERENCE ON COMPUTER VISION, <br>Glasgow’s Scottish Event Campus (SEC) , GLASGOW, <br>23-28 AUGUST 2020</h4><br><a class="btn btn-default" href="https://eccv2020.eu//"><img src="/assets/img/eccvlogo.png" style="max-width: 5em; padding: 0.1em 0.1em; background-color:#FFFFFF;"></a><br><br>'
permalink: /Workshop/2020
feature-img: "assets/img/main.png"
---


<link rel="stylesheet" href="/assets/css/member.css">

<style>
    table {
        width: 100%;
    }
    
    div.content-container{
        position: relative;
        background-image: url(/assets/img/workshop/main.png);                                                               
        height: 400px;
        background-size: cover;
        z-index: 200;
    }
    
    span{
        text-indent: 10px;
    }
</style>

<div class="content-subcontainer" style="TEXT-ALIGN: left; color:black" id="top">
  <h2> 1. Call for Papers </h2>
  <p>
  The ability to craft and understand stories is a crucial cognitive tool used by humans for communication. According to computational linguists, narrative theorists and cognitive scientists, story understanding is a good proxy to measure the readers' intelligence. Readers can understand a story as a way of problem-solving in which, for example, they keep focusing on how main characters overcome certain obstacles throughout the story. Readers need to make inferences both in prospect and in retrospect about the causal relationships between different events in the story.
  </p>
  <p>
  Video story data such as TV shows and movies can serve as an excellent testbed to evaluate human-level AI algorithms from two points of view. First, video data has different modalities such as a sequence of images, audio (including dialogue, sound effects and background music) and text (subtitles or added comments). Second, video data shows various cross-sections of everyday life. Therefore, understanding video stories can be thought of as a significant challenge to current AI technology, which involves analyzing and simulating human vision, language, thinking, and behavior.
  </p>
  <p>
  This workshop aims to invite experts from various fields, including vision, language processing, multimedia, and speech recognition, to provide their perspective on existing research, and initiate discussion on future challenges in data-driven video understanding. To assess current state-of-the-art methodologies and encourage rapid progress in the field, we will also host a challenge based on the DramaQA dataset, which encourages story-centered video question answering. Topics of interest include but are not limited to:
  </p>
  <li>Deep learning architectures for multi-modal video story representation</li>
  <li>Question answering for video stories</li>
  <li>Summarization and retrieval from long story video contents</li>
  <li>Scene description generation for video understanding</li>
  <li>Activity/event recognition from video</li>
  <li>Character identification & interaction modeling in video</li>
  <li>Scene graph generation and relationship detection from video</li>
  <li>Emotion recognition in video</li>
  <li>Novel tasks about video understanding and challenge dataset</li>
  
  <p>
  This workshop will invite leading researchers from various fields. We encourage submissions of papers as <b><i>extended abstracts of 4 pages in ECCV format</i></b>. Accepted submissions and challenge winner and runner up teams will be invited to present their work at the workshop.
  </p>
</div> <br />

<div class="content-subcontainer" style="TEXT-ALIGN: left; color:black">
  <h2> 2. Important Dates </h2>
  Signup to receive updates: <a href="https://forms.gle/KJ7TT9YQAedsjhBq6">link</a>
  <br>
  Paper Submission Deadline: TBD
  <br>
  Workshop Date: Aug 28, 2020 (Full day)
</div> <br /> <br />

<div class="content-subcontainer">
    <h2 class = "content-title" style="TEXT-ALIGN: left; color: black;">
      3. Organizers
    </h2>
    <div class="content-item" style="TEXT-ALIGN: center;">
      {% for person in site.data.people_workshop2020 %}
        <div class="member" style="vertical-align: top; width: 250px;">
          <div class="member-profile">
            <img class="member-profile" src="{{person.src}}" alt="person">
          </div>
          <div class="member-name member-name">
            {{ person.name }}
          </div>
          <div class="member-info member-position">
            {{ person.affiliation }}
          </div>
        </div>
      {% endfor %}
    </div>
</div> <br />

<div class="content-subcontainer" style="TEXT-ALIGN: center; color:black">
<footer>
  <p class="pull-right"><a href="#top">Back to top</a></p>
  <p>© 2019 Video Intelligence Center @ Seoul National University </p>
</footer>
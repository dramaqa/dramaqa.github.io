---
layout: page
title: Challenge 2020
headertitle: '<br><h1 class=title>2nd DramaQA Challenge 2020</h1>'
permalink: /Challenge/2020
feature-img: "assets/img/main.png"
---

<link rel="stylesheet" href="/assets/css/member.css">

<div class="challenge content-container">
  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      1. Overview
    </h2>
    <p class="content-item">
      DramaQA challenge will be conducted as a proxy task of the Turing Test for video story understanding. 
      DramaQA is a story-centered video question answering dataset which uses episodes from a TV drama series, 
      Another Miss Oh <i>(We received official permission to use these episodes for research purposes from the content provider.)</i> as the source. 
      The DramaQA dataset provides video clips with visual annotations (e.g., characters, place, objects and objects related to the characters), 
      subtitles with co-reference annotations (to the characters) and QA sets with carefully designed multi-level difficulty annotations. 
      Evaluation metric is the accuracy of multiple-choice QA sets. 
    </p>
  </div> <br />

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      2. Important Dates
    </h2>
    <div style="overflow-x: auto">
     <li>
       In March, DramaQA Dataset v1.0 is released.
     </li>
     <li>
       In April, The 2nd DramaQA Challenge 2020 launched.
     </li>
     <br>
     Details will be announced soon. <br>
     Signup to receive updates: <a id="link" href="https://forms.gle/KJ7TT9YQAedsjhBq6">link</a>
    </div>
  </div> <br /> <br />

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      3. Organizers
    </h2>
    <div class="content-item">
      {% for person in site.data.people_challenge2020 %}
        <div class="member">
          <div class="member-profile">
            <img class="member-profile" src="{{person.src}}">
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
  
</div>
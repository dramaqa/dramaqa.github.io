---
layout: home
permalink: /
title: About
feature-img: "assets/img/pexels/circuit.jpeg"
---

<link rel="stylesheet" href="/assets/css/member.css">
<link rel="stylesheet" href="/assets/css/sponsor.css">

<div class="about content-container" style="TEXT-ALIGN: center">
  <br />
  <h1 class = "content-title">
    DramaQA for Video Story Understanding
  </h1> <br />
  <p class="content-item">
  Video Question and Answering (Video QA) is an emerging benchmark task to measure the levels of machine intelligence for video understanding. While several previous studies have suggested datasets for the VideoQA task, they did not consider story-level understanding, resulting in a lack of variance in the degree of question difficulty and coherent story-centric description.
  <br />
  DramaQA is a large-scale video QA dataset based on a Korean popular TV show, “Ohhaeyoung Again.” This dataset contains four levels of QA on difficulty and multi-level character-centered story descriptions.
  We are expecting this challenge could be a starting point to evaluate hierarchical story understanding.
  </p>
</div> <br /> <br /> <br />

<div class="paper content-container" style="TEXT-ALIGN: center">
  <h1 class = "content-title">
    Paper
  </h1> <br />
  <p class="content-item">
  To be Announced
  </p>
</div> <br /> <br /> <br />

<div class="people content-container" style="TEXT-ALIGN: center">
  <h1 class = "content-title">
    People
  </h1> <br />
  <div class="content-item">
    {% for person in site.data.people %}
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
</div> <br /> <br /> <br />

<div class="sponsor content-container" style="TEXT-ALIGN: center">
  <h1 class = "content-title">
    Sponsor
  </h1> <br />

  {% for sponsor in site.data.sponsors %}
  <div class = "content-subcontainer">
    <div class="content-item">
      {% for img in sponsor.images %}
        <img src="{{ img.src }}">
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div> <br /> <br /> <br />

<div class="contact content-container" style="TEXT-ALIGN: center">
  <h1 class = "content-title">
    contact
  </h1> <br />
  
  <div class = "content-subcontainer">
    <a id="link" href="mailto:videoturingtest@gmail.com">videoturingtest@gmail.com</a>
  </div>
---
layout: home
permalink: /
title: About
---

<link rel="stylesheet" href="/assets/css/member.css">
<link rel="stylesheet" href="/assets/css/sponsor.css">

<style>
  p.content-item-news{
    margin-top: 0.1em;
    margin-bottom: 0.1em;
  }
  font.date{
    font-family: Monaco, "Courier New", monospace;
  }
  font.content{
    font-family: 'Roboto', sans-serif;
  }
</style>

<div class="updates">
  <h4 class = "content-title">
    <b>Updates</b>
  </h4>
  
  {% for news in site.data.updates %}
    <p class="content-item-news news-{{ forloop.index0 }}">
      <span id="date"> 
        <font class="date" color="#4000FF" size="3%"> {{ news.date }} </font>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <font class="content" color="#585858" size="4%">{{ news.content }} </font>
      </span>
    </p>
  {% endfor %}
<br/><br/><br/>


<div class="about content-container" style="TEXT-ALIGN: center">
  <br />
  <h1 class = "content-title">
    DramaQA for Video Story Understanding
  </h1> <br />
  <p class="content-item">
  Video Question and Answering (Video QA) is an emerging benchmark task to measure the levels of machine intelligence for video understanding. While several previous studies have suggested datasets for the Video QA task, they did not consider story-level understanding, resulting in a lack of variance in the degree of question difficulty and coherent story-centric description.
  <br />
  DramaQA is a large-scale video QA dataset based on a Korean popular TV show, “Another Miss Oh”. This dataset contains four levels of QA on difficulty and multi-level character-centered story descriptions. We are expecting this dataset could be a starting point to evaluate human level video story understanding.
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
    Contact
  </h1> <br />
  
  <div class = "content-subcontainer">
    <a id="link" href="mailto:dramaqa.challenge@gmail.com">dramaqa.challenge@gmail.com</a>
  </div>
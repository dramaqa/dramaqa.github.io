---
layout: home
permalink: /
title: About
---

<style>
  p.content-item-news{
    margin-top: 0.1em;
    margin-bottom: 0.1em;
  }

  .date{
    font-family: Monaco, "Courier New", monospace;
    color: #4000FF;
    font-size: 0.8em;
  }
</style>

<div class="updates">
  <h4 class = "content-title">
    <b>Updates</b>
  </h4>
  
  {% for news in site.data.updates %}
    <p class="content-item-news news-{{ forloop.index0 }}">
      <span id="date">
        <span class="date"> {{ news.date }} </span>
        <span class="content" style="color: #585858"> {{ news.content }} </span>
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
  Video Question and Answering (Video QA) is an emerging benchmark task to measure the levels of machine intelligence for video understanding. <br/>
  While several previous studies have suggested datasets for the Video QA task, they did not consider story-level understanding, resulting in a lack of variance in the degree of question difficulty and coherent story-centric description.
  <br />
  DramaQA is a large-scale video QA dataset based on a Korean popular TV show, “Another Miss Oh”. This dataset contains four levels of QA on difficulty and multi-level character-centered story descriptions. We are expecting this dataset could be a starting point to evaluate human level video story understanding.
  </p>
</div> <br /> <br /> <br />

<div class="paper content-container" style="TEXT-ALIGN: center">
  <h1 class = "content-title">
    Papers
  </h1> <br />
  <h3>
    DramaQA: Character-Centered Video Story Understanding with Hierarchical QA
  </h3>
  <p class="content-item">
    Seongho Choi, Kyoung-Woon On, Yu-Jung Heo, Ahjeong Seo, Youwon Jang, Seungchan Lee, Minsu Lee, Byoung-Tak Zhang
  </p>
  <p>
    <a href="https://arxiv.org/abs/2005.03356">[PDF]</a> 
    <a href="https://github.com/liveseongho/DramaQAChallenge2020">[Code]</a>
  </p>
</div> <br /> <br /> <br />

<div class="contact content-container" style="TEXT-ALIGN: center">
  <h1 class = "content-title">
    Contact
  </h1> <br />
  
  <div class = "content-subcontainer">
    <a id="link" href="mailto:dramaqa.challenge@gmail.com">dramaqa.challenge@gmail.com</a>
  </div>
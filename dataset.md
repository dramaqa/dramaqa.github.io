---
layout: page
title: Dataset
permalink: /Dataset
feature-img: "assets/img/background.png"
---

<style>
  h3.content-item-subtitle {
    margin-left: 0.5em;
  }
  p.content-subitem {
    margin-left: 0.5em;
  }
  li.a {
    margin-left: 0.5em;
  }
</style>
    
    
<div class="dataset content-container">
  <h1 class = "content-title" style="TEXT-ALIGN: center">
    DramaQA Dataset Description
  </h1> <br />
  
  <div class="content-item">
    <h2 class = "content-subtitle">
      1. Overview
    </h2>
    <p class = "content-item">
      DramaQA  dataset is collected on a Korean popular TV show, “Another Miss Oh”. The goal of the DramaQA Dataset is to solve natural language QA that target the story of a video clip. DramaQA utilizes image frames, subtitles, and descriptions of the video clip to answer the question. Following are differentiated characteristics from other video QA datasets.
    </p>
    <div class="content-subitem">
      <h3 class = "content-item-subtitle">
        (1) Multi-level Description
      </h3>
      <p class = "content-subitem">
        We briefly introduce two terms commonly used in video domain: Shot and Scene. A shot is formed by a series of continuous frames with consistent background setting, and a scene is a group of semantically related shots, which are coherent to certain subject or theme.
        <br />
	    We collected the story descriptions for shot and scene level respectively and we limited that the descriptions should be focused on 19 main characters.
      </p>
      <h3 class = "content-item-subtitle">
        (2) Multi-level Difficulty
      </h3>
      <p class = "content-subitem">
        Based on arxiv link, we defined four levels of difficulty for the question in terms of two criteria: length of video clip (Memory Capacity, MC) and the number of logical reasoning step (Logical complexity, LC).
      </p>
      <ul class = "content-subitem" style="line-height:1.5em">
        <li class ="a"> Lv 1: MC (shot-level video), LC (single supporting fact). </li>
        <li class ="a"> Lv 2: MC (shot-level video), LC (multiple supporting facts). </li>
        <li class ="a"> Lv 3: MC (scene-level video), LC (multiple supporting facts w/ time). </li>
        <li class ="a"> Lv 4: MC (scene-level video), LC (reason for causality). </li>
      </ul>
  </div>
</div>
    
    
</div>
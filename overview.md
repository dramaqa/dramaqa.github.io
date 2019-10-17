---
layout: page
title: Overview
permalink: /Overview
feature-img: "assets/img/pexels/circuit.jpeg"
---

<link rel="stylesheet" href="/assets/css/dataset.css">

<div class="overview content-container">
  <h1 class = "content-title" style="TEXT-ALIGN: center">
    DramaQA Dataset Description
  </h1> <br />
  <div class="content-item">
    <h2 class = "content-subtitle">
      Multi-level Description
    </h2>
    <p class = "content-item">
      We briefly introduce two terms commonly used in video domain: Shot and Scene. A shot is formed by a series of continuous frames with consistent background setting, and a scene is a group of semantically related shots, which are coherent to certain subject or theme.
      <br />
      We collected the story descriptions for shot and scene level respectively and we limited that the descriptions should be focused on 19 main characters.
    </p> <br />
    <h2 class = "content-subtitle">
      Multi-level Difficulty
    </h2>
    <p class = "content-item">
      Based on <a id="link" href="https://arxiv.org/abs/1904.00623">arxiv link</a>, we defined four levels of difficulty for the question in terms of two criteria: length of video clip (Memory Capacity, MC) and the number of logical reasoning step (Logical complexity, LC).
      <ul>
        <li> Lv 1: MC (shot), LC (single supporting fact). </li>
        <li> Lv 2: MC (shot), LC (multiple supporting facts). </li>
        <li> Lv 3: MC (scene), LC (multiple supporting facts w/ time). </li>
        <li> Lv 4: MC (scene), LC (reason for causality). </li>
      </ul> <br />
    <h2 class = "content-subtitle">
      Dataset Specification
    </h2>
    <p class = "content-item">
      It consists of 8.5K QA pairs from 2.8K video clips, spanning over 36 hours of video. We are expecting this challenge could be a starting point to evaluate hierarchical story understanding.
    </p>    
  </div>
</div>

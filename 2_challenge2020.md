---
layout: page
title: Challenge 2020
headertitle: '<br><h1 class=title>2nd DramaQA Challenge 2020</h1>'
subtitle: '<h4 class="subtitle">Online, 28 August. 2020 <br> 16th European Conference on Computer Vision (ECCV)</h4><br><a class="btn btn-default" href="https://eccv2020.eu//"><img src="/assets/img/eccvlogo_online.png" style="max-width: 5em; padding: 0.1em 0.1em; background-color:#FFFFFF;"></a><br><br>'
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
        Submission deadline at July 31 (23:59:59 UTC-0)
      </li>
      <li>
        Signup to receive updates: <a href="https://forms.gle/KJ7TT9YQAedsjhBq6">link</a>
      </li>
      <li>
        In April 7th, <a href="https://dramaqa.snu.ac.kr/Dataset">DramaQA Dataset v1.0</a> was released.
      </li>
      <li>
        In April, The 2nd DramaQA Challenge 2020 was launched.
      </li>
      <li>
        In April, DramaQA Challenge <a href="https://evalai.cloudcv.org/web/challenges/challenge-page/610/overview">Leaderboard</a> is open and <a href="https://github.com/liveseongho/DramaQAChallenge2020">Starter Code</a> is released.
      </li>
      <li>
        In March 7th, DramaQA Dataset Paper was uploaded to <a href="https://arxiv.org/abs/2005.03356">Arxiv</a>.
      </li>
    </div>
  </div> <br /> <br />
  
  <div class = "content-subcontainer">
      <h2 class = "content-subtitle">
        3. Prize
      </h2>
      <p class="content-item">
        Top 3 winning teams will receive $1,200 in cash.
      </p>
    </div> <br />
  
  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      4. Challenge Guidelines
    </h2>
    <ul class="content-item" style="line-height:2em">
      <li> <a id="link" href="/Dataset">Dataset Description</a> </li>
      <li> <a id="link" href="https://github.com/liveseongho/DramaQAChallenge2020">Starter Code</a> </li>
      <li> <a id="link" href="https://evalai.cloudcv.org/web/challenges/challenge-page/610/overview">Evaluation(Leaderboard)</a> </li>
      <li> <a id="link" href="https://dramaqa.snu.ac.kr/Download">Dataset Download</a> </li>
     </ul>
  </div> <br />
  
  <div class="content-subcontainer">
      <h2 class = "content-subtitle">
        5. Awards
      </h2>
      <div style="overflow-x: auto">
          <table style="border-collapse: collapse; border-spacing: 0; width: 1000px;">
              <tr>
                <th style="width: 13em; TEXT-ALIGN: center;">The 1st place</th>
                <td style="width: 70em;"><b>GGANG</b><br>
                Jiwan Chung(Seoul National University), Youngjae Yu(Seoul National University), Heeseung Yun(Seoul National University), <br>
                Jongseok Kim(Seoul National University), Eunkyu Park(Seoul National University), Gunhee Kim(Seoul National University) </td>
              </tr>
              <tr>
                <th style="width: 8em; TEXT-ALIGN: center;">The 2nd place</th>
                <td><b>Sudoku</b><br>
                Zhicheng Guo, Jiaxuan Zhao </td>
              </tr>
              <tr>
                <th style="width: 8em; TEXT-ALIGN: center;">The 3rd place</th>
                <td><b>HARD KAERI</b><br>
                KyungTae Lim, Youhan Lee, Yonggyun Yu</td>
              </tr>        
          </table>
      </div>
    </div> <br />

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      6. Organizers
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

  <div class="content-subcontainer">
    <h2 class = "content-title">
      7. Sponsor
    </h2> <br />
    {% for sponsor in site.data.sponsors2020 %}
    <div class="content-item" style="TEXT-ALIGN: left">
      {% for img in sponsor.images %}
        <img src="{{ img.src }}" style="width:230px; height:auto; padding:0 0; vertical-align: middle;">
      {% endfor %}
    </div>
    {% endfor %}
  </div>
  
</div>

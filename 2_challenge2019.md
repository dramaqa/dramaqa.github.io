---
layout: page
title: 1st DramaQA Challenge 2019
subtitle: Oct. 30, 2019 ~ Dec. 12, 2019
permalink: /Challenge/2019
feature-img: "assets/img/main.png"
---

<link rel="stylesheet" href="/assets/css/member.css">
<link rel="stylesheet" href="/assets/css/sponsor.css">


<style>
    table {
        width: 100%;
        padding: 0px;
    }
</style>

<div class="challenge content-container">
  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      1. Overview
    </h2>
    <p class="content-item">
      DramaQA challenge is a large-scale video QA task based on a Korean popular TV show, “Another Miss Oh”. Given a video clip and a natural language question about the clip, the task is to choose an accurate natural language answer. The questions selectively target different level of difficulties, namely, the level of understanding. 
      <br />
      Also, multi-level character-centered story descriptions are provided. We are expecting this challenge could be a starting point to evaluate human-level video story understanding.
      <br /><br />
      The DramaQA train, validation, and test sets are available on the <a id="link" href="/Download ">download</a> page. Answers on the training and validation sets are publicly available but answers for test sets are not provided to challenge participants.
    </p>
  </div> <br />

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      2. Important Dates
    </h2>
    <div class="content-item">
      <table> 
        <tr>
          <th style="width: 350px">Oct. 30, 2019</th>
          <td>DramaQA Dataset is released</td>
        </tr>
        <tr>
          <th style="width: 350px">Oct. 31, 2019</th>
          <td>DramaQA Challenge 2019 launched!</td>
        </tr>
        <tr>
          <th style="width: 350px"><del>Dec. 09, 2019</del> &rarr; Dec. 12, 2019</th>
          <td>Submission deadline at 23:59:59 (UTC)</td>
        </tr>
        <tr>
          <th style="width: 350px">Dec. 18, 2019</th>
          <td>Winner’s announcement at the DramaQA Workshop, KSC 2019</td>
        </tr>        
      </table>
    </div>
  </div> <br />

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      3. Prize
    </h2>
    <p class="content-item">
      Top three winning teams will receive 1,500,000 won in cash!
    </p>
  </div> <br />

  <div class = "content-subcontainer">
    <h2 class = "content-subtitle">
      4. Challenge Guidelines
    </h2>
    <ul class="content-item" style="line-height:2em">
      <li> <a id="link" href="/Dataset">Dataset Description</a> </li>
      <li> <a id="link" href="https://github.com/skaro94/vtt_challenge_2019">Starter Code</a> </li>
      <li> <a id="link" href="https://evalai.cloudcv.org/web/challenges/challenge-page/467/overview">Evaluation(Leaderboard)</a> </li>
     </ul>
  </div> <br />
  
  <div class="content-subcontainer">
    <h2 class = "content-subtitle">
      5. Awards
    </h2>
    <table style="celllspacing=0; cellpadding=0; border=0"> 
        <tr>
          <th style="width: 200px">The 1st place</th>
          <td style="width: 300px"><b>Kakao Brain Drama</b><br>Eun-Sol Kim (Kakao Brain),<br> Woo-Young Kang (Kakao Brain)</td>
          <td><img class="1st" src="/assets/img/challenge/2019_1st.JPG" style="margin:0; padding:0; width: 400px; height: 280px"></td>
        </tr>
        <tr>
          <th>The 2nd place</th>
          <td><b>sl</b><br>Seri Lee<br>(Seoul National University)</td>
          <td><img class="2nd" src="/assets/img/challenge/2019_2nd.JPG" style="margin:0; padding:0; width: 400px; height: 280px"></td>
        </tr>
        <tr>
          <th>The 3rd place</th>
          <td><b>twopunchman (bertqa)</b><br>Seonil Son<br>(Seoul National University)</td>
          <td><img class="3rd" src="/assets/img/challenge/2019_3rd.JPG" style="margin:0; padding:0; width: 400px; height: 280px"></td>
        </tr>        
    </table>
  </div> <br />
  
  <div class="content-subcontainer">
    <h2 class = "content-title">
      6. Organizers
    </h2> <br />
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
  </div> <br />
  
  <div class="content-subcontainer">
    <h2 class = "content-title">
      7. Sponsor
    </h2> <br />
    {% for sponsor in site.data.sponsors %}
    <div class="content-item" style="TEXT-ALIGN: center">
      {% for img in sponsor.images %}
        <img src="{{ img.src }}" style="width:230px; height:auto; padding:0 0; vertical-align: middle;">
      {% endfor %}
    </div>
    {% endfor %}
  </div>
  
</div>

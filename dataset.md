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
  .b{
    margin-left: 1em;
  }
  .c{
    margin-left: 2.5em;
  }
  div.content-item{
    margin-left: 0.5em;
  }
  
  table {
    width: 100%
  }
  th, td {
    padding: 10px;
    text-align: center;
  }
  thead tr {
    background-color: #ffffff;
    color: #ffffff;
  }
  tbody tr:nth-child(2n) {
    background-color: #e9e9e9;
  }
  tbody tr:nth-child(2n+1) {
    background-color: #ffffff;
  }
</style>
    
    
<div class="dataset content-container">
  <h1 class = "content-title" style="TEXT-ALIGN: center">
    DramaQA Dataset Description
  </h1> <br />
  
  <div class="content-subcontainer">
    <h2 class = "content-subtitle">
      1. Overview
    </h2>
    <p class = "content-item">
      DramaQA  dataset is collected on a Korean popular TV show, “Another Miss Oh”. The goal of the DramaQA Dataset is to solve natural language QA that target the story of a video clip. DramaQA utilizes image frames, subtitles, and descriptions of the video clip to answer the question. Following are differentiated characteristics from other video QA datasets.
    </p>
    <div class="content-subitem">
      <h3 class = "content-item-subtitle">
        1) Multi-level Description
      </h3>
      <p class = "content-subitem">
        We briefly introduce two terms commonly used in video domain: Shot and Scene. A shot is formed by a series of continuous frames with consistent background setting, and a scene is a group of semantically related shots, which are coherent to certain subject or theme.
        <br />
	    We collected the story descriptions for shot and scene level respectively and we limited that the descriptions should be focused on 19 main characters.
      </p>
      <h3 class = "content-item-subtitle">
        2) Multi-level Difficulty
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
  </div> <br /> <br />
  
  <div class="content-subcontainer">
    <h2 class = "content-subtitle">
      2. Dataset Specification
    </h2>
    <ul class = "content-item" style="line-height:2em">
      <li class ="a"> 9,649 video clips </li>
      <ul class = "content-subitem" style="line-height:1.5em">
        <li class ="b" type="circle"> 317 scenes </li>
        <li class ="b" type="circle"> 9,332 shots </li>
      </ul>
      <li class ="a"> 15,760 question-answer pairs with multi-level difficulties </li>
        <ul class = "content-subitem" style="line-height:1.5em">
          <li class ="b" type="circle"> 5 multiple choice Q&A </li>
          <li class ="b" type="circle"> Four levels of difficulty for the questions </li>
          <li class ="c" type="square"> 7,991 level 1 questions </li>
          <li class ="c" type="square"> 4,116 level 2 questions </li>
          <li class ="c" type="square"> 1,833 level 3 questions </li>
          <li class ="c" type="square"> 1,821 level 4 questions </li>
         </ul>
      <li class ="a"> 13,034 Multi-level Descriptions </li>
      <li class ="a">Table of Contents</li>
      <ul class ="a" style="line-height:1.5em">
        <li class ="b"><a id="link" href="#dataset-1 ">Image Frames in Video Clips</a></li>
        <li class ="b"><a id="link" href="#dataset-2 ">Annotations (Q&A, question level, etc)</a></li>
        <li class ="b"><a id="link" href="#dataset-3 ">Scripts (Subtitles)</a></li>
      </ul> <br/> <br/>
    <div class="content-item" id="dataset-1">
      <h3 class="content-subtitle">
        1) Image Frames in Video Clips
      </h3>
      <p class="description">
        AnotherMissOh_images.zip contains image frames of each video clips. The image frames in a scene are saved in {episodeName/sceneNum} folder, and the image frames in a shot are saved in {episodeName/sceneNum/shotNum} folder (e.g., AnotherMissOh01/002/0003 folder for 3rd shot in 2nd scene in episode 1). The image frames are captured at 3 frames per second (FPS). In our baseline code, each image frame is fed into Resnet-50 and transformed to features from the last layer of the network.
      </p>
    </div> <br />
    <div class = "content-item"  id="dataset-2">
      <h3 class="content-subtitle">
        2) Annotations (Q&A, question level, etc)
      </h3>
      <p class = "pre-description">
          AnotherMissOh_QA.zip contains 3 json files, each denotes a split of DramaQA dataset:
          <table style="font-size: 19px"> 
            <tr>
              <th style="width: 300px">files</th>
              <th style="width: 100px">#data</th>
              <th stype="width: 300px">Usage</th>
            </tr>
            <tr>
              <td>AnotherMissOhQA_train_set.json</td>
              <td>12,761</td>
              <td>Model training</td>
            </tr>
            <tr>
              <td>AnotherMissOhQA_val_set.json</td>
              <td>1,500</td>
              <td>Hyperparmeter tuning</td>
            </tr>
            <tr>
              <td>AnotherMissOhQA_test_set.json</td>
              <td>1,500</td>
              <td>Model testing</td>
            </tr>   
          </table>
      </p>
      <p class="description">
        In annotations files, there are questions, answers, question levels, descriptions and other useful information. Each of QAs is composed of one question and five candidate answers among which only one answer is correct.
        <br/>
        In case of question level, there are two types : memory capacity level and logical complexity level. 
        <br/><br/>
        Each of files contains following entries:
      </p>
        <table style="font-size: 19px">
          <tr>
            <th style="width: 200px">key</th>
            <th style="width: 200px">type</th>
            <th style="width: 600px">description</th>
          </tr>
          <tr>
            <td>qid</td>
            <td>int</td>
            <td>question id</td>
          </tr>
          <tr>
            <td>vid</td>
            <td>string</td>
            <td>video clip id: episodeName_sceneNum_shotNum<br/>(for scene-level video vid, episodeName_sceneNum_0000 is used.)</td>
          </tr>
          <tr>
            <td>videoType</td>
            <td>string</td>
            <td>video type: shot or scene</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>video clip story description</td>
          </tr>
          <tr>
            <td>q_level_mem</td>
            <td>int</td>
            <td>memory capacity level, values are from 2 to 3</td>
          </tr>
          <tr>
            <td>q_level_logic</td>
            <td>int</td>
            <td>logical complexity level, values are from 1 to 4</td>
          </tr>
          <tr>
            <td>que</td>
            <td>string</td>
            <td>question</td>
          </tr>
          <tr>
            <td>correct_idx</td>
            <td>int</td>
            <td>index of correct answer among candidates (1~5)</td>
          </tr>
          <tr>
            <td>answers</td>
            <td>list of string</td>
            <td>list of candidate answers</td>
          </tr>       
        </table> <br />
        <p class = "json-description">
          Here is a json example : 
        </p>
        <pre>
          {% highlight json %}
            {
              "correct_idx": 3, 
              "description": "Dokyung is sitting on the chair.  
                              Dokyung texted a message to Haeyoung1. Haeyoung1 made surprised Dokyung.", 
              "answers": ["Dokyung texted the message to mom.", "Dokyung texted the message to dad.", "Dokyung texted the message to Haeyoung1.", "Dokyung texted the message to sister.", "Dokyung texted the message to brother."], 
              "que": "What did Dokyung do in his home?", 
              "shot_contained": [48, 115], 
              "q_level_logic": 3, 
              "vid": "AnotherMissOh16_002_0000", 
              "q_level_mem": 3, 
              "qid": 3707, 
              "videoType": "scene"
            }
          {% endhighlight %}
         </pre>
     </div>
     <div class="content-item" id="dataset-3">
      <h3 class="content-subtitle">
        3) Scripts (Subtitles)
      </h3>
      <p class="description">
        AnotherMissOh_QA.zip contains 3 json files, each denotes a split of DramaQA dataset:
      </p>
      <table style="font-size: 19px">
          <tr>
            <th style="width: 200px">key</th>
            <th style="width: 500px">type</th>
            <th style="width: 1000px">descriptions</th>
          </tr>
          <tr>
            <td>vid</td>
            <td>list of string</td>
            <td>list of vid where subtitles appear</td>
          </tr>
          <tr>
            <td>script</td>
            <td>list of three dict<br>(starttime, endtime, utterance)</td>
            <td>for each utterance, provide its start and end time</td>
          </tr>
          <tr>
            <td>st</td>
            <td>string</td>
            <td>utterance start time. It consists of seconds and milliseconds.</td>
          </tr>
          <tr>
            <td>et</td>
            <td>string</td>
            <td>utterance end time. It consists of seconds and milliseconds.</td>
          </tr>
          <tr>
            <td>utter</td>
            <td>string</td>
            <td>each element of subtitles</td>
          </tr> 
        </table>
        <p class = "json-description">
          AnotherMissOhQA_subtitles.json contains subtitles of video clips which have vid as keys. Here is a json example : 
        </p>
        <pre>
          {% highlight json %}
            {
              "script": {
                "et": "193.940", 
                "st": "192.250", 
                "utter": "You shouldn’t feel empty, but relieved!"},
                "vid": ["AnotherMissOh01_001_0088", "AnotherMissOh01_001_0089"]
                }
            }
          {% endhighlight %}
        </pre>
    </div>

---
layout: page
title: DramaQA Dataset
headertitle: '<br><h1 class=title>Dataset</h1>'
permalink: /Dataset
feature-img: "assets/img/main.png"
---

<style>
  pre code {
    font-size: 1em;
    font-family: 'consolas', monospace;
  }
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
    width: 100%;
  }
  th, td {
    padding: 4px;
    text-align: center;
    line-height: 170%;
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
  
<link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/9.5.0/styles/default.min.css">
<script src="//cdn.jsdelivr.net/highlight.js/9.5.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
  
    
<div class="dataset content-container">
  <h1 class = "content-title" style="TEXT-ALIGN: center">
    DramaQA Dataset Description
  </h1> <br />
  <img class="dataset-overview-img" src="/assets/dramaqa_overview_final.png">
  <br /> <br/>
  <div class="content-subcontainer">
    <h2 class = "content-subtitle">
      1. Overview
    </h2>
    <br/>
    <p class = "content-item">
      Drama is a genre of narrative that can be described as a series of events consisting of several main characters. These characteristics of drama make it a suitable target for video story research. 
      We collected the dataset on a popular Korean drama <b><i><a href="https://en.wikipedia.org/wiki/Another_Miss_Oh">Another Miss Oh</a></i></b>, which has 18 episodes, 20.5 hours in total. 
      DramaQA dataset consists of sequences of video frames (3 frames per second), character-centered video annotations, and QA pairs with hierarchical difficulty levels. 
    </p>
    <br/>
    <div class="content-subitem">
      <h3 class = "content-item-subtitle">
        1)  Question-Answer Hierarchy for Levels of Difficulty
      </h3>
      <p class = "content-subitem">
        To  classify  question-answer  pairs  into  hierarchical  levels  of  understanding,  we propose two criteria: Memory Capacity and Logical Complexity. 
        Memory Capacity (MC)  is  defined  as  the  length  of  the  video  clip,  and  corresponds  to  working memory in human cognitive process. 
        Logical Complexity (LC) is defined by the number of logical reasoning steps required to answer the question, which is in line with Piaget’s developmental stage. <br/>
        The hierarchical levels are as follows,
      </p>
      <ul class = "content-subitem" style="line-height:1.5em">
        <li class ="a"> Difficulty 1: Difficulty 1 level QAs are based on a shot-level video length and requires single supporting fact to answer the question. </li>
        <li class ="a"> Difficulty 2: Difficulty 2 level QAs are based on a shot-level video length and requires multiple supporting facts to answer the question. </li>
        <li class ="a"> Difficulty 3: Difficulty 3 level QAs are based on a scene-level video length and requires multiple supporting facts with time factor to answer the question. </li>
        <li class ="a"> Difficulty 4: Difficulty 4 level QAs are based on a scene-level video length and requires reasoning for causality to answer the question. </li>
      </ul>
    <br/>
      <h3 class = "content-item-subtitle">
        2)  Character-Centered Video Annotations
      </h3>
      <p class = "content-subitem">
        As the characters are primary components of stories, we provide rich annotations for the main characters in the drama <b><i><a href="https://en.wikipedia.org/wiki/Another_Miss_Oh"><span>Another Miss Oh</span></a></i></b>. 
        As visual metadata, all image frames in the video clips are annotated with main characters information. 
        In each image frames, bounding boxes of both a face rectangle and a full-body rectangle for the main characters are annotated with their name. 
        Along with bounding boxes, behaviors and emotions of the characters shown in the image frames are annotated. 
        Including <code>none</code> behavior, total 28 behavioral verbs, such as <code>drink</code>, <code>hold</code>, <code>cook</code>, is used for behavior expression. 
        Also, to give a consistent view of the main characters, all coreference of the main characters are resolved in scripts of the video clips.
      </p>
      <p>
        We describe more detailed information at our <a href="https://arxiv.org/abs/2005.03356">paper</a>.
      </p>
    </div> <br /> <br />
  </div>
  
  <div class="content-subcontainer">
    <h2 class = "content-subtitle">
      2. Dataset Specification
    </h2>
    <ul class = "content-item" style="line-height:2em">
      <li class ="a"> 23,928 video clips </li>
      <ul class = "content-subitem" style="line-height:1.5em">
        <li class ="b" type="circle"> 803 scenes </li>
        <li class ="b" type="circle"> 23,125 shots </li>
      </ul>
      <li class ="a"> 16,191 question-answer pairs with multi-level difficulties </li>
        <ul class = "content-subitem" style="line-height:1.5em">
          <li class ="b" type="circle"> 5 multiple choice QA </li>
          <li class ="b" type="circle"> Four levels of difficulty for the questions </li>
          <li class ="c" type="square"> 7,992 level 1 questions </li>
          <li class ="c" type="square"> 4,118 level 2 questions </li>
          <li class ="c" type="square"> 2,045 level 3 questions </li>
          <li class ="c" type="square"> 2,036 level 4 questions </li>
         </ul>
      <li class ="a">Table of Contents</li>
      <ul class ="a" style="line-height:1.5em">
        <li class ="b"><a id="link" href="#dataset-1 ">Image Frames</a></li>
        <li class ="b"><a id="link" href="#dataset-2 ">Hierarchical QA</a></li>
        <li class ="b"><a id="link" href="#dataset-3 ">Visual Metadata</a></li>
        <li class ="b"><a id="link" href="#dataset-4 ">Coreference Resolved Scripts</a></li>
      </ul> <br/>
    </ul>
    <div class = "content-item" id="dataset-1">
      <h3 class="content-subtitle">
        1) Image Frames
      </h3>
      <ul class = "content-item" style="line-height:2em">
        <li class ="a"> <code>AnotherMissOh_images.zip</code> contains image frames of each video clips. </li>
        <li class ="a"> The image frames in a scene are saved in <code>{episodeName/sceneNum}</code> folder, and the image frames in a shot are saved in <code>{episodeName/sceneNum/shotNum}</code> folder. </li>
        <ul class = "content-subitem" style="line-height:1.5em">
          <li class ="b" type="circle"> e.g., <code>AnotherMissOh01/002/0003</code> folder for 3rd shot in 2nd scene in episode 1. </li>
        </ul>
        <li class ="a"> The image frames are captured at 3 frames per second (FPS). </li>
        <li class ="a"> In our baseline code, each image frame is fed into Resnet-50 and transformed to features from the last layer of the network. </li>
      </ul>
    </div>
    <br />
    <div class = "content-item" id="dataset-2">
      <h3 class="content-subtitle">
        2) Hierarchical QA 
      </h3>
      <p class = "pre-description">
          <code>AnotherMissOh_QA.zip</code> contains 3 json files, each denotes a split of DramaQA dataset:
          <table style="font-size: 1em"> 
            <tr>
              <th style="width: 300px">Files</th>
              <th style="width: 100px">#Data</th>
              <th stype="width: 300px">Usage</th>
            </tr>
            <tr>
              <td>AnotherMissOhQA_train_set.json</td>
              <td>10,098</td>
              <td>Model training</td>
            </tr>
            <tr>
              <td>AnotherMissOhQA_val_set.json</td>
              <td>3,071</td>
              <td>Hyperparmeter tuning</td>
            </tr>
            <tr>
              <td>AnotherMissOhQA_test_set.json</td>
              <td>3,022</td>
              <td>Model testing</td>
            </tr>   
          </table>
      </p>
      <p class="description">
        In QA files, there are questions, answers, question levels and other useful information. Each of QAs is composed of one question and five candidate answers among which only one answer is correct.
        <br/>
        In case of question level, there are two types : Memory Capacity level and Logical Complexity level. 
        <br/><br/>
        Each of files contains following entries:
      </p>
        <table style="font-size: 1em">
          <tr>
            <th style="width: 200px">Key</th>
            <th style="width: 200px">Type</th>
            <th style="width: 600px">Description</th>
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
          <tr>
            <td>que</td>
            <td>string</td>
            <td>question</td>
          </tr> 
          <tr>
            <td>shot_contained</td>
            <td>list of int</td>
            <td>a list of the first and the last shot index of the target video<br/>(when the target video is a shot, it only contains one element.)</td>
          </tr> 
          <tr>
            <td>q_level_logic</td>
            <td>int</td>
            <td>Logical Complexity level, values are from 1 to 4</td>
          </tr> 
          <tr>
            <td>vid</td>
            <td>string</td>
            <td>video clip id: episodeName_sceneNum_shotNum<br/>(for scene-level video vid, episodeName_sceneNum_0000 is used.)</td>
          </tr>  
          <tr>
            <td>q_level_mem</td>
            <td>int</td>
            <td>Memory Capacity level, values are from 2 to 3</td>
          </tr>
          <tr>
            <td>qid</td>
            <td>int</td>
            <td>question id</td>
          </tr>
          <tr>
            <td>videoType</td>
            <td>string</td>
            <td>video type: shot or scene</td>
          </tr>
        </table> <br />
        <p class = "json-description">
          Here is an example of json file: 
        </p>
        <pre><code class="json">{
    "correct_idx": 3, 
    "answers": ["Dokyung texted the message to mom.", 
                "Dokyung texted the message to dad.", 
                "Dokyung texted the message to Haeyoung1.",
                "Dokyung texted the message to sister.", 
                "Dokyung texted the message to brother."], 
    "que": "What did Dokyung do in his home?", 
    "shot_contained": [48, 115], 
    "q_level_logic": 3, 
    "vid": "AnotherMissOh16_002_0000", 
    "q_level_mem": 3, 
    "qid": 3707, 
    "videoType": "scene"
}</code></pre>
    </div>
    <br />
    <div class = "content-item" id="dataset-3">
      <h3 class="content-subtitle">
        3) Visual Metadata
      </h3>
      <ul class = "content-subitem" style="line-height:1.5em">
        <li class ="a"> <b>Bounding Box:</b> In each image frames, bounding boxes of both a face rectangle and a full-body rectangle for the main characters are annotated with their name.  
        In total, 20 main characters are annotated with their unique name.</li>
        <li class ="a"> <b>Behavior & Emotion</b>, Along with bounding boxes, behaviors and emotions of the characters shown in the image frames are annotated. 
        Including <code>none</code> behavior,  total  28  behavioral  verbs,  such  as <code>drink</code>, <code>hold</code>, <code>cook</code>, is used for behavior expression.  
        Also, we present characters’ emotion with 7 emotional adjectives: <code>Anger</code>, <code>Disgust</code>, <code>Fear</code>, <code>Happiness</code>, <code>Sadness</code>, <code>Surprise</code>, and <code>Neutral</code>. </li>
        <li class ="a"> You can check a list of <code>person_id</code>, <code>behavior</code>, and <code>emotion</code> in <a href="/assets/data/list_of_elements.txt" download="list_of_elements.txt">here</a>.</li>
      </ul>
      <p class = "json-description">
        Here is an example of json file: 
      </p>
      <pre><code class="json">{
    "frame_id": "AnotherMissOh17_013_0261_IMAGE_0000021778",
    "persons": [
        "person_info": {
            "behavior": "stand up",
            "face_rect": {
                "min_x": 427,
                "max_x": 498,
                "max_y": 234,
                "min_y": 124
            },
            "full_rect": {
                "min_x": 330,
                "max_x": 569,
                "max_y": 617,
                "min_y": 74
            },
            "emotion": "Sadness",
        },
        "person_id": "Jiya"
        }
    ]  
}</code></pre>
    </div>
    <br />
    <div class = "content-item" id="dataset-4">
      <h3 class="content-subtitle">
        4) Coreference Resolved Scripts
      </h3>
      <p class = "content-subitem">
        For  understanding  video  stories,  especially drama, it is important to understand the dialogue between the characters. Especially, the information such as “<i>Who</i> is talking to <i>whom</i> about <i>who</i> did what?” is significant for understanding whole stories. In DramaQA, we provide these information by resolving the coreferences for main characters in scripts.  
      </p>
      <p class = "json-description">
        Here is an example of json file: 
      </p>
      <pre><code class="json">"AnotherMissOh01_001_0109": {
    "contained_subs": [
    {
        "et": "295.595",
        "speaker": "Haeyoung1",
        "st": "293.685",
        "utter": "I(Heayoung1) said I(Heayoung1)'m not going to get married."
    },
    {
        "et": "292.426",
        "speaker": "Deogi",
        "st": "290.376",
        "utter": "Just what in the world are you(Heayoung1) trying to say now?"
    }],
    "et": "294.6",
    "st": "291.56"
}</code></pre>
    </div>
  </div>
</div>

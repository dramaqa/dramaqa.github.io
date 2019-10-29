---
layout: page
title: Download
permalink: /Download
feature-img: "assets/img/background.png"
---


<style>
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


<div class="download content-container">
  <h1 class = "content-title" style="TEXT-ALIGN: center">
    DramaQA Dataset Download
  </h1> <br />
  <p class = "content-item" style="TEXT-ALIGN: center">
    To download DramaQA dataset, you need to fill out this <a id="download_link" href="https://docs.google.com/forms/d/e/1FAIpQLSdqQTHp6-AiNQijHhcPAPvFV_6TFer06e6aWG1l_jRhRo2E5w/viewform">form</a> first.
    When you fill out the form, you need to <a id="download_link" href="/assets/dramaqa_download_agreement.docx">submit</a> dataset download agreement file in pdf format. After that, we will give you an ID for access by e-mail.
  </p> <br /> <br />
  <div class = "content-subcontainer">
    <div class="content-item">
      <p class = "content-description">
          Each of files contains 3 json files, each denotes a split of DramaQA dataset:
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
    </div><br />
    <div class = "content-item">
      <h2 class="content-subtitle">
        1. Annotations (Q&A, question level, etc)
      </h2>
      <p class="description">
        In annotations files, there are QAs and question levels and other useful information. Each of QAs is composed of one question and five candidate answers among which only one answer is correct.<br>
        In case of question level, there are two types : memory capacity level and logical complexity level. Both of the level types can have a value from 1 to 4.<br> <br>
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
            <td>video clip id</td>
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
            <td>memory capacity level, values are from 1 to 4</td>
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
          Here is a json example : <br> <br>
        </p>
        {% highlight json  %}
            {
              “correct_idx”: 3, 
              “description”: “Dokyung is sitting on the chair.  
                              Dokyung texted a message to Haeyoung1. Haeyoung1 made surprised Dokyung.“, 
              “answers”: [“Dokyung texted the message to mom.“, “Dokyung texted the message to dad.“, “Dokyung texted the message to Haeyoung1.“, ” Dokyung texted the message to sister.“, “Dokyung texted the message to brother.“], 
              “que”: “What did Dokyung do in his home?“, 
              “shot_contained”: [48, 115], 
              “q_level_logic”: 3, 
              “vid”: “AnotherMissOh16_002_0000”, 
              “q_level_mem”: 3, 
              “qid”: 3707, 
              “videoType”: “scene”
            }
         {% endhighlight %}
    </div> <br /> <br />
    <div class="content-item">
      <h2 class="content-subtitle">
        2. Scripts (Subtitles)
      </h2>
      <p class="description">
        Each of scripts files, which is same with subtitle, is preprocessed into a single JSON file which have video names as keys. 
        This JSON file contains a list of subtitle sentences and a list of subtitle information(speaker, speech time, content of speech).
        Each of files contains following entries:
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
          Here is a json example : <br> <br>
        </p>
          {% highlight json  %}
                {
                  “script”: {
                        “et”: “193.940”, 
                        “st”: “192.250”, 
                        “utter”: “You shouldn’t feel empty, but relieved!“},
                        “vid”: [“AnotherMissOh01_001_0088”, “AnotherMissOh01_001_0089”]
                        }
                }
           {% endhighlight %}
    </div> <br /> <br />
    <div class="content-item">
      <h2 class="content-subtitle">
        3. Shot Section Information
      </h2>
      <p class="description">
        This file includes information about shots which compose one scene. You can know start time and end time of each shots.
      </p>
      <table style="font-size: 19px">
          <tr>
            <th style="width: 200px">key</th>
            <th style="width: 300px">type</th>
            <th style="width: 600px">descriptions</th>
          </tr>
          <tr>
            <td>registed_name</td>
            <td>string</td>
            <td>video file name</td>
          </tr>
          <tr>
            <td>file_name</td>
            <td>string</td>
            <td>video file name</td>
          </tr>        
          <tr>
            <td>shot_results</td>
            <td>list of dictionary</td>
            <td>each of a dictionary contains information of each shots</td>
          </tr>        
          <tr>
            <td>shot_id</td>
            <td>int</td>
            <td>video shot id</td>
          </tr>        
          <tr>
            <td>start_time</td>
            <td>string</td>
            <td>video shot start time</td>
          </tr>       
          <tr>
            <td>end_time</td>
            <td>string</td>
            <td>video shot end time</td>
          </tr>             
      </table>
      <p class = "json-description">
        Here is a json example : <br> <br>
      </p>
        {% highlight json  %}
            {
              “registed_name” : “AnotherMissOh01.mp4”,
              “file_name” : “AnotherMissOh01.mp4”,
              “shot_results” : {
                                “shot_id” : “SHOT_0000000000”,
                                “start_time” : “00:00:00;000”,
                                “end_time” : “00:00:01;24”
                               }
            }
         {% endhighlight %}      
    </div> <br /> <br />
    <div class="content-item">
      <h2 class="content-subtitle">
        4. Image Frames in Video Clips
      </h2>
      <p class="description">
        Lengths of video scene clips are 1 to 5 minutes in average, and each of scene clips is composed with short clips.
        A length of a short clip is 1 to 50 seconds. The image frames are extracted at 3 frames per second(FPS).
      </p>
    </div>
</div>

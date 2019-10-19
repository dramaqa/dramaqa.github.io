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
    font-size: 18px;
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
    When you fill out the form, you need to <a id="download_link" href="/assets/dramaqa_download_agreement.docx">submit</a> dataset download agreement file in pdf format. After that, we will give you an ID for access by email.
  </p> <br /> <br />
  
  
  <div class = "content-subcontainer">
    <div class="content-item">
      Each of files contains 3 json files, each denotes a split of DramaQA dataset:
      <table> 
        <tr>
          <th style="width: 200px">files</th>
          <th style="width: 100px">#data</th>
          <th stype="width: 300px">Usage</th>
        </tr>
        <tr>
          <td>*_train_set.json</td>
          <td>8,000</td>
          <td>Model training</td>
        </tr>
        <tr>
          <td>*_val_set.json</td>
          <td>1,000</td>
          <td>Hyperparmeter tuning</td>
        </tr>
        <tr>
          <td>*_test_set.json</td>
          <td>1,000</td>
          <td>Model testing</td>
        </tr>   
      </table>
    </div>
    <div class = "content-item">
      <h2 class="content-subtitle">
        1. Annotations (Q&A, question level, etc)
      </h2>
      <p class="description">
        In Annotations files, there are QAs and question levels and other useful information. Each QA is composed of one question and five candidate answers that only one answer is correct.<br>
        For Question level, it <br> <br>
        Each of files contains following entries:
      </p>
        <table>
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
            <td>true_ans</td>
            <td>string</td>
            <td>true answer</td>
          </tr>
          <tr>
            <td>false_ans</td>
            <td>list of string</td>
            <td>false answers</td>
          </tr>
          <tr>
            <td>shot_contained</td>
            <td>list of integer<br>(shot num)</td>
            <td>contained shots</td>
          </tr>                
        </table> <br />
        Here is a json example : <br> <br>
        {% highlight json  %}
            {
              "qid" : 5832,
              "vid" : "s01e01_02_000",
              "videoType" : "shot",
              "description" : "Chandler and Monica are going ...",
              "q_level_mem" : 2,
              "q_level_logic" : 4,
              "que" : "What are you?"
              "true_ans" : "I'm fine."
              "false_ans" : ["She's not alone", "I am Ironman", ...]
              "shot_contained" : [112, 113, 114, 115]
            }
         {% endhighlight %}
    </div> <br /> <br />
    <div class="content-item">
      <h2 class="content-subtitle">
        2. Descriptions
      </h2>
      <p class="description">
        Story descriptions is composed with natural language, and it contains stories in video clips.
      </p>
      <table>
        <tr>
          <th style="width: 100px">key</th>
          <th style="width: 200px">type</th>
          <th style="width: 300px">description</th>
        </tr>
        <tr>
          <td>vid</td>
          <td>string</td>
          <td>video clip id</td>
        </tr>
        <tr>
          <td>desc</td>
          <td>list of string</td>
          <td>story descriptions</td>
        </tr>
      </table>
      Here is a json example : <br> <br>
        {% highlight json  %}
              {
                "vid" : "s01e01_02_000",
                "desc" : "["I'm a boy", "you're a girl", …]"
              }
         {% endhighlight %}
    </div> <br /> <br />
    <div class="content-item">
      <h2 class="content-subtitle">
        3. Scripts (Subtitles)
      </h2>
      <p class="description">
        The subtitles are preprocessed into a single JSON file with video names as keys. Each element contains a list of subtitle sentences and a list of subtitle information(speaker, speech time, content of speech).
      </p>
      <table>
          <tr>
            <th style="width: 200px">key</th>
            <th style="width: 300px">type</th>
            <th style="width: 600px">descriptions</th>
          </tr>
          <tr>
            <td>vid</td>
            <td>string</td>
            <td>video clip id</td>
          </tr>
          <tr>
            <td>script</td>
            <td>list of three dict<br>(starttime, endtime, utterance)</td>
            <td>for each utterance, provide its start and end time</td>
          </tr>
          <tr>
            <td>st</td>
            <td></td>
            <td>utterance start time</td>
          </tr>
          <tr>
            <td>et</td>
            <td></td>
            <td>utterance end time</td>
          </tr>
          <tr>
            <td>utter</td>
            <td>string</td>
            <td>each element of subtitles</td>
          </tr> 
        </table>
        Here is a json example : <br> <br>
          {% highlight json  %}
                {
                  "vid" : "s01e01_02_000",
                  "script" : {
                       "st" : 00:00:00;000,
                       "et" : 00:00:00;000,
                       "utter" : "I like you."
                  }
                }
           {% endhighlight %}
    </div> <br /> <br />
    <div class="content-item">
      <h2 class="content-subtitle">
        4. Image Frames in Video Clips
      </h2>
      <p class="description">
        Lengths of Video Scene clips are 1 to 5 minutes in average, and there are short clips which contains one scene clips.A length of each short clips is 1 to 50 seconds. we extracted image files at 3 frames per second(FPS).
      </p>
    </div>
      
  </div> <br />
  
</div>

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
  </h1> <br /> <br />
  <p class = "content-item">
    To download DramaQA dataset, you need to fill out dataset download agreement <a id="download_link" href="/assets/dramaqa_download_agreement.docx">file</a> in pdf format with your own signature. <br>
    When you submit your agreement file, you need to fill out this <a id="download_link" href="https://docs.google.com/forms/d/e/1FAIpQLSdqQTHp6-AiNQijHhcPAPvFV_6TFer06e6aWG1l_jRhRo2E5w/viewform">form</a>. After that, we will give you an ID for access by e-mail.
  </p> <br />
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
    </div>
</div>

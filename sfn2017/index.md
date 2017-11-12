---
layout: default
title: Society for Neuroscience 2017
---

<section>

<div class='content-section-a'>

<div class='container'>

<h2 class='section-heading'>BrainIAK at SfN 2017</h2>
<div class='lead'>BrainIAK is a Python package for high-performance neuroimaging analysis. Below are the six posters associated with the BrainIAK project that will appear at SfN 2017.
<br/>
The easiest way to try the examples in our posters is via a Docker <a href='https://www.docker.com/what-container'>container</a>. Install <a href='https://www.docker.com/docker-windows#availability'>Docker for Windows</a>, <a href='https://www.docker.com/docker-mac#availability'>Docker for Mac OS</a>, or <a href='https://www.docker.com/docker-ubuntu#availability'>Docker for Ubuntu</a>. Then download and run the <a href='https://hub.docker.com/r/brainiak/brainiak/'>BrainIAK Docker container</a> (see the <a href='/docs/#docker'>BrainIAK Docker documentation</a> for more details).
<br/>
For the full BrainIAK features, including scalability, you should install the BrainIAK Python package in your development environment. We only support this on Mac OS and Linux. There are several non-Python dependencies you must install first (see <a href='http://brainiak.org/docs/#requirements'>documentation</a>). Afterward, you can <code>pip install brainiak</code> and use it in your Python code.
<br/>
<a href='http://brainiak.org/docs/#support'>Contact us</a> if you need help.
</div>

{% for poster in site.data.sfn2017 %}
   <div class='row'>
   <div class='col-lg-6'>
      {{ poster.id }}: {{ poster.title }}
      <div class='text'>
         {{ poster.authors }} <br>
         <a href='mailto:{{ poster.contact }}?subject=SfN%202017%20poster'>contact</a>
         (<a href='/sfn2017/{{ poster.pdf }}'>pdf</a>{% if poster.example %}, <a href='{{ poster.example }}'>example</a>{% endif %}{% if poster.paper %}, <a href='{{ poster.paper }}'>paper</a>{% endif %})
         {% if poster.notes %} <br><br>{{ poster.notes }} {% endif %}
      </div>
   </div>
   </div>
   <br>
{% endfor %}
</div>

</div>

</section>

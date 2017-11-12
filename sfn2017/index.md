---
layout: default
title: Society for Neuroscience 2017
---

<section>

<div class='content-section-a'>

<div class='container'>

<h2 class='section-heading'>BrainIAK at SfN 2017</h2>
<div class='row text'>
<div class='col-lg-6'>
BrainIAK is a Python package for high-performance neuroimaging analysis. Below are the six posters associated with the BrainIAK project that will appear at SfN 2017, along with example code for most posters.
The easiest way to get started is via a Docker <a href='https://www.docker.com/what-container'>container</a>:
<ol>
   <li>Install Docker (<a href='https://www.docker.com/docker-windows#availability'>Windows</a>, <a href='https://www.docker.com/docker-mac#availability'>macOS</a>, or <a href='https://www.docker.com/docker-ubuntu#availability'>Ubuntu</a>).</li>
   <li>Run the following commands in your terminal (or follow the <a href='/docs/#docker'>documentation</a>):
   <ul>
     <li><code>docker pull brainiak/brainiak</code></li>
     <li><code>docker run -it -p 8888:8888 -v brainiak:/mnt --name demo brainiak/brainiak</code></li>
     <li><code>python3 -m notebook --allow-root --no-browser --ip=0.0.0.0</code></li>
   </ul>
   </li>
   <li>Visit <a href='http://localhost:8888'>http://localhost:8888</a> in your browser.</li>
</ol>

For the full BrainIAK feature set, including scalability, please
<ol>
   <li>Install the appropriate <a href='http://brainiak.org/docs/#requirements'>requirements</a></li>
   <li>Install BrainIAK via <code>pip install brainiak</code></li>
</ol>
Please <a href='http://brainiak.org/docs/#support'>contact us</a> if you need help.
<br><br>
</div>
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

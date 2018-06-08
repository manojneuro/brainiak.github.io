---
layout: default
title: Organization for Human Brain Mapping
redirect_from: /ohbm2018
---
# BrainIAK at OHBM 2018


<br/>
## BrainIAK Posters
{% for poster in site.data.events.ohbm2018 %}
<div class='row'>
<div class='col-lg-6'>
 <h4 class="section-heading">{{ poster.id }}: {{ poster.title }}</h4>
<div class='text'>
{{ poster.authors }} <br>
<a href='mailto:{{ poster.contact }}?subject=OHBM%202018%20poster'>contact</a>
(<a href='/events/ohbm2018/{{ poster.pdf }}'>pdf</a>{% if poster.example %}, <a href='{{ poster.example }}'>example</a>{% endif %}{% if poster.paper %}, <a href='{{ poster.paper }}'>paper</a>{% endif %})
{% if poster.notes %} <br><br>{{ poster.notes }} {% endif %}
</div>
</div>
</div>
<br>
{% endfor %}

## BrainIAK Installation
<div class='row text'>
<div class='col-lg-6'>
BrainIAK is a Python package for high-performance neuroimaging analysis. The above posters associated with the BrainIAK project will appear at OHBM 2018 along with several code examples.
The easiest way to get started with the examples is via conda  <a href='http://brainiak.org/docs/installation.html'>install. </a>
<br/><br/>
Please <a href='http://brainiak.org/docs/#support'>contact us</a> if you need help.
<br><br>
</div>
</div>
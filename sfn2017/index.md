---
layout: default
title: Society for Neuroscience 2017
---

<section>

<div class='content-section-a'>

<div class='container'>

<h2 class='section-heading'>BrainIAK at SfN 2017</h2>
<div class='lead'>BrainIAK is a Python package for high-performance neuroimaging analysis. Below are the six posters associated with the BrainIAK project that will appear at SfN 2017.</div>

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

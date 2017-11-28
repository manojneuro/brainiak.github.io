---
layout: default
title: Publications
---

# Publications

Below are a list of publications related to the BrainIAK project. Please <a href="mailto:brainiak@googlegroups.com">email</a> us if you feel your work should be listed here!

{% assign pubs = site.data.pubs | sort: 'date' | reverse %}
{% assign counter = pubs | size %}
{% for pub in pubs %}
<div class="row">
<div class="col-xl-12">
   <hr class="section-heading-spacer">
   <div class="clearfix"></div>

   <h4 class="section-heading">{{ counter }}. {{ pub.title }}</h4>
   {% assign counter = counter | minus: 1 %}

   {{ pub.authors | join: ', ' }}<br>
   <i>{{ pub.journal }}</i> ({{ pub.year }})

   {% assign link_array = "" | split: "/" %}
   {% for link in pub.links %}
      {% capture href %}<a href="{{ link[1] }}">{{ link[0] }}</a>{% endcapture %}
      {% assign link_array = link_array | push: href %}
   {% endfor %}
   <div>
      ({{ link_array | join: ', ' }})
   </div>
</div>
</div>
{% endfor %}

---
layout: default
title: Publications
---

# Publications

Under construction!

{% for post in site.tags.publications reversed %}
<div class="row">
    <div class="col-sm-6">
        <hr class="section-heading-spacer">
        <div class="clearfix"></div>
        <h2 class="section-heading">{{ post.title }}</h2>
        <div class="lead">{{ post.content }}</div>
    </div>
</div>
{% endfor %}

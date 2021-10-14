---
layout: default
title: Real-Time Collaboration configuration options
title_nav: Configuration options
description: Available RTC configuration options.
keywords: rtc configuration
type: folder
---
{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "rtc" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "configuration" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
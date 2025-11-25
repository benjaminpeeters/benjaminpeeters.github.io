---
page_id: teaching
layout: page
permalink: /teaching/
title: teaching
description: Courses and teaching experience
nav: true
nav_order: 5
hide_header: true
---

{% assign courses = site.courses | sort: "course_year" | reverse %}
{% if courses.size > 0 %}

## Course Materials

<div class="courses-list">
{% for course in courses %}
<div class="course-card" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--global-divider-color); border-radius: 0.5rem;">
  <h3 style="margin-top: 0;"><a href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
  <div class="course-meta" style="color: var(--global-text-color-light); font-size: 0.9rem; margin-bottom: 0.5rem;">
    {{ course.semester }} {{ course.course_year }} | {{ course.institution }}
    {% if course.language and course.language != 'en-us' %}
    | {% if course.language == 'fr-ca' %}French{% elsif course.language == 'zh-hans' %}Chinese{% else %}{{ course.language }}{% endif %}
    {% endif %}
  </div>
  <p style="margin-bottom: 0;">{{ course.description }}</p>
</div>
{% endfor %}
</div>

---

{% endif %}

## Current Courses (2023-2024)

### Regional Integration and EU-Asia Relations

International relations course examining regional integration processes and the evolving relationship between the European Union and Asian economies.

### Regional Studies - European Union International Relations

Comprehensive analysis of the European Union's role in international affairs, its institutional framework, and its relationships with other global actors.

### France in International Affairs (法國社會與國際關係)

Course taught in French examining France's position and influence in contemporary international relations, covering historical context, current policies, and future challenges.

---

## Past Teaching Experience

### UCLouvain (2016-2023)

#### Econometrics (ECGE1330)

Teaching assistant, 2017-2023

- Time series analysis and forecasting methods
- Panel data econometrics
- Applied econometric modeling
- Statistical software training (R, Stata)

#### Macroeconomics (ECGE1211)

Teaching assistant, 2016-2019

- National accounts and GDP measurement
- IS-LM framework and aggregate demand
- Monetary and fiscal policy analysis
- Business cycles and economic fluctuations

#### Probability Theory (INGE1131)

Teaching assistant, 2016-2019

- Probability distributions and their properties
- Random variables and expectation
- Limit theorems and statistical applications
- Mathematical foundations for engineers

#### Advanced Statistics (INGE1231)

Teaching assistant, 2016-2019

- Hypothesis testing and confidence intervals
- Regression analysis and model selection
- Multivariate statistical methods
- Applied statistical modeling for engineering

#### Operational Research (INGE1312)

Teaching assistant, 2016-2018

- Linear programming and optimization
- Network flows and graph theory
- Decision analysis under uncertainty
- Simulation methods

#### Applied Statistics (ECGE 1232)

Teaching assistant, 2016-2018

- Descriptive statistics and data visualization
- Statistical inference
- ANOVA and experimental design
- Applied regression methods

---

## Teaching Materials

Course materials and additional resources are available on [MEGA](https://mega.nz/) for enrolled students.

For inquiries about teaching materials or course content, please contact me at [benjaminpeeters@protonmail.com](mailto:benjaminpeeters@protonmail.com).

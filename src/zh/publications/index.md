---
layout: page.njk
title: 出版物
lang: zh
permalink: /zh/publications/
---

{% import "components/publication.njk" as pub %}

我的研究探索国际金融的周期性模式、气候经济学和经济史。以下是我已发表的作品和正在进行的研究项目列表。

## 已发表文章

{% if bibliography.published.length > 0 %}
{% for entry in bibliography.published %}
{{ pub.display(entry) }}
{% endfor %}
{% else %}
正确配置BibTeX文件后，出版物将显示在此处。
{% endif %}

## 工作论文

{% if bibliography.workingPapers.length > 0 %}
{% for entry in bibliography.workingPapers %}
{{ pub.display(entry) }}
{% endfor %}
{% else %}
工作论文即将推出。
{% endif %}

---

如需最新更新，请查看我的 [ORCID 档案](https://orcid.org/0000-0002-5095-2021)。

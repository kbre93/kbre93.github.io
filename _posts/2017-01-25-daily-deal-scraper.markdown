---
layout: post
title:  GrabOne Scraper
date:   2017-01-22 14:33:03 +1300
previewImg: grabOneScraper2.png
imgDir: assets/images/dailyDealScraper
permalink: projects/scraper
---

I often visit daily deal websites, looking for the same thing from week to week. I wanted to be able to be notified of relevant deals easily, but without getting spammed on a mailing list. I figured this was a good chance to learn a bit of web dev and scraping, useful skills for future projects I had in mind.

{% include post_sub_heading.html sub_heading="User guide" %}

The GrabOne scraper is a taskbar application which allows you to quickly filter the current deals on [GrabOne](http://grabone.co.nz){:.link}. You specify two criteria in the Filter tab: the minimum number of purchases of the deal and a list of keywords. The filter operator is also specified as AND or OR (a toggle button) to specify if the deals need to match both or either of the two criteria. The Deals tab shows the details of each item.

{% include post_sub_heading.html sub_heading="Build details" %}
The scraper is an Electron application using node.js and is therefore cross-platform. The code can be found at my [Github](https://github.com/kbre93){:.link}.


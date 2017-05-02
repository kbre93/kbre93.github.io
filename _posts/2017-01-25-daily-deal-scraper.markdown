---
layout: post
title:  Daily Deal Scraper
date:   2017-01-22 14:33:03 +1300
previewImg: grabOneScraper2.png
imgDir: assets/images/dailyDealScraper
permalink: projects/scraper
---

I often visit daily deal websites, looking for the same thing from week to week. I wanted to be able to be notified of relevant deals easily, but without getting spammed on a mailing list. This was the perfect opportunity to make a small app and learn a bit of web dev.

{% include post_sub_heading.html sub_heading="How it works" %}
The GrabOne scraper is a taskbar application which allows you to quickly filter the current deals on [GrabOne](http://grabone.co.nz){:.link} and easily check it at any time. In the Filter tab you specify two criteria: the minimum number bought of the deal, i.e. a threshold for the popularity of the deal, and a list of keywords. The filter operator is also specified as AND or OR (a toggle button) to specify if the deals need to match both or either of the two criteria need to be matched. The Deals tab then shows the details of each matched item and clicking one brings you to the purchasing page.

{% include post_sub_heading.html sub_heading="Details" %}
The scraper is an [Electron](http://electron.atom.io/){:.link} application using node.js and is therefore cross-platform. The code can be found at my [Github](https://github.com/kbre93){:.link}.

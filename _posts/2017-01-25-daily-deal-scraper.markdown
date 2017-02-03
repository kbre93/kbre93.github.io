---
layout: post
title:  Daily deal scraper
date:   2017-01-22 14:33:03 +1300
previewImg: grabOneScraper2.png
imgDir: assets/images/dailyDealScraper
permalink: projects/scraper
---

I often visit daily deal websites, looking for the same thing from week to week. I wanted to be able to check for deals quickly but without getting spammed on a mailing list. I figured this was a good chance to learn a bit of web dev and scraping, which could be useful for all sorts of future projects.

The GrabOne scraper is a taskbar application which allows you to quickly filter the current deals on [GrabOne](http://grabone.co.nz){:.link} using keywords and/or a minimum number bought criteria. 

How it works:
The scraper is an Electron application, using node.js to get the deals from the GrabOne website. Electron provided the most simple way I could find of making a desktop application using 


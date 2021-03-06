---
layout: post
title:  Magic Mirror
date:   2017-01-22 14:33:03 +1300
previewImg: magicmirror_square.jpg
imgDir: assets/images/magicMirror
permalink: projects/magicmirror
---
The magic mirror it is a device for self-reflection. As you get ready in the morning, the magic mirror briefs you on your day &mdash; upcoming events on your calendar, the weather forecast, and a motivational quote.

This was one of the first builds I had seen where I wished I had come up with it myself. There are quite a few builds online but the code I used was from [Michael Teeuw's](http://michaelteeuw.nl/tagged/magicmirror){:.link} build. 

{% include post_sub_heading.html sub_heading="Build details" %}
An LED monitor hides behind the one-way mirror and is connected to a Raspberry Pi. The computer is running a Apache server, which has access to your calendar to show upcoming events, an open source weather website for the forecast, and a list of motivational quotes. The details can be found at the link above. The modifications I made were adding the quotes at the bottom of the display and a PIR sensor to turn off the mirror when no one is in the room. 

{% include post_sub_heading.html sub_heading="Improvements" %}
I would have ideally made the mirror a bit thinner using a thinner monitor but this was difficult due to budget constraints. It would also be nice to have a display where the black pixels are completely off. As far as I know, this is only possible with an OLED display, which is also a pricey solution. Alternatively, a few, smaller displays could be used in only the regions which display things.
# pep.enpc

This website is powered by the Ruby-based framework Jekyll.

# Installation
This installation guide was written for a UNIX-based OS. If you encounter issues following these instructions while installing on Windows, please refer to Jekyll's documentation (https://jekyllrb.com/docs/).

First, install Ruby on the website https://www.ruby-lang.org/en/downloads/.

Then open a terminal and run :
```
gem install jekyll bundler
git clone https://github.com/pontsetudes/pep.enpc.git
cd pep.enpc
bundle install
```

Then start the local server running :
```
bundle exec jekyll serve
```
and browse http://localhost:4000/. Here you go.

# Adding posts to the blog service
To add an article, all you need is to create a file in the `/_posts/` folder. The name of the file should be like `YYYY-MM-DD-slug.md`.

Let's focus on a partical example. Create a the file `/_posts/2019-10-12-station-f.md` and paste the code below :

```
---
title: PEP à la Station F
layout: posts
permalink: station-f/
date: 2018-12-10
lang: fr
description: "Aujourd'hui, les membres de PEP ont eu l'occasion de visiter la Station F : une expérience pleine de découvertes et de rencontres pour nos Junior-Entrepreuneurs !"
---

# PEP viste la Station F

Ce mercredi 10 octobre, les membres de PEP ont eu la chance de vister la Station F, le célèbre campus de startup parisien. Ce lieu clef pour les entrepreneurs franciliens réunis plus d'une vingtaine d'accélerateurs de startups.
```

|  header attribute   |            attribute           |
|:-------------------:|:------------------------------:|
|        title        |    string on the tab bar       |
|        layout       | keep this value equal to `post`|
|       permalink     | url path to the article        |
|         date        |          YYYY-DD-MM            |
|         lang        | keep this value equal to `fr`  |
|      description    |   description of the article   |
| thumnail (optional) |  file_name of the thumbnail    |

## Add an image to the posts' list (thumbnail)

This list is available at the url `/blog`. To add a thumbnail image next to the article description, you'll need to add an image in the `/img/posts/thumbnails/` folder. This platform allows `.jpg` and `.png` images. For the thumbnail, I recommend `400x290` images.

Let's practice with our example. Add the image `/img/posts/thumbnails/station-f-thumbnail.jpg`. Then, complete the YAML header in the file `/_posts/2019-12-10-station-f.md` :

```
---
...
thumbnail: station-f-thumbnail.jpg
---

...
```

## Add an image in the article

To add an image in an article, you'll need to add the image in the `/img/posts/` folder.

If you add the file `/img/posts/station-f.png`, you will be able to get it displayed in your article by adding the following line in `/_posts/2019-12-10-station-f.md` :

```
---
...
---

...
![PEP devant la Station F](/img/posts/station-f.png)
```

## Add an anchor link in the article

Just add the following line in `/_posts/2019-12-10-station-f.md` :

```
---
...
---

...
Pour avoir plus d'informations sur la Station F, cliquez [ici](https://stationf.co/fr/)
```

## Customize the style of your articles

You can also add HTML blocks and inline CSS to the markdown files to give a fully personalized style to each article.

```
---
...
---

...
<div style="text-align: center; margin: 20px;">
    <p><i>This text has an italic font-decoration</i></p>
</div>
...
<div style="text-align: center; margin: 0 auto; max-width: 500px;">
    <img src="/img/posts/equipe.jpg" style="width: 100%;">
</div>
```
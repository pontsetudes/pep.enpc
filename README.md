# pep.enpc

This website is powered by the Ruby-based framework Jekyll.

# Installation
This installation guide was written for a UNIX-based OS. If you encounter issues following these instructions while installing on Windows, please refer to Jekyll's documentation (https://jekyllrb.com/docs/).

First, install Ruby on the website https://www.ruby-lang.org/en/downloads/.

Then open a terminal and run :
```
gem install jekyll bundler
gem install jekyll-feed
gem install jekyll-seo-tag
gem install jekyll-responsive-image
git clone https://github.com/pontsetudes/pep.enpc.git
cd pep.enpc
bundle update
```

Then start the local server running :
```
bundle exec jekyll serve
```
and browse http://localhost:4000/. Here you go.

# Adding posts to the `/blog/` service
To add an article, all you need is to create a file in the `/_posts/` folder. The name of the file should be like `YYYY-MM-DD-slug.md`.

Let's focus on a partical example. Create a the file `/_posts/2019-04-04-station-f.md` and paste the code below :

```

```
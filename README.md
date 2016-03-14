![](trumpcss.png)

trump.css is for those who like to introduce a little bit of Trump
on their homepage.

All creds go to Brad Frost and his ![tweet](https://twitter.com/brad_frost/status/709364990881472512)

##Installation

```
npm install trump-css
bower install trump-css
```

##Usage

```html
  <link rel="stylesheet" href="trump.latest.css">`

  <section id="usa">
    <!-- use #usa to draw 1600px wide border at bottom of container -->

    <div class="muslims">Not visible</div>
    <div class="women">Very small font</div>
    <div class="migrants--undocumented">Move container 2000000px down</div>
    <p class="press">Disable browsers text-to-speak functionality</p>
    <canvas class="policies">
      <!-- disable perspective -->
    </canvas>

    <!-- use #usa and get a :after pseudo element containing the text "absolutely ruined" -->
  </section>
```

###Run trumpcss.com locally
If you want to work on the static homepage, just run the following commands
and you will get a live-reloading server listening for changes in /app

```bash
npm install
gulp dev
```

---
> [reimertz.co](http://reimertz.co) &nbsp;&middot;&nbsp;
> GitHub [@reimertz](https://github.com/reimertz) &nbsp;&middot;&nbsp;
> Twitter [@reimertz](https://twitter.com/reimertz)

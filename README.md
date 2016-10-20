<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
# Dark Blue Redux #
Your challenge: collect all the yellow pellets without fail!

<img src="https://cloud.githubusercontent.com/assets/7908723/19448664/ac66dcbe-9457-11e6-942d-694b687f0aa0.gif" width="300">

## How to Play ##
```
<-- move right
--> move left
 x  jump
```
Play the game now --> http://kookeemonsters.com:8080

## How to Vote ##
- Click 'Up Vote' or 'Down Vote'
- Click 'Save Votes' to record the tallies

## Tech Stack ##
As a demonstration of a full-stack web app, the site allows voting on your favorite maps. The votes are stored and persistently loaded from the server.

The project is deployed on a [Linode](https://www.linode.com) Linux server ([CentOS 7](https://en.wikipedia.org/wiki/CentOS), a derivative of Red Hat Enterprise Linux. CentOS was chosen for stability over the cutting-edge yet brittle nature of the more common Ubuntu distribution).

### Front End ###
- Angular 1 for interactive elements
- Bootstrap 4 for a CSS framework
- [FontAwesome](http://fontawesome.io) icons (glyphicons from Bootstrap 3 are no longer supported)
- [Arcade](http://www.urbanfonts.com/fonts/Arcade.htm) and [superscript](http://www.urbanfonts.com/fonts/superscript.htm) pixel fonts
- Adobe Photoshop for graphic illustrations and favicon
- [screengif](https://github.com/dergachev/screengif) and QuickTime Player for animated GIF graphic

### Back End ###
- [Node](https://nodejs.org/en/) & [Express](http://expressjs.com)
- [Sequelize](http://docs.sequelizejs.com/en/v3/) ORM
- [MariaDB](https://en.wikipedia.org/wiki/MariaDB) (a community version of MySQL)

### Credits ###
The game is from Chapter 15 of [Eloquent JavaScript](http://eloquentjavascript.net/15_game.html), which is inspired by [Dark Blue](http://www.lessmilk.com/games/10), created by Thomas Palef.

I made slight tweaks to the game code, which is stored at [Dark Blue Redux Core](https://github.com/spiritphyz/Dark-Blue-Redux-Core).

Dark Blue Redux is a solo student project for the MVP (Minimal Viable Product) sprint at [Hack Reactor](http://www.hackreactor.com/).

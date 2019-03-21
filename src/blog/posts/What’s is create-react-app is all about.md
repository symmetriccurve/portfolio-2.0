## What’s is create-react-app is all about ?

Usually every web App we develop is bundled in to a single file end of the day and is placed on a server, and when ever a request comes to this server. the bundle is served. The bundle is nothing but combination of all the development files put into single file,

Most of you know that index.html is the default file that is served when a request is made, we add a script to link to this bundle file inside our HTML file, so HTML file acts like base and what ever we build is placed in bundle. both together brings up your website or webapp.

Now if you have huge bundle file(greater than a mb), the load time of the web site is higher(Think of this as a file, the larger the file size the more time it takes to download, isn’t it ?).

Now we make complex and huge web apps, it’s not a good user experience to wait for the website to load.

We see that the problem is with huge bundle file, How about breaking this bundle file into multiple chunks and download a chuck initially which is required for launch page and download other chunks as user clicks on the page(Cool idea right ?).

This is where we introduce code-split. Split that damn huge bundle into multiple chunks as download as required.

Now what is react-app ?

Getting started with react application tedious thing when react came out into the market.

Configure babel, webpack, webpack-dev-server, hot reload loaders, presets OMG !!.

Everybody was in a bad need of having somebody else do all the behind the scenes of react configuration and just provide a single command to start react app in less than 10 seconds, this is where create-react-app is created and it took over like a rapid fire.

It helps to create react app with the all the configurations hidden and helps to focus only on the react development.

How what does npm run eject do ?

eject basically exposes all these configurations to the developer so he can tweak them(only advanced react developer do this if they see that a better configuration can be done to tailor fit their project).

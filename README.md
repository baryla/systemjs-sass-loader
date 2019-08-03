# SystemJS SASS Loader (WIP)

This is a "working" version of a SASS Loader for SystemJS. It is suppose to work ONLY in the browser not in the Node environment so we don't have the ability to check files with FS. More on this soon when a project I'm working on is ready to be published. So for now - stay tuned ;) 

There are still many bugs with this so for now, don't even try it haha :D

This works by compiling the SASS/SCSS on the fly and injecting it in the head. 

I have managed to solve the issue with the crazy file imports by utilising SytemJS config property called `meta` (you can check the system.config.js file for more info). You would usually have a list of files in there anyway so it made sense to use it. Once again, because this is meant to be working in the browser NOT Node, we can't just use `fs.readFile`.

- [x] Support all of the crazy ways that you can import a file ie. "_components/_file/etc.scss".
- [x] Supoport for libsass options (example in the system.config.js file).
- [ ] Support for importing SASS files from within SCSS files. This is a bug from libsass.
- [ ] ...too many to list.
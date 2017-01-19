# DA-Media-Kit-V2
DeviantArt Media Kit

View Live at [www.deviantartads.com](http://www.deviantartads.com)

---

## Codekit 3 Configuration for r.js

Add a custom hook with the following:

Type: Shell Script

*Run this script when a file is processed and...*

**Any** *of the following are true*

**Filename** **Ends With** *.js*

`node src/js/libs/r.js -o src/js/libs/build.js`
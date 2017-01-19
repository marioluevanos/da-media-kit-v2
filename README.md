# DA-Media-Kit-V2
DeviantArt Media Kit

View Live at [www.deviantartads.com](http://www.deviantartads.com)

---

## Codekit 3 Configuration for r.js

To compile source into index-min.js production code, add a custom hook with the following:

1. **Type:** Shell Script

2. **Run this script when a file is processed and...**

3. **Any** *of the following are true*

4. **Filename** | **Ends With** *.js*

5. `node src/js/libs/r.js -o src/js/libs/build.js`
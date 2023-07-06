# ColorsExtension

This is a color picker that copies color ###### rbg from chrome window.

Spec List:
[x] 1. a button for the extention
[x] 2. change our mouse into a color selector (a color selector CANNOT interact with elements on the screen )
[x] 3. Esc function in case user no longer want color.
[x] 4. on color picked OR esc change window back to regular

Things to figure out :
[x] 0. how to use eyeDropper API
[x] 1. how to change a mouse into a selector
[x] 2. how to grab the color of a pixel on chrome

        format of the color to HEXCODE: #218321 -> #******
        one hash tag and 6 values

        thoughts: we can create a string
        let color = '#'
        let combo = 'grabbed string'

[x] 3. how to store this color into macbook system's copy/paster
[x] 4. Change text color based on how dark background is made.
[]  5. change the action of color picker to the icon instead of a drop 


<!-- {
        //moving this here so i can work on manifest.json without damanging preexisting code
  "manifest_version": 3,
  "name": "Color Extension",
  "version": "1.0",
  "icons": {
    "16": "",
    "36": "",
    "48": "",
    "128": ""
  },
  "description": "Color Extension",
  "content_scripts": [
    {
      "matches": ["http://*/*"],
      "js": ["main.js"],
      "css": ["index.css"]
    }
  ],
  "action": { 
    "default_icon": {
      "16": "",
      "36": ""
    },
    "default_popup": "popup.html",
    "default_title": "Color Extension"
  },
  "permissions": ["management"]





      
} -->

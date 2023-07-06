# ColorsExtension

This is a color picker that copies color ###### rbg from chrome window.

Spec List:
[] 1. a button for the extention
[] 2. change our mouse into a color selector (a color selector CANNOT interact with elements on the screen )
[] 3. Esc function in case user no longer want color.
[] 4. on color picked OR esc change window back to regular

Things to figure out :
[] 0. how to use eyeDropper API
[] 1. how to change a mouse into a selector
[] 2. how to grab the color of a pixel on chrome

        format of the color to HEXCODE: #218321 -> #******
        one hash tag and 6 values

        thoughts: we can create a string
        let color = '#'
        let combo = 'grabbed string'

[] 3. how to store this color into macbook system's copy/paster

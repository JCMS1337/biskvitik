# TODO List for Single-Page Website with 7 Day Blocks and Firebase Events

- [x] Update bd.js: Add Firebase initialization, functions to add events to database by day (ponedelnik, vtornik, etc.), and retrieve events.
- [x] Update biskvit-vkusni.html: Create HTML structure with 7 blocks for each day, including buttons to add events and display areas for events.
- [x] Update biskvit.css: Add styles for the day blocks, modal window, and overall layout.
- [x] Implement JavaScript in biskvit-vkusni.html: Add modal functionality for adding events (time from/to, name, description), integrate with bd.js to save to Firebase, and load/display events on page load.
- [ ] Test the functionality: Ensure events can be added via modal and appear in the correct day blocks.
- [x] Add delete functionality: Allow users to delete events that are no longer relevant.
  - Update bd.js: Add removeEvent function.
  - Update biskvit-vkusni.html: Add delete button to each event and handle deletion in JS.
  - Update biskvit.css: Style the delete button.

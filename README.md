# QSL Card Generator - React

This React.js project is designed to force me to ~~suffer~~ work through website layout, responsive design techniques, managing state, and overall website design.

Seriously, this was actually a bunch of fun, and I do not intend for it to serve a real purpose at this time.

## Overview

When Hams make contact with each other, especially when they are not in the same town, state, or country, they send each other 'QSL Cards' that serve as memorabilia, as well as confirmation of the radio contact.

This single-page website is designed to take your information, and the information about the contact with the other ham, and fill-in the details to create a printable, 4.5 x 3.5 inch postcard.

## Project Status

Currently Implemented Features:

- Operator can enter their own information in a form-like page.
- Operator can enter their contact's information in a form-like page.
- The data appears in the QSL Card area (down-page) as the operator enters it.
- Designed for Mobile and Desktop use.
- Post-Card design and background image _only appear on desktop viewport size_.
- Use React 18+ bootstrapped with Vite.

## Future

- [ ] Add ability to print using a button.
- [ ] Add the ability to swap the background image with a different one (upload).
- [ ] Move "My Callsign" into a more interesting styled font near the middle of the card.
- [ ] Add another card-sized element with correct child elements to make a Post-Card like screening for TO: and FROM: and stamp (for physical mailing).

## About React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# The Daily Wrap — app

An installable web app (PWA) version of your Daily Wrap. It reads your site's `data.js` every time it
opens, so when you publish your daily update, the app updates itself. Nothing else to do.

## Files
- `index.html`  the whole app (design + logic)
- `sw.js`, `manifest.webmanifest`, `icon*.png`, `apple-touch-icon.png`  make it installable and work offline
- `data.snapshot.js`  built-in fallback copy of the data (only used if the app has never reached your site)

## Put it online (free, 3 minutes)
Easiest: add this folder to your existing repo.
1. In your `aalok-daily-wrap` repo on GitHub: **Add file → Upload files**.
2. Drag in these files so they sit inside a folder called `app` (type `app/` in the filename box, then upload).
3. Commit. Wait ~1 minute. Your app is at
   `https://aalokrajyaguru-dotcom.github.io/aalok-daily-wrap/app/`

Because it lives in the same repo, you can make it read `data.js` directly: in `app/index.html`, change
`content="https://aalokrajyaguru-dotcom.github.io/aalok-daily-wrap/data.js"` to `content="../data.js"`.
(The default full address also works, from any host.)

## Install on your phone
- Android (Chrome): open the link → menu → **Install app**.
- iPhone (Safari): open the link → Share → **Add to Home Screen**.

## Your daily routine does not change
Keep updating only `data.js` as before. The app and the website both pick it up.

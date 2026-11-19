# Locus Zyan website

A lightweight, static website for the Locus Zyan AI Creative Agency. It is designed for free GitHub Pages at `https://locuszyan.github.io/` and uses no backend, analytics, cookies, form processor, or generative-AI chat service. The FAQ assistant is a small browser-only script; messages are not transmitted or saved.

## Update the portfolio later

The **Selected Work** cards are in `index.html` inside `<section id="work">`. To add a project, open the repository on GitHub, open `index.html`, choose the pencil/edit button, and find the comment `Add new portfolio cards here`. Copy one complete `<article class="work-card"> ... </article>` block, paste it beside the existing cards, then update the category, title, description, link, and visual class. Keep the actual project facts accurate. For a YouTube video, use its public URL; for an unlisted client project, get permission before linking it. Commit the change to `main`; GitHub Pages will rebuild the site.

To add a real thumbnail, upload the image into `assets/`, then update that card's `href` and visual markup in `index.html`. Use descriptive alt text for meaningful images and don't expose client material without permission.

## Update services and contact details

Service cards are in `<div class="service-grid">` under `<section id="services">`. Copy one `<article class="service-card"> ... </article>` card and replace its number, label, heading, description, and contact anchor. The WhatsApp destination appears in the `wa.me` links in `index.html` and `script.js`; the displayed phone appears in the contact card and FAQ answers. The email address appears in `mailto:` links and FAQ answers. Update all occurrences together if contact details change.

## FAQ assistant

The local question matcher and approved answer text live in `script.js` in `answerFor()`. Add a new keyword branch only when the answer is confirmed and safe to publish. This is not a generative AI model. Visitor questions stay in the browser and are not sent to any service.

## Update the About / Journey section

The creator biography and working details are in the `<section id="about">` block in `index.html`. Edit that copy directly if your story, location, experience, languages, or availability change; keep it factual and current.

## Local preview

Open `index.html` directly for a quick content check, or run a local static server from this folder, for example `python3 -m http.server 3000`. The project intentionally has no build or package-install step.

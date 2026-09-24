# personal-portfolio
My personal website

index.html- This file is inserting the basic things such as text, images, and text thickness.

styles.css- This file changes text color and formats.

script.js- This file make things available to do such as buttons actually doing something.

Prompt Structure:
1. Describe the change and its purpose
2. Identify the files to changeand boudnaries
3. Ask for clarification
4. Request a plan before implementing 

e-moya.github.io/personal-portfolio


Prompt|What AI did| Any corrections|
|-----|-----------|----------------|
|I want to change the structure of my page. I want every header to have its own card section so that there is seperation between each section. The files you should modify are styles.css and Index.html. Keep content the same and do not touch script.js. Ask me any questions needed to understand the request if any. Explain your proposed changes and which files they change before modifying anything.|Added separate card sections for the intro, About, Projects, and Fun Fact areas in index.html. Kept the project subsection inside the Projects card. Added card spacing, borders, rounded corners, and shadows in styles.css. Left script.js unchanged.| 
|Give the site a spiderman site by changing the styles.css and possibly the script.js. The changes should include image pulls and should also give the site a comic book feel. Would script.js and styles.css be changed? Ask me any questions needed to understand the request if any. Explain the proposed changes and which files they affect. before modifying anything.|Implemented the Spider-Man comic-book redesign.

styles.css: added red, blue, and yellow comic colors, halftone background, bold panel borders, shadows, comic typography, responsive styling, and reveal animation.
index.html: replaced the Pikachu image with a remote Spider-Man image.
script.js: fixed the existing event-listener typo and added the comic-style fun-fact animation.|

|Change the layout of the page from a vertical look to a horizontal look. I believe only styles.css change is needed but if any other changes are needed let me know before implementing. Also try adding more buttons, perhaps index.html, let me know any recommendations for buttons on this portfolio website. As well as change the wording on the only project I have listed on there which is my porfolio website. Ask me any questions that would help before implementing anything. Explain your proposed changes and what they affect before modifying anything|Implemented the horizontal portfolio layout. styles.css: intro card positioned on the right, remaining cards arranged on the left, responsive mobile stacking, and subtle corner webbing.
index.html: added GitHub, Contact Me, and LinkedIn buttons; updated the project title and description.
script.js: unchanged.| Added email address link, linkedin link, and asked for the intro card to be to the right.|

|Place the intro card to the top left and the about me section to the right instead. Give the about me section a different look that aligns with the theme well. Place the buttons instead horizontally on the top and cahnge the index.html and style.css if needed. Ask me any questions needed to implement this task before changing anything. Tell me any recommendations if any and discuss changes you plan before modifying anything| Implemented the approved layout changes. index.html: intro and About Me cards now occupy the top row, with the three portfolio links moved into one horizontal action bar.
styles.css: intro is positioned left, About Me right, and the About card now has a distinct blue comic-panel style with subtle webbing.
Projects and Fun Fact remain below the top layout.
script.js was not changed.|

|My site is in index.html (plain HTML/CSS/JS, no framework). Add a sticky top nav bar
with links to #about, #projects, #skills, #contact, using smooth scroll. Redesign the
hero section: my name, "CS Student @ UTRGV" as a subtitle, and a short one-line intro.
Theme: Spider-Man — deep red/blue color palette, a web-pattern background accent (SVG
or CSS, no external image dependency), and a "web-slinging" hover effect on nav links
(underline that shoots in like a web-line). Keep it in the same index.html/style.css
files I already have. Discuss any changes with me before implementing.|Implemented the approved redesign.

index.html: added sticky nav links for About, Projects, Skills, and Contact; updated the hero text; added Skills and Contact sections.
styles.css: added smooth scrolling, Spider-Man nav styling, CSS-only web accents, and the web-slinging underline hover effect.
script.js: unchanged.|

|Add a grid section after the hero called "What I Do" with 3-4 cards (e.g. Problem Solving, C++, Python, Javascript, etc.) title, one sentence
each. Style cards with a subtle red/blue gradient border and a small lift/glow on
hover, like a HUD panel. Match the Spider-Man theme, not a generic Bootstrap card. Discuss changes with me before implementing anything.|Added the new “What I Do” section after the hero area.

Added four cards: Problem Solving, C++, Python, and JavaScript.
Styled them as Spider-Man-inspired HUD panels with red/blue gradient borders.
Added angled panel edges, status-light accents, hover lift, and glow effects.
Added responsive layouts for desktop, tablet, and mobile.
Preserved the existing Skills section and left script.js unchanged|

|Rebuild the Projects section as a responsive card grid (auto-fit, minmax) instead of
a single paragraph. Each card: project image/placeholder, title, 1-2 sentence
description, tech tags as small pills, and GitHub link. Add a hover effect — slight
scale-up and a red glow shadow. Pull the projects from [list them / point to repo]. Discuss changes planned before implementing anything.|Rebuilt the Projects section with one expandable project card for now.

Added an auto-fit responsive grid using minmax.
Added a comic-style project placeholder panel.
Added title, description, HTML/CSS/JavaScript tech pills, and GitHub link.
Added slight scale-up and red glow hover/focus effects.
Future project cards can be added inside the same grid without changing the layout.
script.js remains unchanged.|

|Add a Skills section styled as tag/pill groups grouped under headings like
"Languages", "Tools", "Currently Learning", similar layout to a typical tech-skills
grid but styled in the red/blue Spider-Man palette instead of default Bootstrap colors. Ask me anything that would help and discuss changes with me before implementing.|Updated the Skills section with:

Languages: HTML, CSS, JavaScript, C++, Python
Tools: Git, GitHub, VS Code
Currently Learning: Python, JavaScript
Added Spider-Man-themed HUD panels, responsive grouping, red/blue styling, and pill-shaped skill tags with hover states. script.js remains unchanged, and validation passed.|

|Add a small "Spidey-Sense" interactive element near the bottom — e.g. a mock terminal
or HUD readout styled like a Spider-Man tech display (think Peter's suit HUD) that
prints a short animated line like "web fluid: OK / status: web-slinging" when the
page loads or on click. Pure HTML/CSS/JS, no libraries. Discuss changes with me befoer implementing anything|Added the Spidey-Sense HUD near the bottom of the page.

Added a mock suit-terminal display with scan-line styling and status light.
Added animated output: web fluid: OK / status: web-slinging.
Scan runs automatically on page load.
Added a Run Scan button to replay the animation.
Preserved the existing Fun Fact interaction.
Updated index.html, styles.css, and script.js. JavaScript syntax|

|Redesign the contact section as a card with my email, GitHub, and LinkedIn as icon
buttons, styled consistently with the rest of the site's red/blue theme. Add a subtle
web-shoot animation on button hover. Discuss changes with me before implementing anything.|Redesigned the Contact section.

Added accessible icon buttons for Email, GitHub, and LinkedIn.
Used inline SVG icons with no external dependencies.
Styled the card with the existing red/blue HUD theme.
Added a subtle web-shoot line and lift effect on hover/focus.
Kept script.js unchanged.|

|Review index.html and style.css as a whole. Make sure spacing, font choices, and
color usage are consistent across all sections, mobile-responsive, and there's no
leftover default Bootstrap/browser styling clashing with the theme. Discuss with me before changing things.| 
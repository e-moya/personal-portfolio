# Personal Portfolio

My personal website, built with plain HTML, CSS, and JavaScript.

[View the live site](https://e-moya.github.io/personal-portfolio)

## Project Files

- `index.html` contains the page structure and content.
- `styles.css` controls the Spider-Man-inspired theme, layout, and responsive styling.
- `script.js` powers the fun-fact button, Spidey-Sense display, page loader, and photo gallery.

## Prompting Workflow

For future changes, I try to:

1. Describe the requested change and its purpose.
2. Identify the files that may change and any boundaries.
3. Clarify open questions before implementation.
4. Review the proposed plan before changes are made.

## Request and Change Log

| My request | What changed | Follow-up |
| --- | --- | --- |
| Separate page sections into cards while preserving content. | Added card sections and spacing, borders, and shadows. | Kept the project heading inside its Projects card. |
| Give the site a Spider-Man comic-book theme. | Added the red, blue, and yellow palette, halftone/web accents, comic panels, and a themed image. | Fixed the Fun Fact event-listener typo and added its reveal animation. |
| Make the page more horizontal and add useful portfolio links. | Added GitHub, Contact, and LinkedIn links and updated the project description. | Repositioned the intro to the upper left and About to its right after clarification. |
| Add a sticky nav and redesign the hero. | Added smooth-scrolling About, Projects, Skills, and Contact links, revised hero text, and CSS web-line hover effects. | Added the Skills and Contact sections. |
| Add a “What I Do” grid. | Added Problem Solving, C++, Python, and JavaScript HUD cards with responsive layout and hover glow. | Confirmed the listed technologies. |
| Rebuild Projects as a responsive card grid. | Added an auto-fit project card with a placeholder image, description, technology tags, GitHub link, and red hover glow. | Started with the portfolio project; more can be added later. |
| Group Skills into themed tag collections. | Added Languages, Tools, and Currently Learning groups with red/blue HUD panels and pill tags. | Languages: HTML, CSS, JavaScript, C++, Python. Tools: Git, GitHub, VS Code. Learning: Python, JavaScript. |
| Add an interactive Spidey-Sense display. | Added a suit-HUD terminal with animated status text and a replay button. | Runs on page load and can be replayed with Run Scan. |
| Redesign Contact with icon buttons and web-shoot hover effects. | Added accessible email, GitHub, and LinkedIn SVG buttons in a themed card. | Later replaced the LinkedIn settings URL with the public profile URL. |
| Review consistency, browser defaults, and responsiveness. | Corrected the doctype and language, normalized box sizing and spacing, consolidated styles, and added a tablet layout breakpoint. | No Bootstrap styling was present. |
| Remove excess desktop whitespace by adjusting the grid. | Changed desktop grid rows to give Intro, Projects, and Fun Fact separate rows; paired About with What I Do, and Skills with Contact. | Kept the mobile layout unchanged. |
| Add a first-load spider animation. | Added an inline SVG spider that drops on a CSS web line, then fades away. | Respects reduced-motion preferences and does not block page interaction. |
| Randomize Spidey-Sense scan readings. | Added six playful status messages, typed with the existing animation and without immediate repeats. | Scan still runs on load and from the button. |
| Add a subtle pattern to wide desktop margins. | Extended CSS web accents into low-opacity, full-height side patterns at wide viewport sizes. | Tablet and mobile styling stayed unchanged. |
| Replace the About image with personal and Spider-Man photos. | Added all six local images in alternating order in a single-photo carousel with controls and a counter. | Later changed it to advance automatically every five seconds; manual navigation resets the timer. |
| Update the profile and About Me wording. | Changed the name to Jesus Eduardo Moya, expanded the subtitle, and added the Computer Science/student description. | Corrected “sophmore” to “sophomore”; retained the short hero intro. |
| Center the hero and section headings. | Centered the hero text, About/What I Do/Projects/Fun Fact/Spidey-Sense titles, and the Fun Fact button. | Skills and Contact headings were left unchanged. |
| Add randomized Fun Facts. | Added four user-provided facts; the button chooses one at random and avoids an immediate repeat. | Clicking again still hides the fact. |
| Add webbing to the cards, but not the name card. | Replaced circular section accents with subtle CSS corner-web patterns and added smaller accents to nested panels. | Expanded the Fun Fact card’s web pattern across its full surface. |
| Move the loader spider toward the screen center. | Extended the web line and used viewport-relative positioning so the spider drops to the vertical midpoint. | Scales to phone and desktop viewport heights. |
| Update LinkedIn links. | Changed both LinkedIn buttons to the public profile URL. | — |
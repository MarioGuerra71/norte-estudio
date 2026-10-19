---
name: Norte Estudio
description: An architecture studio's monograph. Lime-white pages, graphite type, stone hairlines, one brick accent for state.
colors:
  cal: "#f5f3ef"
  papel: "#fbfaf8"
  grafito: "#1c1b19"
  gris: "#57534d"
  piedra: "#cfc8bd"
  borde-campo: "#8a8378"
  ladrillo: "#9c4f33"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.9vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  figures:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontFeature: "\"tnum\""
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  column-gap: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(5rem, 12vw, 9rem)"
  max: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.cal}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.ladrillo}"
    textColor: "{colors.cal}"
  link-arrow:
    textColor: "{colors.grafito}"
    height: "2.75rem"
  link-arrow-hover:
    textColor: "{colors.ladrillo}"
  field:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.grafito}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.8rem"
    height: "3rem"
  nav-link:
    textColor: "{colors.grafito}"
    height: "2.75rem"
  nav-link-current:
    textColor: "{colors.ladrillo}"
---

# Design System: Norte Estudio

## Overview

**Creative North Star: "The Studio Monograph"**

The site is set like a printed architecture monograph: each building shown big, labeled with plain facts, and the interface behaving like turning pages. Lime-white paper, graphite ink, stone-coloured hairlines and a single brick accent that appears only when something is current, hovered, focused or wrong. Type is one grotesk at a moderate scale with tight tracking; nothing shouts.

Density is low and the rhythm is generous: sections are separated by a large fluid gap, content sits on a strict 12-column grid, and photographs either run full bleed or occupy whole column spans. There are no cards, no shadows and no rounded corners. Structure comes from 1px rules: stone for quiet division, graphite for the start of a significant block.

Motion is native and quiet: a cross-document view transition morphs a project photograph from the index into the project page hero, and scroll-driven reveals fade sections up and open photographs from a slight inset. No loops, no JavaScript animation, and everything holds still under reduced motion.

**Key Characteristics:**
- Lime-white ground, graphite text, one brick accent reserved for state.
- One typeface (Schibsted Grotesk Variable) at weight 500 with negative tracking for every heading.
- Square corners, flat surfaces, structure drawn with 1px hairlines.
- Photographs full bleed or on whole 12-column spans; captions and facts set like plate notes.
- Native motion only: view-transition morph and scroll-driven reveals, gated by reduced motion.

## Colors

A warm, near-monochrome mineral palette: lime, paper, graphite and stone, with brick held back for state.

### Primary
- **Brick (ladrillo)**: the only accent. Used exclusively for state: the current page link, link and button hover, the index row hover, the 2px focus outline, the text caret, field error borders and error messages. Never a fill for decoration or a heading colour at rest.

### Neutral
- **Lime White (cal)**: the page ground everywhere, and text colour on graphite buttons and the selection.
- **Paper (papel)**: a half-step lighter than the ground; used only as the fill of form fields so they read as writable.
- **Graphite (grafito)**: all primary text, the primary button fill, the text selection background, and the heavier 1px rule that opens a significant block (approach items, studio steps, the closing call, the pager, the sent message).
- **Warm Grey (gris)**: secondary text (the `muted` voice): leads under display heads, captions, place/year/area metadata, fact labels, hints. Also the field border on hover.
- **Stone (piedra)**: hairlines only. Rules between index rows, fact rows and team rows, the footer top border, the scrollbar thumb. Never text, never a field border.
- **Field Border (borde-campo)**: the resting border of inputs, selects and textareas; chosen to hold at least 3:1 against both lime and paper.

### Named Rules
**The State-Only Brick Rule.** Brick appears only as a response: current, hover, focus, caret, error. If a screen at rest shows brick anywhere except the current nav link, it is wrong.

**The Two Hairlines Rule.** Stone draws quiet division between repeated rows; graphite marks the top edge of a new, weighted block. Field borders use their own stronger token, never stone.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk Variable, same family
**Label/Mono Font:** none; figures use the same family with tabular numerals

**Character:** a single contemporary grotesk carries everything. Headings are weight 500 with tight negative tracking and balanced wrapping; body runs at 400 with stylistic set 01 on and generous leading.

### Hierarchy
- **Display** (500, clamp 2.25 to 4.25rem, 1.04, -0.035em): one per page, the page's statement or project name; capped around 23ch on the home statement.
- **Headline** (500, clamp 1.75 to 2.5rem, 1.08, -0.025em): section heads and the closing call line.
- **Title** (500, about 1.2 to 2rem, -0.015 to -0.025em): project titles in the index rows, featured project titles, pager titles, team names, item heads (1.25rem).
- **Lead** (400, clamp 1.1875 to 1.375rem, 1.5, max 44ch): the subtitle under a display head, usually in warm grey; the opening paragraph of a project text.
- **Body** (400, 1.0625rem, 1.6): running text, kept to about 62ch in project texts.
- **Label** (400, 0.8125 to 0.9375rem): captions (0.8125rem, warm grey), fact labels and index metadata (0.9375rem), small print and hints (0.875rem). Sentence case; no uppercase, no letter-spaced labels.

### Named Rules
**The Moderate Scale Rule.** The largest type on the site is the display head at 4.25rem. No hero type beyond that, no thin weights, no all-caps.

**The Tabular Figures Rule.** Tabular figures apply only to numbers that line up or compare: years, areas, index numbers, step numbers. Never set prose in tabular figures.

## Layout

Content sits in a centred wrap (max 90rem, fluid side gutter clamp 1.25 to 3.5rem). Inside it, a 12-column grid with a fluid column gap (clamp 1 to 2rem) places everything. Below 64rem nearly every block spans all 12 columns; above it, blocks take asymmetric spans: featured projects alternate 7 columns of photo against 4 of text, project pages place facts in columns 1 to 4 (sticky) and text in 6 to 11, the contact page puts the statement in 1 to 5 and the form in 7 to 12, and three-up lists (approach, steps) span 4 columns each from 48rem.

Section rhythm is one large fluid gap (clamp 5 to 9rem) between major sections. Full-bleed photographs break out of the wrap entirely, with their captions re-aligned to the wrap. Breakpoints observed: 40rem (form fields pair up), 48rem (footer and three-up lists), 64rem (asymmetric spans, desktop index).

## Elevation & Depth

Completely flat. No box shadows, no tonal layering, no blur. Depth comes only from photography and from 1px rules; the one lighter surface is paper inside form fields.

### Named Rules
**The Flat Plate Rule.** Surfaces never lift. Hover changes colour or position by a few pixels, never adds a shadow.

## Shapes

Square everywhere: zero radius on buttons, fields, photographs and thumbnails. Form language is the rectangle and the hairline. Photographs are cropped with object-fit into fixed ratios (4:3 featured, 4:5 gallery, 1:1 mobile thumbnails) or viewport-relative heights for full-bleed heroes. The only icon is a thin-stroke SVG arrow (1.5px stroke, 18px), rotated 180 degrees for "back" and "previous".

## Components

### Buttons
Solid, quiet and rectangular.
- **Shape:** square corners (0), 1px border matching the fill, minimum height 3rem.
- **Primary:** graphite fill, lime text, weight 500, 1.5rem side padding, optional trailing arrow.
- **Hover / Focus:** fill and border shift to brick (160ms); focus shows the global 2px brick outline offset 3px.
- One button per view, reserved for the contact action and form submit.

### Arrow Link
The default call to action for navigation-style actions ("Ver proyectos", "Índice completo").
- **Style:** text weight 500 with a 1px currentColor bottom border, arrow icon trailing, minimum height 2.75rem.
- **Hover:** text turns brick and the arrow slides 3px right (200ms, ease-out curve).

### Inputs / Fields
- **Style:** paper fill, 1px field-border stroke, square corners, minimum height 3rem, padding 0.65 by 0.8rem. Labels sit above at 0.9375rem weight 500. Selects use a drawn graphite chevron.
- **Hover:** border darkens to warm grey.
- **Focus:** 2px brick outline offset 1px, border to graphite.
- **Error:** border turns brick (via aria-invalid) and a 0.875rem brick message appears below. Validation shows on blur, not while typing.
- **Checkbox:** native control at 1.2rem, accent colour graphite, label at weight 400.

### Navigation
- **Style:** wordmark "Norte" at left (600, 1.25rem, -0.03em), three text links at right (0.9375rem), header at least 4.5rem tall. No hamburger: the three links stay visible at every width.
- **States:** hover turns brick; the current page is brick with a 1px underline.

### Facts List
The monograph plate note. A definition list where each row is a two-column grid (9rem label, value), separated by stone hairlines with 0.7rem vertical padding; labels in warm grey at 0.9375rem, values in graphite, numeric values in tabular figures. Used for project facts and contact details.

### Project Index (signature)
A numbered typographic list of every project, rows divided by stone hairlines.
- **Mobile:** each row carries a square thumbnail on the left, title over place, year over area on the right.
- **Desktop (64rem up):** the list takes 58% of the width with columns number, title, place, year, area. The photo preview is drawn in CSS only: each row's image is absolutely positioned in the free 42% to the right, faded in on hover or focus (260ms), with the first project shown when nothing is hovered. The hovered row turns brick and its title shifts 0.5rem right; the focus ring is drawn inside the row so it does not cover the hairlines.

### Pager
Previous and next project at the foot of each project page: two columns under a graphite rule, each a small warm-grey label ("Anterior", "Siguiente") over a 500-weight title (clamp 1.25 to 1.625rem) with the arrow; the next link aligns right.

### Motion
- **Page morph:** cross-document view transitions (navigation auto) with each project photograph carrying a per-project name (`vt-<slug>`), so the index or featured photo morphs into the project hero and back; 520ms on the shared ease-out curve. A name may exist once per page, so the home index turns its names off where featured photos already carry them.
- **Reveal:** sections and list items fade up from 1.5rem below as they enter (scroll-driven, entry 0% to cover 25%).
- **Grow:** full-bleed photographs open from a 6% side inset to full width as they scroll in (entry 0% to cover 45%).
- **Reduced motion:** view transitions and scroll-driven animations exist only under no-preference and only where `animation-timeline: view()` is supported; otherwise content is simply present.

## Do's and Don'ts

### Do:
- **Do** keep brick for state only: current page, hover, focus, caret, errors.
- **Do** set every heading in Schibsted Grotesk at weight 500 with negative tracking, and cap display type at the h-display scale.
- **Do** place content on the 12-column grid inside the 90rem wrap; let photographs run full bleed or span whole columns.
- **Do** divide repeated rows with 1px stone hairlines and open weighted blocks with a 1px graphite rule.
- **Do** present project data as a facts list with tabular figures on years and areas.
- **Do** give every new project photo a `vt-<slug>` view-transition name so it morphs into its page.
- **Do** keep interactive targets at least 2.75rem tall and field borders on the field-border token.

### Don't:
- **Don't** use shadows, cards or rounded corners anywhere.
- **Don't** use stone for text or form-field borders; it is below 3:1 and exists for hairlines only.
- **Don't** add a second accent colour or use brick as a decorative fill.
- **Don't** set oversized or thin display type, all-caps headings, or letter-spaced uppercase labels above headings.
- **Don't** add looping animation or JavaScript-driven motion; motion is the page morph and the scroll reveals, all off under reduced motion.
- **Don't** hide the main navigation behind a hamburger menu.

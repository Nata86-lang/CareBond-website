import type { AppCard, Card, CtaCard, HeroCard, PushCard, ReplyCard } from "./types";

/** French spacing: no line break before ":" or inside "14 h", "37,1 °C", "86 ans", "7,2 mmol/L". */
const fr = (s: string) =>
  s
    .replace(/ ([:;!?»])/g, " $1")
    .replace(/(\d) (h|°C|ans|mmol\/L)(?=\b|\s|$|[.,])/g, "$1 $2")
    .replace(/(\d) h (\d)/g, "$1 h $2");

const esc = (s: string) =>
  fr(s).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

const initials = (name: string) =>
  name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ICON_PHOTO =
  '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="7.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M3.5 14.5l4.5-4 3 2.5 2.5-2 3.5 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const ICON_CHECK =
  '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_SEND =
  '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10h11M10.5 5.5L15 10l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function hero(c: HeroCard) {
  return `<article class="card hero">
    <p class="hero__eyebrow">${esc(c.eyebrow)}</p>
    <h2 class="hero__title">${esc(c.title)}</h2>
    <p class="hero__text">${esc(c.text)}</p>
    <p class="hero__hint"><span class="hero__hint-line" aria-hidden="true"></span>${esc(c.hint ?? "")}</p>
  </article>`;
}

function app(c: AppCard) {
  const fields = c.fields?.length
    ? `<dl class="app__fields">${c.fields
        .map((f) => `<div><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`)
        .join("")}</dl>`
    : "";
  const lines = c.lines?.length
    ? `<ul class="app__lines">${c.lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`
    : "";
  const button = c.button
    ? `<div class="app__btn" data-role="send-button">
        <span class="app__btn-idle">${esc(c.button.label)}${ICON_SEND}</span>
        <span class="app__btn-sent">${ICON_CHECK}${esc(c.button.sentLabel)}</span>
      </div>`
    : "";
  return `<article class="card app">
    <header class="app__head">
      ${c.tag ? `<span class="app__tag">${esc(c.tag)}</span>` : ""}
      ${c.chip ? `<span class="chip">${ICON_CHECK}${esc(c.chip)}</span>` : ""}
    </header>
    <h2 class="app__title">${esc(c.title)}</h2>
    ${c.subtitle ? `<p class="app__subtitle">${esc(c.subtitle)}</p>` : ""}
    ${fields}${lines}
    ${c.body ? `<p class="app__body">${esc(c.body)}</p>` : ""}
    ${c.attachment ? `<p class="app__attach">${ICON_PHOTO}${esc(c.attachment)}</p>` : ""}
    ${c.meta ? `<p class="app__meta">${esc(c.meta)}</p>` : ""}
    ${button}
  </article>`;
}

function push(c: PushCard) {
  return `<article class="card push">
    <span class="push__icon" aria-hidden="true">C</span>
    <div class="push__text">
      <p class="push__top"><b>CareBond</b><span>${esc(c.now ?? "")}</span></p>
      <p class="push__body">${esc(c.body ?? "")}</p>
    </div>
  </article>`;
}

function reply(c: ReplyCard) {
  return `<article class="card reply">
    <header class="reply__head">
      <span class="reply__avatar" aria-hidden="true">${esc(initials(c.author))}</span>
      <p class="reply__who"><b>${esc(c.author)}</b><span>${esc(c.role)}</span></p>
      <time class="reply__time">${esc(c.time)}</time>
    </header>
    <p class="reply__body">${esc(c.body)}</p>
  </article>`;
}

function cta(c: CtaCard) {
  return `<article class="card cta">
    <h2 class="cta__title">${esc(c.title)}</h2>
    <a class="cta__btn" href="${esc(c.href)}">${esc(c.button)}</a>
  </article>`;
}

export function renderCard(c: Card): string {
  switch (c.type) {
    case "hero":
      return hero(c);
    case "app":
      return app(c);
    case "push":
      return push(c);
    case "reply":
      return reply(c);
    case "cta":
      return cta(c);
  }
}

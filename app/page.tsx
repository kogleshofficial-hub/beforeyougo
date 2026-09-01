"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { guides } from "@/lib/guides";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(guides.map((guide) => guide.category)))];
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return guides.filter((guide) => {
      const matchesCategory = category === "All" || guide.category === category;
      const haystack = `${guide.title} ${guide.country} ${guide.category} ${guide.summary}`.toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [query, category]);

  return (
    <main>
      <header className="shell nav">
        <Link href="/" className="brand" aria-label="BeforeYouGo home"><span className="mark">✓</span>BeforeYouGo</Link>
        <nav className="navlinks" aria-label="Primary navigation"><a href="#guides">Guides</a><a href="#how">How it works</a><Link href="/my-checklist">My checklist</Link></nav>
      </header>

      <section className="shell hero">
        <span className="eyebrow"><span className="dot" /> Official-source-first</span>
        <h1>Know what you need <span>before you go.</span></h1>
        <p>Turn confusing pre-visit requirements into a clear checklist. Use a verified guide or build your own private list in seconds.</p>
        <form className="search" onSubmit={(event) => { event.preventDefault(); document.getElementById("guides")?.scrollIntoView({ behavior: "smooth" }); }}>
          <label className="sr-only" htmlFor="guide-search">Search guides</label>
          <input id="guide-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “passport renewal” or “driving licence”…" autoComplete="off" />
          <button className="primary" type="submit">Find my checklist</button>
        </form>
        <div className="trustrow" aria-label="Product principles"><span>✓ No account required</span><span>✓ Your checklist stays private</span><span>✓ Official source shown</span></div>
      </section>

      <section id="guides" className="shell section" aria-labelledby="guides-title">
        <div className="sectionhead">
          <div><span className="eyebrow">Useful first</span><h2 id="guides-title">Start with a verified task</h2><p>Focused guides with the source visible, so you can verify before travelling.</p></div>
          <div className="filters" aria-label="Filter guides">{categories.map((item) => <button type="button" key={item} className={`filter ${category === item ? "active" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        </div>
        <div className="resultsbar"><span>{filtered.length} {filtered.length === 1 ? "guide" : "guides"}</span>{query && <button type="button" className="clear" onClick={() => setQuery("")}>Clear search</button>}</div>
        <div className="grid">
          {filtered.length ? filtered.map((guide) => <Link className="card" href={`/guide/${guide.slug}`} key={guide.slug}><div className="cardtop"><span className="icon" aria-hidden="true">{guide.icon}</span><span className="pill">{guide.country}</span></div><h3>{guide.title}</h3><p>{guide.summary}</p><div className="meta"><span>{guide.category}</span><span>Source checked {guide.verified}</span></div></Link>) : <div className="empty"><strong>No verified guide found.</strong><span>Try a broader search, or build a private checklist from scratch below.</span></div>}
        </div>

        <div className="custom-cta"><div><span className="eyebrow">Nothing matches?</span><h2>Make your own checklist.</h2><p>Add exactly what you need for any visit, appointment, trip, application, or task. Your list stays on your device.</p></div><Link className="primary" href="/my-checklist">Build my checklist →</Link></div>

        <div id="how" className="feature">
          <div><span className="eyebrow">Simple by design</span><h2>Prepare once. Travel with confidence.</h2><p>BeforeYouGo separates shared information from your private preparation. Guides are read-only; your checkmarks and custom items belong to your local workspace.</p></div>
          <div className="steps"><div className="step"><b>01</b><div><strong>Find your task</strong><span>Search for what you are actually trying to do.</span></div></div><div className="step"><b>02</b><div><strong>Build your list</strong><span>Tick guide items or create your own private checklist.</span></div></div><div className="step"><b>03</b><div><strong>Verify before leaving</strong><span>Open the official source because rules can change.</span></div></div></div>
        </div>
      </section>

      <footer className="shell footer"><div><strong>BeforeYouGo</strong><span>Preparation aid only · Always verify official requirements.</span></div><div className="creator">Created by Koglesh R. Murugan</div></footer>
    </main>
  );
}

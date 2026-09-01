"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuide(slug);
  const storageKey = `beforeyougo:checklist:${slug}`;
  const [done, setDone] = useState<boolean[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!guide) return;
    try {
      const saved = window.localStorage.getItem(storageKey);
      const parsed = saved ? JSON.parse(saved) : [];
      setDone(Array.isArray(parsed) && parsed.length === guide.items.length ? parsed.map(Boolean) : guide.items.map(() => false));
    } catch {
      setDone(guide.items.map(() => false));
    } finally {
      setHydrated(true);
    }
  }, [guide, storageKey]);

  useEffect(() => {
    if (!guide || !hydrated) return;
    try { window.localStorage.setItem(storageKey, JSON.stringify(done)); } catch { /* Private browsing may block storage; the checklist still works for the session. */ }
  }, [done, guide, hydrated, storageKey]);

  const completed = useMemo(() => done.filter(Boolean).length, [done]);
  const progress = guide ? Math.round((completed / guide.items.length) * 100) : 0;

  if (!guide) return <main><div className="shell detail"><Link href="/" className="back">← Back to guides</Link><div className="panel notfound"><h1>Guide not found</h1><p>We don't have a verified guide for that task yet.</p><Link href="/" className="primary">Browse available guides</Link></div></div></main>;

  const toggle = (index: number) => setDone((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  const reset = () => setDone(guide.items.map(() => false));

  return (
    <main>
      <header className="shell nav"><Link href="/" className="brand"><span className="mark">✓</span>BeforeYouGo</Link><nav className="navlinks" aria-label="Primary navigation"><Link href="/#guides">Guides</Link><Link href="/#how">How it works</Link></nav></header>
      <section className="shell detail">
        <Link href="/" className="back">← Back to guides</Link>
        <div className="detailgrid">
          <article className="panel">
            <div className="cardtop"><span className="icon" aria-hidden="true">{guide.icon}</span><span className="pill">{guide.country}</span></div>
            <div className="detail-kicker"><span>{guide.category}</span><span>Source checked {guide.verified}</span></div>
            <h1>{guide.title}</h1>
            <p className="lead">{guide.summary}</p>

            <div className="notice"><strong>Verify before you leave.</strong><span>{guide.note}</span></div>

            <div className="progress-head"><div><strong>Your preparation</strong><span>{completed} of {guide.items.length} complete</span></div><button type="button" className="textbutton" onClick={reset} disabled={completed === 0}>Reset</button></div>
            <div className="progress" aria-label={`${progress}% complete`}><span style={{ width: `${progress}%` }} /></div>

            <div className="checklist" aria-label="Personal preparation checklist">
              {guide.items.map((item, index) => <label className={`check ${done[index] ? "checked" : ""}`} key={item}><input type="checkbox" checked={done[index] || false} onChange={() => toggle(index)} /><span className="checkmark" aria-hidden="true">✓</span><span>{item}</span></label>)}
            </div>
            <p className="privacy"><span>🔒</span> Your checklist is private to this browser. Other visitors have their own separate checklist and cannot see your checkmarks.</p>

            <h2>Recommended flow</h2>
            <div className="flow">{guide.steps.map((step, index) => <div className="flowitem" key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></div>)}</div>

            <h2>Official source</h2>
            <div className="source"><div><strong>{guide.sourceName}</strong><div className="tiny">Primary reference · {guide.scope}</div></div><a href={guide.source} target="_blank" rel="noopener noreferrer">Open official source ↗</a></div>
          </article>

          <aside className="panel side"><span className="side-label">Before you leave</span><h2>Four final checks</h2><div className="sideitem"><strong>01 · Eligibility</strong><span>Rules may depend on age, status, document history or service type.</span></div><div className="sideitem"><strong>02 · Documents</strong><span>Check whether originals, copies, photos or supporting documents are required.</span></div><div className="sideitem"><strong>03 · Location</strong><span>Some services are available only at selected offices or facilities.</span></div><div className="sideitem"><strong>04 · Freshness</strong><span>Open the official source immediately before your trip in case the rules have changed.</span></div><div className="side-note"><strong>Why this matters</strong><span>BeforeYouGo organizes information; it does not issue documents, make appointments or replace the agency that controls the process.</span></div></aside>
        </div>
      </section>
      <footer className="shell footer"><div><strong>BeforeYouGo</strong><span>Preparation aid only · Always verify official requirements.</span></div><div className="creator">Created by Koglesh R. Murugan</div></footer>
    </main>
  );
}

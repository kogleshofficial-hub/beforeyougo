"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Item = { id: string; text: string; done: boolean };
const STORAGE = "beforeyougo:my-checklist:v1";

export default function MyChecklist() {
  const [title, setTitle] = useState("My visit");
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const saved = JSON.parse(raw);
        if (typeof saved.title === "string") setTitle(saved.title);
        if (Array.isArray(saved.items)) setItems(saved.items.filter((x: Item) => x && typeof x.id === "string" && typeof x.text === "string" && typeof x.done === "boolean"));
      }
    } catch { /* keep a usable empty checklist */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE, JSON.stringify({ title, items })); } catch { /* still usable for this visit */ }
  }, [title, items, hydrated]);

  const completed = useMemo(() => items.filter((item) => item.done).length, [items]);
  const progress = items.length ? Math.round((completed / items.length) * 100) : 0;

  const add = (event: FormEvent) => {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems((current) => [...current, { id: crypto.randomUUID(), text: value, done: false }]);
    setText("");
  };
  const reset = () => setItems((current) => current.map((item) => ({ ...item, done: false })));
  const clear = () => { setItems([]); setTitle("My visit"); };

  return (
    <main>
      <header className="shell nav"><Link href="/" className="brand"><span className="mark">✓</span>BeforeYouGo</Link><nav className="navlinks" aria-label="Primary navigation"><Link href="/#guides">Guides</Link><Link href="/my-checklist">My checklist</Link></nav></header>
      <section className="shell detail builder">
        <Link href="/" className="back">← Back to guides</Link>
        <div className="panel">
          <span className="eyebrow">Personal workspace</span>
          <h1>Build your own checklist.</h1>
          <p className="lead">Not seeing your task? Start from scratch. Add exactly what you need to remember.</p>
          <label className="field"><strong>Checklist name</strong><input value={title} onChange={(e) => setTitle(e.target.value.slice(0, 100))} placeholder="e.g. University appointment" /></label>
          <div className="progress-head"><div><strong>Your preparation</strong><span>{completed} of {items.length} complete · {progress}%</span></div><button className="textbutton" type="button" onClick={reset} disabled={!completed}>Uncheck all</button></div>
          <div className="progress" aria-label={`${progress}% complete`}><span style={{ width: `${progress}%` }} /></div>
          <div className="checklist" aria-label="Your personal checklist">
            {items.length ? items.map((item) => <div className={`check custom-check ${item.done ? "checked" : ""}`} key={item.id}><label><input type="checkbox" checked={item.done} onChange={() => setItems((current) => current.map((x) => x.id === item.id ? { ...x, done: !x.done } : x))} /><span className="checkmark" aria-hidden="true">✓</span><span>{item.text}</span></label><button type="button" className="remove-item" onClick={() => setItems((current) => current.filter((x) => x.id !== item.id))} aria-label={`Remove ${item.text}`}>×</button></div>) : <div className="empty"><strong>Your list is empty.</strong><span>Add your first item below.</span></div>}
          </div>
          <form className="add-item" onSubmit={add}><label htmlFor="new-item"><strong>Add an item</strong><span>Documents, questions, things to bring, or anything else.</span></label><div className="add-row"><input id="new-item" value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. Bring appointment confirmation" maxLength={160} /><button type="submit" disabled={!text.trim()}>Add item</button></div></form>
          <div className="builder-actions"><button className="secondary" type="button" onClick={clear} disabled={!items.length && title === "My visit"}>Clear checklist</button><Link className="primary" href="/#guides">Browse verified guides</Link></div>
          <p className="privacy"><span>🔒</span> This checklist is stored only in this browser. We do not publish or send your personal items anywhere.</p>
        </div>
      </section>
      <footer className="shell footer"><div><strong>BeforeYouGo</strong><span>Preparation aid only · Verify important requirements with the official source.</span></div><div className="creator">Created by Koglesh R. Murugan</div></footer>
    </main>
  );
}

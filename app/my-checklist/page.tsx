"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Item = { id: string; text: string; done: boolean };
const WORKSPACE_KEY = "beforeyougo:workspace:v1";
const SUMMARY_KEY = "beforeyougo:last-checklist:v1";

function getWorkspaceId() {
  try { const existing = localStorage.getItem(WORKSPACE_KEY); if (existing) return existing; const created = crypto.randomUUID(); localStorage.setItem(WORKSPACE_KEY, created); return created; }
  catch { return "private-session"; }
}
function publishSummary(title: string, items: Item[]) {
  try { localStorage.setItem(SUMMARY_KEY, JSON.stringify({ kind: "custom", href: "/my-checklist", title: title.trim() || "My checklist", done: items.filter((i) => i.done).length, total: items.length, updatedAt: new Date().toISOString() })); window.dispatchEvent(new Event("beforeyougo:checklist-updated")); } catch {}
}

export default function MyChecklist() {
  const [title, setTitle] = useState("My visit"); const [items, setItems] = useState<Item[]>([]); const [text, setText] = useState(""); const [workspace, setWorkspace] = useState<string | null>(null); const [hydrated, setHydrated] = useState(false);
  useEffect(() => { const id = getWorkspaceId(); setWorkspace(id); try { const raw = localStorage.getItem(`beforeyougo:my-checklist:${id}:v2`); if (raw) { const saved = JSON.parse(raw); if (typeof saved.title === "string") setTitle(saved.title); if (Array.isArray(saved.items)) setItems(saved.items.filter((x: Item) => x && typeof x.id === "string" && typeof x.text === "string" && typeof x.done === "boolean")); } } catch {} setHydrated(true); }, []);
  useEffect(() => { if (!hydrated || !workspace) return; try { localStorage.setItem(`beforeyougo:my-checklist:${workspace}:v2`, JSON.stringify({ title, items })); publishSummary(title, items); } catch {} }, [title, items, hydrated, workspace]);
  const completed = useMemo(() => items.filter((item) => item.done).length, [items]); const progress = items.length ? Math.round((completed / items.length) * 100) : 0;
  const add = (event: FormEvent) => { event.preventDefault(); const value = text.trim(); if (!value) return; setItems((current) => [...current, { id: crypto.randomUUID(), text: value, done: false }]); setText(""); };
  const reset = () => setItems((current) => current.map((item) => ({ ...item, done: false })));
  const clear = () => { setItems([]); setTitle("My visit"); };
  const newWorkspace = () => { try { localStorage.setItem(WORKSPACE_KEY, crypto.randomUUID()); } catch {} window.location.reload(); };
  return <main>
    <header className="shell nav"><Link href="/" className="brand"><span className="mark">✓</span>BeforeYouGo</Link><nav className="navlinks" aria-label="Primary navigation"><Link href="/#guides">Guides</Link><Link href="/my-checklist">My checklist</Link><button type="button" className="nav-action" onClick={newWorkspace}>New private workspace</button></nav></header>
    <section className="shell detail builder"><Link href="/" className="back">← Back to guides</Link><div className="panel"><span className="eyebrow">Personal workspace</span><h1>Build your own checklist.</h1><p className="lead">Not seeing your task? Start from scratch. Add exactly what you need to remember.</p>
      <label className="field"><strong>Checklist name</strong><input value={title} onChange={(e) => setTitle(e.target.value.slice(0, 100))} placeholder="e.g. University appointment" /></label>
      <div className="progress-head"><div><strong>Your preparation</strong><span>{completed} of {items.length} complete · {progress}%</span></div><button className="textbutton" type="button" onClick={reset} disabled={!completed}>Uncheck all</button></div><div className="progress" aria-label={`${progress}% complete`}><span style={{ width: `${progress}%` }} /></div>
      <div className="checklist" aria-label="Your personal checklist">{items.length ? items.map((item) => <div className={`check custom-check ${item.done ? "checked" : ""}`} key={item.id}><label><input type="checkbox" checked={item.done} onChange={() => setItems((current) => current.map((x) => x.id === item.id ? { ...x, done: !x.done } : x))} /><span className="checkmark" aria-hidden="true">✓</span><span>{item.text}</span></label><button type="button" className="remove-item" onClick={() => setItems((current) => current.filter((x) => x.id !== item.id))} aria-label={`Remove ${item.text}`}>×</button></div>) : <div className="empty"><strong>Your list is empty.</strong><span>Add your first item below.</span></div>}</div>
      <form className="add-item" onSubmit={add}><label htmlFor="new-item"><strong>Add an item</strong><span>Documents, questions, things to bring, or anything else.</span></label><div className="add-row"><input id="new-item" value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. Bring appointment confirmation" maxLength={160} /><button type="submit" disabled={!text.trim()}>Add item</button></div></form>
      <div className="builder-actions"><button className="secondary" type="button" onClick={clear} disabled={!items.length && title === "My visit"}>Clear checklist</button><Link className="primary" href="/#guides">Browse verified guides</Link></div><p className="privacy"><span>🔒</span> This checklist is stored only in this private browser workspace. Other visitors cannot see it. If another person uses this same browser, have them choose “New private workspace” first.</p>
    </div></section><footer className="shell footer"><div><strong>BeforeYouGo</strong><span>Preparation aid only · Verify important requirements with the official source.</span></div><div className="creator">Created by Koglesh R. Murugan</div></footer>
  </main>;
}

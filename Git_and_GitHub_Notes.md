# Git & GitHub — Learning Notes

A simple, running log of Git/GitHub concepts I learn while working on this repo.
Written in plain language, but keeping the real Git words so I get used to them.

---

## Quick vocabulary (words used below)

- **Repository (repo)** — the project folder that Git is tracking.
- **Commit** — a saved snapshot of my changes, with a message and a unique ID
  (a hash like `026bd2d`).
- **Local** — the copy of the repo on *my* computer.
- **Remote** — the copy of the repo stored on GitHub (its nickname is `origin`).
- **`main`** — the name of the main branch (the main line of work).
- **Push** — upload my local commits to the remote (GitHub).
- **Pull** — download commits from the remote into my local copy.
- **Fetch** — download info about the remote *without* changing my files yet.
- **Diverged** — my local and the remote each have new commits the other
  doesn't have. They've gone in two different directions.

---

## 1. Fixing a rejected push (when branches have "diverged")

### The error I got
```
! [rejected]        main -> main (fetch first)
error: failed to push some refs to '...'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally.
```

### What it means (in plain words)
I tried to `push` my commit to GitHub, but GitHub already had a **newer commit**
that my computer had never seen. This happens when I push to the same branch
from **another device** or edit files directly on the GitHub website.

Git blocked the push on purpose. If it had let me push, it would have **erased**
that other commit from GitHub. So Git says: *"fetch first"* — go get the missing
work before you push.

This situation is called a **diverged** branch:
- My computer has 1 commit GitHub doesn't have.
- GitHub has 1 commit my computer doesn't have.

---

### Step 1 — See what's really going on

```bash
git fetch origin
```
**`fetch`** downloads the latest commit *information* from the remote (`origin`)
but does **not** touch my actual files yet. It's a safe "let me look first" step.

```bash
git rev-list --left-right --count origin/main...main
```
This counts how far apart the two sides are. It printed `1  1`, meaning:
- Left number (`1`) = commits on **GitHub** that I don't have (I'm 1 *behind*).
- Right number (`1`) = commits on **my computer** that GitHub doesn't have (I'm 1 *ahead*).

```bash
git diff --stat main origin/main
```
**`diff`** compares my `main` with GitHub's `main`. **`--stat`** shows just a
summary of *which files* changed (not the full details). This told me the two
commits changed **different files**, which means there will be **no conflict**
(a conflict is when both sides edit the *same lines* and Git can't auto-merge).

---

### Step 2 — Bring in the missing work, then push

```bash
git pull --rebase origin main
```
**`pull`** = fetch + combine the remote's work into mine.
The **`--rebase`** part changes *how* they get combined:

- Without `--rebase`, Git makes an extra "merge commit" to glue the two lines
  together (messier history).
- **With `--rebase`**, Git temporarily lifts my commit off, adds GitHub's commit
  first, then **re-applies my commit on top**. This keeps the history a clean,
  straight line.

```bash
git push origin main
```
Now that my computer has GitHub's commit *plus* mine stacked neatly on top, the
**`push`** is accepted. ✅

---

### Picture of what `--rebase` did

**Before** (diverged — two branches split apart):
```
... 69301bb ── 026bd2d   ← my commit (only on my computer)
           └── b3d6683   ← their commit (only on GitHub)
```

**After `git pull --rebase`** (one straight line):
```
... 69301bb ── b3d6683 ── 6af8c2e
                (theirs)   (mine, re-applied on top)
```

> ⚠️ Notice my commit's ID **changed** from `026bd2d` to `6af8c2e`. That's
> normal — rebasing rebuilds my commit on a new starting point, so it gets a
> new hash.

---

### The short version to remember

If a push ever gets **rejected** with *"fetch first"*, just run:
```bash
git pull --rebase origin main
git push origin main
```

### Habits that prevent this
- I work from **more than one device**, so I should run
  `git pull --rebase origin main` at the **start** of every session to grab any
  work I did elsewhere *before* I make new changes.
- Rule of thumb: **pull before you push.**
- Different files changed ⇒ smooth, no conflict.
  Same lines changed on both sides ⇒ Git pauses and asks me to fix the
  **conflict** by hand before continuing.

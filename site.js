fetch('releases.json').then(r => { if (!r.ok) throw new Error('Release unavailable'); return r.json(); }).then(release => {
  for (const format of ['zip', 'exe']) {
    const value = release[format];
    if (!value) continue;
    const url = new URL(value, location.href);
    if (url.protocol !== 'https:') continue;
    const button = document.querySelector(`[data-download="${format}"]`);
    const link = document.createElement('a');
    link.className = 'button primary'; link.href = url.href;
    link.textContent = document.documentElement.lang === 'cs' ? `Stáhnout ${format.toUpperCase()} ↓` : `Download ${format.toUpperCase()} ↓`;
    button.replaceWith(link);
    document.querySelector(`[data-status="${format}"]`).textContent = release.version;
  }
}).catch(() => { /* Keep honest, disabled availability states when offline. */ });

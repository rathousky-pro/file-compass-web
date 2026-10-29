import {readFileSync} from 'node:fs';
const entries = [
 ['copy','Kopírování pod kontrolou','Copy with confidence','Cíl, řešení konfliktů a zařazení do fronty v jednom dialogu.','Choose a destination, handle conflicts and queue your copy.'],
 ['compression','Komprese a archivy','Compression and archives','Výběr formátu, kompresního poměru a cílové složky.','Choose an archive format, compression level and destination.'],
 ['analyzer','Kde mizí místo na disku?','See what takes up space','Velikosti složek, přehled souborů a přehledná obdélníková mapa.','Explore folder sizes, file counts and an interactive treemap.'],
 ['images','Převod obrázků','Image conversion','Výstupní formát, kvalita, rozměry a otočení pro dávku obrázků.','Set the format, quality, dimensions and rotation for a batch of images.'],
 ['audio','Převod zvuku','Audio conversion','Formát, datový tok, kanály a vzorkovací frekvence na jednom místě.','Control the format, bitrate, channels and sample rate in one place.'],
 ['csv','Náhled bez další aplikace','Preview without switching apps','CSV jako čitelná tabulka s volbou oddělovače a záhlaví.','Read CSV as a table with separator and header controls.'],
 ['editor','Vestavěný editor','Built-in editor','Karty souborů, zvýraznění syntaxe a kontrola ukázkové konfigurace.','File tabs, syntax highlighting and validation of a sample configuration.']
];
export function shot(lang,id,title,lazy=true){
 const src=`assets/screenshots/${lang}-${id}.png`;
 const png=readFileSync(src), width=png.readUInt32BE(16),height=png.readUInt32BE(20);
 return `<a class="screenshot-link" href="${src}" data-lightbox aria-label="${lang==='cs'?'Zvětšit':'Enlarge'}: ${title}"><img src="${src}" width="${width}" height="${height}" ${lazy?'loading="lazy"':'fetchpriority="high"'} decoding="async" alt="${title}"><span class="zoom-hint" aria-hidden="true">↗</span></a>`;
}
export function gallery(lang){const cs=lang==='cs';return `<section class="section wrap" id="gallery"><div class="section-head"><div><div class="eyebrow">${cs?'Podívejte se dovnitř':'A closer look'}</div><h2>${cs?'Skutečný program.<br>Skutečné možnosti.':'Real software.<br>See it in action.'}</h2></div><p>${cs?'Skutečné snímky aplikace s demonstračními soubory. Kliknutím si prohlédnete každý detail.':'Actual application screenshots with demonstration files. Click any image to explore the details.'}</p></div><div class="screenshot-grid">${entries.map(([id,cz,en,czText,enText])=>`<figure class="gallery-card">${shot(lang,id,cs?cz:en)}<figcaption><h3>${cs?cz:en}</h3><p>${cs?czText:enText}</p></figcaption></figure>`).join('')}</div><p class="gallery-note">${cs?'Všechny soubory a jejich obsah v ukázkách jsou demonstrační. Číslované značky na snímcích pocházejí z uživatelské příručky.':'All files and file contents shown are demonstration data. Numbered markers in the screenshots come from the user guide.'}</p></section><dialog class="image-dialog" aria-label="${cs?'Zvětšený snímek programu':'Enlarged application screenshot'}"><form method="dialog"><button class="button" aria-label="${cs?'Zavřít náhled':'Close preview'}">${cs?'Zavřít':'Close'} ×</button></form><img alt=""><p></p></dialog>`;}

// Scans the media folders and writes manifest.js.
// Run by double-clicking build-manifest.bat (Windows) OR:  node build-manifest.js
const fs=require('fs');
const IMG=/\.(jpe?g|png|gif|webp|avif)$/i, VID=/\.(mp4|webm|mov|m4v)$/i, AUD=/\.(m4a|mp3|wav|ogg|aac)$/i;
const folders={pyaru:'pyaru',paglus:'paglus',adventures:'adventures',kiss:'kiss',favs:'favs'};
const out={};
const list=(dir,re)=>{try{return fs.readdirSync(dir).filter(f=>re.test(f)&&!f.startsWith('.')).sort().map(f=>dir+'/'+f);}catch(e){return[];}};
for(const k in folders){ out[k]=list(folders[k],IMG).concat(list(folders[k],VID)); }   // images + any videos in gallery folders
out.music=list('Music',AUD);
const vids=list('Video',VID); out.video=vids[0]||'';
fs.writeFileSync('manifest.js','/* AUTO-GENERATED — re-run build-manifest to refresh. You may also hand-edit. */\nwindow.MANIFEST='+JSON.stringify(out,null,2)+';\n');
console.log('\n  manifest.js updated:');
for(const k in out){const v=out[k];console.log('   '+k+': '+(Array.isArray(v)?v.length+' files':(v||'none')));}
console.log('');

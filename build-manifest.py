# Fallback generator (no Node). Run: python build-manifest.py  (or double-click build-manifest.bat)
import os, json, re
IMG=re.compile(r'\.(jpe?g|png|gif|webp|avif)$',re.I); VID=re.compile(r'\.(mp4|webm|mov|m4v)$',re.I); AUD=re.compile(r'\.(m4a|mp3|wav|ogg|aac)$',re.I)
def lst(d,rx):
    try: return sorted(d+'/'+f for f in os.listdir(d) if rx.search(f) and not f.startswith('.'))
    except: return []
out={}
for k in ['pyaru','paglus','adventures','kiss','favs']: out[k]=lst(k,IMG)+lst(k,VID)
out['music']=lst('Music',AUD)
v=lst('Video',VID); out['video']=v[0] if v else ''
open('manifest.js','w').write('/* AUTO-GENERATED */\nwindow.MANIFEST='+json.dumps(out,indent=2)+';\n')
print('manifest.js updated:'); [print('  ',k,':',len(x) if isinstance(x,list) else x) for k,x in out.items()]

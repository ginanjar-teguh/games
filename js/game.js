/* ===== AUDIO MANAGER ===== */
const AUDIO = {
  bgm: new Audio("./assets/audio/bgm-dkv-ambient.wav"),
  correct: new Audio("./assets/audio/correct.wav"),
  wrong: new Audio("./assets/audio/wrong.wav"),
  click: new Audio("./assets/audio/click.wav"),
  levelComplete: new Audio("./assets/audio/level-complete.wav")
};
AUDIO.bgm.loop=true;
AUDIO.bgm.volume=0.12;
AUDIO.correct.volume=0.45;
AUDIO.wrong.volume=0.35;
AUDIO.click.volume=0.20;
AUDIO.levelComplete.volume=0.45;
function playSound(name){
  const sound=AUDIO[name];
  if(!sound)return;
  try{ sound.currentTime=0; const p=sound.play(); if(p&&p.catch)p.catch(()=>{}); }catch(e){}
}
function startBGM(){
  try{ const p=AUDIO.bgm.play(); if(p&&p.catch)p.catch(()=>{}); }catch(e){}
}

const LEVELS_DATA=[
{id:1,title:"BASIC DKV",questions:[
{id:1,answer:"GARIS",clue:"Unsur visual berupa goresan yang memiliki panjang dan arah.",hint:"Salah satu unsur dasar desain."},
{id:2,answer:"WARNA",clue:"Unsur visual yang dapat membangun suasana dan menarik perhatian.",hint:"Berkaitan dengan color."},
{id:3,answer:"BENTUK",clue:"Unsur visual yang memiliki bidang atau massa tertentu.",hint:"Geometris atau organik."},
{id:4,answer:"LAYOUT",clue:"Pengaturan tata letak elemen visual dalam media desain.",hint:"Mengatur posisi berbagai elemen."},
{id:5,answer:"LOGO",clue:"Identitas visual yang mewakili brand atau organisasi.",hint:"Identitas sebuah merek."},
{id:6,answer:"GRID",clue:"Sistem garis untuk membantu menyusun elemen secara teratur.",hint:"Membantu keteraturan layout."},
{id:7,answer:"KOMPOSISI",clue:"Pengaturan berbagai elemen visual agar membentuk susunan harmonis.",hint:"Berkaitan dengan susunan elemen visual."},
{id:8,answer:"TIPOGRAFI",clue:"Seni dan teknik mengatur huruf dalam komunikasi visual.",hint:"Berkaitan dengan huruf."}
]},
{id:2,title:"VISUAL DESIGN",questions:[
{id:1,answer:"HIERARKI",clue:"Prinsip yang mengatur tingkat kepentingan informasi agar mata mengetahui mana yang harus dilihat lebih dulu.",hint:"Ada urutan prioritas visual."},
{id:2,answer:"ALIGNMENT",clue:"Prinsip menyusun elemen agar memiliki garis atau posisi yang selaras.",hint:"Membuat elemen terasa rapi dan terhubung."},
{id:3,answer:"BALANCE",clue:"Prinsip yang mengatur keseimbangan bobot visual dalam sebuah desain.",hint:"Visual tidak terasa berat sebelah."},
{id:4,answer:"PROXIMITY",clue:"Prinsip yang mengelompokkan elemen yang saling berhubungan dengan menempatkannya berdekatan.",hint:"Berkaitan dengan jarak antar-elemen."},
{id:5,answer:"REPETITION",clue:"Penggunaan elemen visual yang diulang untuk menciptakan konsistensi dan ritme.",hint:"Elemen yang sama muncul berulang."},
{id:6,answer:"KONTRAS",clue:"Perbedaan yang sengaja dibuat antara elemen untuk menciptakan penekanan.",hint:"Bisa berupa perbedaan ukuran, warna, atau bentuk."},
{id:7,answer:"SIMETRI",clue:"Susunan elemen yang memiliki keseimbangan atau kemiripan pada sisi yang berlawanan.",hint:"Bayangkan dua sisi yang saling mencerminkan."},
{id:8,answer:"SKALA",clue:"Perbandingan ukuran suatu elemen terhadap elemen lain atau keseluruhan bidang.",hint:"Berkaitan dengan besar-kecil."},
{id:9,answer:"FOKUS",clue:"Titik atau elemen visual yang paling ingin diperhatikan oleh penonton.",hint:"Pusat perhatian."},
{id:10,answer:"RUANGNEGATIF",clue:"Area kosong di sekitar atau di antara objek yang membantu memberi napas pada desain.",hint:"Bukan objek utama, tetapi penting dalam komposisi."}
]},
{id:3,title:"PROGRAM & ACARA DIGITAL",questions:[
{id:1,answer:"PROGRAM",clue:"Rangkaian materi audiovisual yang dirancang untuk disajikan kepada penonton.",hint:"Produk utama dalam siaran."},
{id:2,answer:"SEGMENTASI",clue:"Pembagian program menjadi beberapa bagian berdasarkan fungsi atau isi.",hint:"Program dibagi menjadi beberapa bagian."},
{id:3,answer:"HOST",clue:"Orang yang memandu dan menghubungkan bagian-bagian dalam sebuah acara.",hint:"Pembawa acara."},
{id:4,answer:"SCRIPT",clue:"Dokumen yang berisi teks, dialog, atau arahan yang menjadi pedoman produksi.",hint:"Naskah produksi."},
{id:5,answer:"RUNDOWN",clue:"Susunan urutan acara beserta waktu dan durasi setiap bagian.",hint:"Urutan jalannya acara."},
{id:6,answer:"STORYBOARD",clue:"Rangkaian gambar yang memvisualisasikan urutan shot sebelum produksi.",hint:"Visualisasi rencana shot."},
{id:7,answer:"SHOTLIST",clue:"Daftar shot yang perlu direkam untuk memenuhi kebutuhan produksi.",hint:"Daftar pengambilan gambar."},
{id:8,answer:"PRODUKSI",clue:"Tahap ketika konsep program diwujudkan menjadi materi audiovisual.",hint:"Proses pembuatan program."},
{id:9,answer:"LIVE",clue:"Penyajian program kepada penonton secara langsung pada waktu berlangsungnya acara.",hint:"Siaran langsung."},
{id:10,answer:"TRANSISI",clue:"Perpindahan visual dari satu shot atau segmen menuju shot atau segmen berikutnya.",hint:"Penghubung antarbagian."}
]},
{id:4,title:"PRODUCTION",questions:[
{id:1,answer:"DIRECTOR",clue:"Orang yang mengarahkan keputusan kreatif dan teknis selama produksi.",hint:"Pemimpin artistik produksi."},
{id:2,answer:"BLOCKING",clue:"Pengaturan posisi dan pergerakan talent atau objek sebelum pengambilan gambar.",hint:"Posisi dan gerak di dalam adegan."},
{id:3,answer:"SWITCHING",clue:"Proses memilih sumber kamera yang ditampilkan pada output program multicamera.",hint:"Memilih kamera saat live."},
{id:4,answer:"CONTINUITY",clue:"Menjaga kesinambungan posisi, properti, kostum, dan aksi antar-shot.",hint:"Konsistensi antar-shot."},
{id:5,answer:"PAN",clue:"Gerakan kamera secara horizontal dari kiri ke kanan atau sebaliknya.",hint:"Gerak kamera mendatar."},
{id:6,answer:"TILT",clue:"Gerakan kamera secara vertikal ke atas atau ke bawah.",hint:"Gerak kamera naik-turun."},
{id:7,answer:"ZOOM",clue:"Perubahan ukuran tampilan subjek melalui perubahan focal length lensa.",hint:"Mendekat atau menjauh secara optik."},
{id:8,answer:"TRIPOD",clue:"Peralatan berkaki tiga yang membantu menjaga kamera tetap stabil.",hint:"Penyangga kamera."},
{id:9,answer:"MULTICAMERA",clue:"Metode produksi yang menggunakan beberapa kamera secara bersamaan.",hint:"Lebih dari satu kamera."},
{id:10,answer:"LIGHTING",clue:"Pengaturan cahaya untuk membentuk tampilan subjek dan suasana adegan.",hint:"Pencahayaan."},
{id:11,answer:"CALLSHEET",clue:"Dokumen operasional yang memuat informasi jadwal, lokasi, kru, dan kebutuhan shooting.",hint:"Panduan kerja harian produksi."},
{id:12,answer:"FRAMING",clue:"Keputusan mengenai elemen apa yang masuk ke dalam batas gambar dan bagaimana subjek ditempatkan.",hint:"Apa yang terlihat di dalam frame."}
]},
{id:5,title:"VISUAL ANALYSIS",questions:[
{id:1,answer:"LEADROOM",clue:"Ruang kosong yang diberikan di depan arah pandang atau gerak subjek.",hint:"Ruang di depan subjek."},
{id:2,answer:"HEADROOM",clue:"Ruang antara bagian atas kepala subjek dan batas atas frame.",hint:"Ruang di atas kepala."},
{id:3,answer:"HIGHANGLE",clue:"Sudut kamera dari posisi lebih tinggi yang dapat membuat subjek tampak kecil atau kurang dominan.",hint:"Kamera berada di atas subjek."},
{id:4,answer:"LOWANGLE",clue:"Sudut kamera dari posisi lebih rendah yang dapat membuat subjek tampak kuat atau dominan.",hint:"Kamera berada di bawah subjek."},
{id:5,answer:"RULEOFTHIRDS",clue:"Prinsip menempatkan subjek pada garis atau titik perpotongan pembagian sepertiga frame.",hint:"Frame dibagi menjadi tiga bagian."},
{id:6,answer:"CONTINUITY",clue:"Kesalahan posisi properti atau aksi antar-shot yang tidak sesuai cerita berkaitan dengan konsep...",hint:"Kesinambungan."},
{id:7,answer:"ONEEIGHTY",clue:"Aturan untuk menjaga konsistensi arah pandang dengan mempertahankan posisi kamera pada satu sisi garis aksi.",hint:"Garis imajiner antar-subjek."},
{id:8,answer:"ESTABLISHING",clue:"Shot yang memperkenalkan lokasi atau konteks ruang sebelum aksi utama.",hint:"Shot pembuka lokasi."},
{id:9,answer:"CLOSEUP",clue:"Jenis shot yang menekankan detail wajah atau ekspresi subjek.",hint:"Shot jarak dekat."},
{id:10,answer:"STORYTELLING",clue:"Penggunaan pilihan visual dan audiovisual untuk menyampaikan makna, informasi, dan emosi cerita.",hint:"Cara visual menyampaikan cerita."},
{id:11,answer:"COMPOSITION",clue:"Susunan hubungan antar-elemen visual agar gambar memiliki fokus, keseimbangan, dan makna.",hint:"Susunan keseluruhan visual."},
{id:12,answer:"SCREENSPACE",clue:"Ruang visual yang dipahami penonton melalui posisi, arah pandang, dan hubungan subjek dalam frame.",hint:"Ruang yang dibentuk oleh gambar."}
]},
{id:6,title:"MASTER CROSS",questions:[
{id:1,answer:"TIPOGRAFI",clue:"Pemilihan dan pengaturan huruf menjadi faktor utama keterbacaan poster.",hint:"Konsep huruf."},
{id:2,answer:"HIERARKI",clue:"Judul, subjudul, dan informasi pendukung diberi tingkat penekanan berbeda agar urutan baca jelas.",hint:"Prioritas informasi."},
{id:3,answer:"STORYBOARD",clue:"Director ingin merencanakan angle, shot size, dan urutan visual sebelum shooting.",hint:"Rencana visual sebelum produksi."},
{id:4,answer:"SWITCHING",clue:"Operator live memilih kamera 1 lalu kamera 2 untuk output program.",hint:"Pemilihan sumber kamera."},
{id:5,answer:"CONTINUITY",clue:"Properti berpindah posisi tanpa alasan antara dua shot.",hint:"Kesinambungan."},
{id:6,answer:"LEADROOM",clue:"Talent melihat ke kiri tetapi ditempatkan terlalu dekat dengan sisi kiri frame.",hint:"Ruang di depan pandangan."},
{id:7,answer:"LIGHTING",clue:"Wajah talent terlalu gelap sehingga ekspresi sulit terbaca.",hint:"Pencahayaan."},
{id:8,answer:"EDITING",clue:"Materi hasil shooting disusun menjadi rangkaian cerita yang utuh.",hint:"Penyuntingan audiovisual."},
{id:9,answer:"COMPOSITION",clue:"Subjek, ruang kosong, garis, dan elemen pendukung perlu diatur agar gambar efektif.",hint:"Susunan elemen visual."},
{id:10,answer:"FRAMING",clue:"Terlalu banyak objek tidak relevan masuk ke gambar sehingga fokus penonton terpecah.",hint:"Apa yang masuk frame."},
{id:11,answer:"SHOTLIST",clue:"Kru membutuhkan daftar untuk memastikan semua pengambilan gambar yang direncanakan telah direkam.",hint:"Daftar shot."},
{id:12,answer:"STORYTELLING",clue:"Angle, gerakan kamera, komposisi, dan editing dipilih untuk membangun emosi cerita.",hint:"Visual untuk menyampaikan cerita."},
{id:13,answer:"MULTICAMERA",clue:"Sebuah acara live menggunakan beberapa kamera secara bersamaan.",hint:"Produksi dengan banyak kamera."},
{id:14,answer:"TIMELINE",clue:"Editor menempatkan klip, dialog, musik, dan efek berdasarkan posisi waktunya.",hint:"Area penyusunan berdasarkan waktu."},
{id:15,answer:"RULEOFTHIRDS",clue:"Subjek ditempatkan pada titik perpotongan pembagian sepertiga frame.",hint:"Prinsip komposisi sepertiga."}
]}
];class VisualCross{
 constructor(playerName="Pemain") {
  this.playerName = playerName;
  this.size=15;this.levelIndex=0;this.score=0;this.gems=250;this.correct=0;this.attempts=0;this.totalCorrect=0;this.totalAttempts=0;this.active=null;this.pos=0;this.remaining=300;this.letters={};
  const playerDisplay=document.getElementById("playerNameDisplay");
  if(playerDisplay) playerDisplay.textContent=this.playerName;
  this.renderKeyboard();this.bind();this.bindLevelButtons();this.loadLevel();
  this.renderLeaderboard();
 }
 updateLevelButtons(){
  document.querySelectorAll(".level-btn").forEach((b,i)=>{
    b.classList.toggle("active",i===this.levelIndex);
    b.classList.toggle("locked",i>this.levelIndex);
    b.disabled=i>this.levelIndex;
  });
 }
 loadLevel(){
  const level=LEVELS_DATA[this.levelIndex];
  this.level=level;
  this.grid=Array.from({length:this.size},()=>Array(this.size).fill(null));
  this.words=[];this.correct=0;this.attempts=0;this.active=null;this.pos=0;this.letters={};this.remaining=300;
  document.getElementById("levelText").textContent=level.id===6?"MASTER":`LEVEL ${level.id}`;
  document.querySelector(".subject-pill").textContent=level.title;
  this.updateLevelButtons();
  this.build();
  this.select(this.words[0]);
  this.updateStats();
  this.timer();
 }
 cells(p){return Array.from({length:p.answer.length},(_,i)=>[p.r+(p.dir==="D"?i:0),p.c+(p.dir==="A"?i:0)])}

 canPlace(p){
  const cells=this.cells(p);
  for(let i=0;i<cells.length;i++){
   const [r,c]=cells[i];
   if(r<0||c<0||r>=this.size||c>=this.size)return false;
   const existing=this.grid[r][c];
   if(existing && existing.letter!==p.answer[i])return false;
   if(!existing){
    if(p.dir==="A"){
     for(const rr of [r-1,r+1])if(rr>=0&&rr<this.size&&this.grid[rr][c])return false;
    }else{
     for(const cc of [c-1,c+1])if(cc>=0&&cc<this.size&&this.grid[r][cc])return false;
    }
   }
  }
  const before=p.dir==="A"?[p.r,p.c-1]:[p.r-1,p.c];
  const after=p.dir==="A"?[p.r,p.c+p.answer.length]:[p.r+p.answer.length,p.c];
  for(const [r,c] of [before,after])if(r>=0&&c>=0&&r<this.size&&c<this.size&&this.grid[r][c])return false;
  return true;
 }
 put(p){
  this.cells(p).forEach(([r,c],i)=>{
   if(!this.grid[r][c])this.grid[r][c]={letter:p.answer[i],ids:[]};
   if(!this.grid[r][c].ids.includes(p.id))this.grid[r][c].ids.push(p.id);
  });
  this.words.push(p);
 }
 candidates(word){
  const out=[];
  for(const base of this.words){
   for(let wi=0;wi<word.answer.length;wi++)for(let bi=0;bi<base.answer.length;bi++){
    if(word.answer[wi]!==base.answer[bi])continue;
    const bc=this.cells(base)[bi],dir=base.dir==="A"?"D":"A";
    out.push({id:word.id,answer:word.answer,r:bc[0]-(dir==="D"?wi:0),c:bc[1]-(dir==="A"?wi:0),dir,q:word});
   }
  }
  return out;
 }
 build(){
  const questions=this.level.questions;
  const first=questions[0];
  this.put({id:first.id,answer:first.answer,r:7,c:Math.floor((this.size-first.answer.length)/2),dir:"A",q:first});
  for(let i=1;i<questions.length;i++){
    const word=questions[i];
    let placed=false;
    const cand=this.candidates(word).sort(()=>Math.random()-.5);
    for(const p of cand){
      if(this.canPlace(p)){this.put(p);placed=true;break}
    }
    if(!placed){
      outer:for(let r=0;r<this.size;r++)for(let c=0;c<this.size;c++)for(const dir of ["A","D"]){
        const p={id:word.id,answer:word.answer,r,c,dir,q:word};
        if(this.canPlace(p)){this.put(p);placed=true;break outer}
      }
    }
    if(!placed) console.warn("Tidak dapat menempatkan:",word.answer);
  }
  this.renderGrid();
 }
 renderGrid(){
  const el=document.getElementById("crossword");el.innerHTML="";
  for(let r=0;r<this.size;r++)for(let c=0;c<this.size;c++){
   const cell=this.grid[r][c],d=document.createElement("div");d.className="cell "+(cell?"":"block");
   if(cell){
    const starts=this.words.filter(w=>w.r===r&&w.c===c);
    if(starts.length){const n=document.createElement("span");n.className="num";n.textContent=Math.min(...starts.map(w=>w.id));d.appendChild(n)}
    d.dataset.rc=`${r},${c}`;d.onclick=()=>this.clickCell(r,c);
   }
   el.appendChild(d);
  }
  this.drawLetters();
 }
 drawLetters(){
  document.querySelectorAll(".cell").forEach(d=>{
   const rc=d.dataset.rc;if(!rc)return;const [r,c]=rc.split(",").map(Number),key=`${r},${c}`;
   const old=d.querySelector(".letter");if(old)old.remove();
   const activeCells=this.active?this.cells(this.active):[];
   d.classList.toggle("word",activeCells.some(x=>x[0]===r&&x[1]===c));
   d.classList.toggle("active",!!this.active&&activeCells[this.pos]?.[0]===r&&activeCells[this.pos]?.[1]===c);
   if(this.letters[key]){const s=document.createElement("span");s.className="letter";s.textContent=this.letters[key];d.appendChild(s)}
  });
 }
 renderWheel(){
  const wheel=document.getElementById("letterWheel");
  wheel.querySelectorAll(".wheel-letter").forEach(x=>x.remove());
  const letters=[...this.active.answer].sort(()=>Math.random()-.5);
  const n=letters.length;
  const minAngle=360/n*0.72;
  let angles=[],tries=0;
  while(angles.length<n && tries<300){
    tries++;
    const candidate=Math.random()*360-90;
    if(angles.every(a=>{
      let d=Math.abs(candidate-a)%360;
      d=Math.min(d,360-d);
      return d>=minAngle;
    })) angles.push(candidate);
  }
  if(angles.length<n) angles=Array.from({length:n},(_,i)=>-90+(360*i/n)).sort(()=>Math.random()-.5);
  const wheelSize=wheel.clientWidth || 290;
  const radiusBase=Math.max(52, Math.min(92, wheelSize*0.32 + Math.max(0, n-8)*1.2));
  const letterSize=n>=11?Math.max(22, wheelSize*0.093):n>=9?Math.max(25, wheelSize*0.107):Math.max(28, wheelSize*0.13);
  const buttonSize=Math.max(34, Math.min(48, wheelSize*0.16));
  letters.forEach((ch,i)=>{
    const b=document.createElement("button");
    b.className="wheel-letter";
    b.textContent=ch;
    b.dataset.index=i;
    b.style.fontSize=`${Math.round(letterSize)}px`;
    b.style.width=`${Math.round(buttonSize)}px`;
    b.style.height=`${Math.round(buttonSize*1.18)}px`;
    const radius=radiusBase+(Math.random()*Math.min(26,wheelSize*0.09)-Math.min(13,wheelSize*0.045));
    const angle=angles[i]*Math.PI/180;
    const x=Math.cos(angle)*radius, y=Math.sin(angle)*radius;
    b.style.left=`calc(50% + ${x}px - ${buttonSize/2}px)`;
    b.style.top=`calc(50% + ${y}px - ${buttonSize*0.59}px)`;
    b.style.transform=`rotate(${Math.round(Math.random()*50-25)}deg)`;
    b.onclick=()=>this.type(ch);
    wheel.appendChild(b);
  });
 }
 select(p,pos=0){
  this.active=p;this.pos=pos;
  document.getElementById("clueText").textContent=p.q.clue;
  document.getElementById("clueNumber").textContent=p.id;
  document.getElementById("directionBadge").textContent=p.dir==="A"?"— MENDATAR":"— MENURUN";
  document.getElementById("progress").textContent=`${this.correct}/${this.words.length}`;
  this.renderWheel();this.drawLetters();
 }
 clickCell(r,c){
  const candidates=this.words.filter(w=>this.cells(w).some(x=>x[0]===r&&x[1]===c));
  if(!candidates.length)return;
  const p=candidates.find(w=>w.dir===this.active?.dir)||candidates[0];
  this.select(p,this.cells(p).findIndex(x=>x[0]===r&&x[1]===c));
 }
 type(ch){
  playSound("click");
  if(!this.active)return;
  const [r,c]=this.cells(this.active)[this.pos];this.letters[`${r},${c}`]=ch;
  if(this.pos<this.active.answer.length-1)this.pos++;
  this.drawLetters();
 }
 erase(){
  if(!this.active)return;
  const [r,c]=this.cells(this.active)[this.pos];delete this.letters[`${r},${c}`];
  if(this.pos>0)this.pos--;this.drawLetters();
 }
 check(){
  const answer=this.cells(this.active).map(x=>this.letters[`${x[0]},${x[1]}`]||"").join("");
  if(answer.length<this.active.answer.length)return this.msg("Isi semua kotak terlebih dahulu.","bad");
  this.attempts++;
  if(answer===this.active.answer){
	playSound("correct");
   this.correct++;this.score+=100;this.msg(`✓ BENAR — ${answer}`,"good");this.updateStats();
   const i=this.words.indexOf(this.active);
   if(i<this.words.length-1){
     setTimeout(()=>this.select(this.words[i+1]),650);
   }else if(this.isLevelComplete()){
     setTimeout(()=>this.finish(),900);
   }else{
     setTimeout(()=>{
       const nextUnanswered=this.words.find(w=>!this.isWordCorrect(w));
       if(nextUnanswered)this.select(nextUnanswered);
       this.msg("Masih ada kolom yang belum terjawab. Lengkapi semuanya untuk lanjut level.","bad");
     },650);
   }
  }else{
   playSound("wrong");
   this.msg("✕ Belum tepat. Ulangi dalam 3 detik.","bad");
   setTimeout(()=>{this.cells(this.active).forEach(x=>delete this.letters[`${x[0]},${x[1]}`]);this.pos=0;this.drawLetters()},3000);
  }
 }
 hint(){this.gems=Math.max(0,this.gems-100);this.msg("💡 "+this.active.q.hint+" (-100 gem)","good")}
 shuffle(){
  this.renderWheel();
  this.msg("↝ Huruf diacak ulang.","good");
 }
 isWordCorrect(word){
   return this.cells(word).map(x=>this.letters[`${x[0]},${x[1]}`]||"").join("")===word.answer;
 }
 isLevelComplete(){
   return this.words.length>0 && this.words.every(w=>this.isWordCorrect(w));
 }
 updateStats(){document.getElementById("score").textContent=this.score;document.getElementById("accuracy").textContent=(this.attempts?Math.round(this.correct/this.attempts*100):0)+"%";document.getElementById("progress").textContent=`${this.correct}/${this.words.length}`}
 renderKeyboard(){
  const el=document.getElementById("keyboard");
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(ch=>{
    const b=document.createElement("button");
    b.textContent=ch;
    b.dataset.key=ch;

    // Efek tombol ditekan dengan mouse/touch.
    b.addEventListener("pointerdown",()=>{
      b.classList.add("key-pressed");
      playSound("click");
    });
    ["pointerup","pointercancel","pointerleave"].forEach(evt=>{
      b.addEventListener(evt,()=>b.classList.remove("key-pressed"));
    });

    b.onclick=()=>this.type(ch);
    el.appendChild(b);
  });
}
 bindLevelButtons(){
  document.querySelectorAll(".level-btn").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      const target=Number(btn.dataset.level);
      if(target<=this.levelIndex){this.levelIndex=target;this.loadLevel();}
    });
  });
 }
 bind(){
  document.getElementById("checkBtn").onclick=()=>this.check();document.getElementById("eraseBtn").onclick=()=>this.erase();document.getElementById("hintBtn").onclick=()=>this.hint();document.getElementById("shuffleBtn").onclick=()=>this.shuffle();
  
  document.addEventListener("keydown",e=>{
    if(/^[a-z]$/i.test(e.key)){
      const key=e.key.toUpperCase();
      const btn=document.querySelector(`.keyboard button[data-key="${key}"]`);
      if(btn){
        btn.classList.add("key-pressed");
        clearTimeout(btn._pressTimer);
        btn._pressTimer=setTimeout(()=>btn.classList.remove("key-pressed"),120);
      }
      this.type(key);
    }
    if(e.key==="Backspace")this.erase();
    if(e.key==="Enter")this.check();
  });
 }
 timer(){
  clearInterval(this.timerId);
  this.timerId=setInterval(()=>{
    if(this.remaining>0){
      this.remaining--;
    }

    const m=Math.floor(this.remaining/60),s=this.remaining%60;
    document.getElementById("time").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    if(this.remaining<=0){
      clearInterval(this.timerId);
      this.timeoutReset();
    }
  },1000);
 }
 timeoutReset(){
  playSound("wrong");

  // Semua isian jawaban pada level aktif dikosongkan.
  this.letters={};
  this.correct=0;
  this.attempts=0;
  this.active=null;
  this.pos=0;
  this.remaining=300;

  // Tampilkan kembali crossword yang sama, tetapi seluruh kotak kosong.
  this.renderGrid();
  this.select(this.words[0]);
  this.updateStats();
  this.msg("⏰ Waktu habis! Semua kotak dikosongkan. Level diulang.","bad");

  // Mulai kembali timer dari awal untuk level yang sama.
  this.timer();
 }
 finish(){
  if(!this.isLevelComplete()){
    const remaining=this.words.filter(w=>!this.isWordCorrect(w)).length;
    this.msg(`⚠️ Masih ada ${remaining} kolom yang belum terjawab.`,"bad");
    const nextUnanswered=this.words.find(w=>!this.isWordCorrect(w));
    if(nextUnanswered)this.select(nextUnanswered);
    return;
  }
  playSound("levelComplete");
  clearInterval(this.timerId);
  this.totalCorrect+=this.correct;
  this.totalAttempts+=this.attempts;
  if(this.levelIndex<LEVELS_DATA.length-1){
    const next=LEVELS_DATA[this.levelIndex+1];
    this.msg(`🏆 ${this.level.title} SELESAI — masuk ${next.title}`,"good");
    setTimeout(()=>{this.levelIndex++;this.loadLevel()},1800);
  }else{
    const accuracy=this.totalAttempts?Math.round(this.totalCorrect/this.totalAttempts*100):0;
    const rank=this.saveLeaderboardScore(this.playerName,this.score,accuracy);
    this.msg(`🏆 MASTER CROSS SELESAI — ${accuracy}% akurasi`,"good");
    document.getElementById("progress").textContent=`${this.correct}/${this.words.length}`;
    this.showFinalLeaderboard(rank);
  }
 }
 getLeaderboard(){
  try{
    const raw=localStorage.getItem("visualCrossLeaderboard");
    const data=raw?JSON.parse(raw):[];
    if(!Array.isArray(data)) return [];
    return data.filter(x=>x&&typeof x.name==="string"&&Number.isFinite(Number(x.score)))
      .map(x=>({name:x.name,score:Number(x.score),accuracy:Number(x.accuracy)||0}))
      .sort((a,b)=>b.score-a.score || b.accuracy-a.accuracy)
      .slice(0,5);
  }catch(e){return []}
 }
 saveLeaderboardScore(name,score,accuracy){
  const board=this.getLeaderboard();
  const entry={name:String(name).trim().slice(0,24)||"Pemain",score:Math.max(0,Number(score)||0),accuracy:Math.max(0,Math.min(100,Number(accuracy)||0))};
  board.push(entry);
  board.sort((a,b)=>b.score-a.score || b.accuracy-a.accuracy);
  const limited=board.slice(0,5);
  try{localStorage.setItem("visualCrossLeaderboard",JSON.stringify(limited));}catch(e){}
  this.renderLeaderboard();
  const rank=limited.findIndex(x=>x.name===entry.name&&x.score===entry.score&&x.accuracy===entry.accuracy)+1;
  return rank;
 }
 renderLeaderboard(){
  const list=document.getElementById("leaderboardList");
  if(!list)return;
  const board=this.getLeaderboard();
  list.innerHTML="";
  if(!board.length){
    const empty=document.createElement("li");
    empty.className="leaderboard-empty";
    empty.textContent="Belum ada skor. Jadilah yang pertama!";
    list.appendChild(empty);
    return;
  }
  board.forEach((entry,i)=>{
    const li=document.createElement("li");
    li.className=`leaderboard-item ${entry.name===this.playerName?"current-player":""}`;
    li.innerHTML=`<span class="rank">${i+1}</span><span class="leader-name" title="${entry.name.replace(/"/g,"&quot;")}">${entry.name.replace(/[&<>]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[m]))}</span><span class="leader-score">${entry.score.toLocaleString("id-ID")}</span>`;
    list.appendChild(li);
  });
 }
 showFinalLeaderboard(rank){
  const btn=document.getElementById("modalBtn");
  const title=document.getElementById("modalTitle");
  const text=document.getElementById("modalText");
  const overlay=document.getElementById("overlay");
  if(!overlay||!title||!text)return;
  title.textContent=rank>0?`🏆 PERINGKAT #${rank}`:"HASIL PERMAINAN";
  text.textContent=rank>0?`${this.playerName}, skor kamu masuk TOP 5 leaderboard!`:`${this.playerName}, permainan selesai.`;
  if(btn){btn.textContent="TUTUP";btn.onclick=()=>overlay.classList.add("hidden");}
  overlay.classList.remove("hidden");
 }
 msg(text,type){const el=document.getElementById("feedback");el.textContent=text;el.className=`feedback show ${type}`;clearTimeout(this.msgTimer);this.msgTimer=setTimeout(()=>el.className="feedback",2200)}
}
window.addEventListener("DOMContentLoaded",()=>{
  const welcome=document.getElementById("welcomeScreen");
  const shell=document.getElementById("gameShell");
  const enter=document.getElementById("enterGameBtn");
  const nameOverlay=document.getElementById("nameOverlay");
  const nameForm=document.getElementById("nameForm");
  const nameInput=document.getElementById("playerNameInput");
  const nameError=document.getElementById("nameError");
  if(!welcome || !shell || !enter || !nameOverlay || !nameForm || !nameInput) return;

  let started=false;

  const openNamePopup=()=>{
    nameOverlay.classList.remove("hidden");
    nameOverlay.setAttribute("aria-hidden","false");
    nameInput.value="";
    if(nameError) nameError.textContent="";
    requestAnimationFrame(()=>nameInput.focus());
  };

  enter.addEventListener("click",()=>{
    if(started)return;
    openNamePopup();
  });

  nameForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const playerName=nameInput.value.trim().replace(/\s+/g," ");

    if(playerName.length<2){
      if(nameError) nameError.textContent="Nama minimal 2 karakter.";
      nameInput.focus();
      return;
    }

    if(playerName.length>24){
      if(nameError) nameError.textContent="Nama maksimal 24 karakter.";
      nameInput.focus();
      return;
    }

    if(started)return;
    started=true;
    startBGM();
    nameOverlay.classList.add("hidden");
    nameOverlay.setAttribute("aria-hidden","true");
    welcome.classList.add("welcome-exit");

    setTimeout(()=>{
      welcome.style.display="none";
      shell.classList.remove("game-hidden");
      new VisualCross(playerName);
    },320);
  });

  nameInput.addEventListener("input",()=>{
    if(nameError) nameError.textContent="";
  });
});

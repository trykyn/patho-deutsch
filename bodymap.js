// Fachsprache 모음의 인체 그림 (정면, 단순화한 도식). 좌표계 0 0 200 400, 그림 속 왼쪽 = 환자의 오른쪽.
// 장기마다 key가 있고, 카드에서 style="--k-liver: 강조색; --v-liver: 1" 처럼 CSS 변수로 칠한다.
// --k-KEY: 채우기/선 색, --v-KEY: 평소 숨긴 장기를 보이게(1). 여성/남성 장기는 --f / --m 이 1일 때 흐리게 보임.
const BM = (() => {
  const fill = (k, hid) => `fill:var(--k-${k},var(--o));stroke:var(--bm-line);stroke-width:.6;${hid ? `opacity:var(--v-${k},${hid})` : ''}`;
  const line = (k, w, hid, base = '--o2') => `fill:none;stroke:var(--k-${k},var(${base}));stroke-width:${w};stroke-linecap:round;stroke-linejoin:round;${hid ? `opacity:var(--v-${k},${hid})` : ''}`;
  const P = (k, d, hid) => `<path d="${d}" style="${fill(k, hid)}"/>`;
  const L = (k, d, w, hid, base) => `<path d="${d}" style="${line(k, w, hid, base)}"/>`;
  const E = (k, cx, cy, rx, ry, hid, rot) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" ${rot ? `transform="rotate(${rot} ${cx} ${cy})"` : ''} style="${fill(k, hid)}"/>`;
  const F = 'var(--f,0)', M = 'var(--m,0)', H = '0';
  const g = [
    // 몸 윤곽 (피부)
    `<g style="fill:var(--bm-body);stroke:var(--k-skin,var(--bm-line));stroke-width:var(--w-skin,1.2)">
      <circle cx="100" cy="36" r="26"/>
      <path d="M90 60 L90 78 Q70 80 58 88 Q48 94 48 110 L52 200 Q48 250 52 290 Q60 318 84 326 L116 326 Q140 318 148 290 Q152 250 148 200 L152 110 Q152 94 142 88 Q130 80 110 78 L110 60 Z"/>
    </g>`,
    // 숨김 기본: 복막, 흉곽, 척수/신경, 골수(장골)
    L('peritoneum', 'M64 200 Q56 260 70 302 Q100 314 130 302 Q144 260 136 200', 2, H),
    L('thorax', 'M60 104 Q100 92 140 104 M58 122 Q100 110 142 122 M58 140 Q100 128 142 140 M58 158 Q100 146 142 158 M60 176 Q100 164 140 176 M62 194 Q100 182 138 194', 1.6, H),
    L('spinal', 'M100 62 L100 262', 3, H),
    L('nerve', 'M100 62 L100 262 M100 110 L66 100 M100 110 L134 100 M100 160 L70 172 M100 160 L130 172 M100 240 L74 300 M100 240 L126 300', 1.6, H),
    P('marrow', 'M56 264 Q62 248 86 256 L86 282 Q70 284 58 278 Z M144 264 Q138 248 114 256 L114 282 Q130 284 142 278 Z', H),
    // 가슴
    P('lung', 'M94 112 Q70 106 63 140 Q57 180 66 197 Q82 193 94 189 Z M106 112 Q130 106 137 140 Q143 180 134 197 Q120 197 110 192 L109 162 Z'),
    L('pleura', 'M94 112 Q70 106 63 140 Q57 180 66 197 Q82 193 94 189 Z M106 112 Q130 106 137 140 Q143 180 134 197 Q120 197 110 192 L109 162 Z', 3, H),
    `<rect x="93" y="110" width="15" height="82" rx="4" style="${fill('mediastinum', H)}"/>`,
    E('thymus', 100, 124, 6, 9, H),
    L('esophagus', 'M103 70 L103 150 Q104 170 112 192', 3.4),
    `<rect x="97" y="74" width="6" height="40" rx="3" style="${fill('trachea')}"/>`,
    L('bronchus', 'M100 112 L86 128 M86 128 L80 140 M86 128 L88 146 M100 112 L114 128 M114 128 L120 140 M114 128 L112 146', 2.6),
    L('vein', 'M95 140 L95 262', 2.4, '', '--o'),
    L('aorta', 'M104 150 Q102 136 96 138 Q90 142 98 152 L101 262 M101 262 L92 290 M101 262 L110 290', 2.6, '', '--o'),
    P('heart', 'M97 150 Q103 138 116 145 Q129 156 119 174 Q111 183 102 177 Q93 166 97 150 Z'),
    L('pericard', 'M95 148 Q102 134 118 142 Q133 156 121 177 Q111 187 100 180 Q90 168 95 148 Z', 2.4, H),
    L('diaphragm', 'M62 199 Q100 181 138 199', 2),
    `<g style="fill:none;stroke:var(--k-breast,var(--o2));stroke-width:2.4;opacity:var(--v-breast,0)"><circle cx="80" cy="150" r="14"/><circle cx="120" cy="150" r="14"/><circle cx="80" cy="152" r="2"/><circle cx="120" cy="152" r="2"/></g>`,
    // 배 위쪽
    P('liver', 'M62 201 Q100 191 113 200 Q105 216 86 223 Q68 227 62 214 Z'),
    E('gallbladder', 88, 223, 4, 6.5),
    L('bileduct', 'M90 228 L98 238', 1.8),
    P('stomach', 'M111 191 Q134 189 137 207 Q135 230 117 233 Q106 233 103 225 Q116 222 118 210 Q116 200 109 198 Z'),
    `<circle cx="104" cy="227" r="2.6" style="${fill('pylorus')}"/>`,
    E('spleen', 139, 207, 5.5, 10, '', 20),
    L('duodenum', 'M103 228 Q90 229 90 238 Q92 247 104 245', 5),
    L('pancreas', 'M95 238 Q112 238 134 223', 6.5),
    // 콩팥·부신 (장 뒤쪽이지만 도식이라 보이게)
    E('kidney', 79, 242, 7, 12, '', -10),
    E('kidney', 121, 238, 7, 12, '', 10),
    P('adrenal', 'M74 230 L80 222 L86 230 Z M114 226 L120 218 L126 226 Z'),
    // 장
    L('jejunum', 'M82 252 Q100 246 118 252 Q122 260 104 262 Q84 262 82 270', 5),
    L('ileum', 'M82 270 Q84 278 104 276 Q118 274 116 284 Q100 290 76 282', 5),
    L('colon', 'M70 280 L68 246 Q68 240 76 240 L126 240 Q134 240 134 248 L134 276 Q132 290 112 292 L104 300', 8),
    `<circle cx="70" cy="283" r="6" style="${fill('cecum')}"/>`,
    L('appendix', 'M67 289 Q66 296 72 299', 3),
    L('rectum', 'M104 300 L100 318', 8),
    `<circle cx="100" cy="322" r="2.6" style="${fill('anus')}"/>`,
    L('ureter', 'M82 254 L95 290 M118 250 L105 290', 1.8),
    E('bladder', 100, 296, 10, 7.5),
    L('urethra', 'M100 303 L100 320', 1.8),
    // 대망 (숨김 기본)
    P('omentum', 'M103 233 L135 236 L132 282 Q104 290 79 283 L81 244 Z', H),
    // 여성 (평소 숨김)
    L('tube', 'M93 271 Q86 264 82 272 M107 271 Q114 264 118 272', 1.8, F),
    E('ovary', 82, 276, 3.6, 3, F),
    E('ovary', 118, 276, 3.6, 3, F),
    P('uterus', 'M91 272 Q100 262 109 272 L105 289 L95 289 Z', F),
    P('endometrium', 'M96 273 Q100 269 104 273 L102 284 L98 284 Z', H),
    E('placenta', 100, 276, 6, 4, H),
    `<rect x="96.5" y="288" width="7" height="6" rx="2" style="${fill('cervix', F)}"/>`,
    L('vagina', 'M100 294 L100 318', 3, F),
    E('vulva', 100, 322, 4, 3, F),
    // 남성 (평소 숨김)
    E('prostate', 100, 308, 5.5, 4.5, M),
    `<rect x="96.5" y="318" width="7" height="20" rx="3.5" style="${fill('penis', M)}"/>`,
    L('vas', 'M92 330 Q84 318 96 306 M108 330 Q116 318 104 306', 1.6, M),
    E('testis', 91, 340, 5, 7, M),
    E('testis', 109, 340, 5, 7, M),
    L('epididymis', 'M87 334 Q84 341 88 347 M113 334 Q116 341 112 347', 2.2, M),
    // 림프절 (평소 숨김)
    `<g style="fill:var(--k-lymph,var(--o2));opacity:var(--v-lymph,0)">${[[86, 70], [114, 70], [82, 74], [118, 74], [62, 104], [138, 104], [66, 110], [134, 110], [100, 252], [94, 258], [106, 258], [76, 302], [124, 302], [80, 308], [120, 308]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6"/>`).join('')}</g>`,
    // 머리
    P('brain', 'M78 30 Q78 12 100 11 Q122 12 122 30 Q120 40 100 40 Q80 40 78 30 Z'),
    L('meninges', 'M76 30 Q76 9 100 8 Q124 9 124 30 Q122 42 100 42 Q78 42 76 30 Z', 2.4, H),
    E('cerebellum', 100, 43, 9, 3.6),
    `<circle cx="100" cy="34" r="2.4" style="${fill('pituitary')}"/>`,
    E('eye', 90, 45, 3.6, 2.6), E('eye', 110, 45, 3.6, 2.6),
    E('ear', 73, 44, 3, 6.5), E('ear', 127, 44, 3, 6.5),
    `<rect x="85" y="49" width="6" height="5" rx="2" style="${fill('sinus', H)}"/><rect x="109" y="49" width="6" height="5" rx="2" style="${fill('sinus', H)}"/>`,
    P('nose', 'M100 45 L96 54 L104 54 Z'),
    E('parotid', 79, 53, 3.6, 6), E('parotid', 121, 53, 3.6, 6),
    E('mouth', 100, 58, 7, 2.6),
    E('tongue', 100, 58.4, 4, 1.6),
    `<circle cx="95" cy="61" r="1.8" style="${fill('tonsil', H)}"/><circle cx="105" cy="61" r="1.8" style="${fill('tonsil', H)}"/>`,
    // 목
    `<rect x="96" y="58" width="8" height="10" rx="3" style="${fill('pharynx')}"/>`,
    `<rect x="95" y="66" width="10" height="8" rx="3" style="${fill('larynx')}"/>`,
    P('thyroid', 'M99 77 Q92 70 90 76 Q90 84 99 81 Z M101 77 Q108 70 110 76 Q110 84 101 81 Z'),
    `<g style="fill:var(--k-parathyroid,var(--o2));opacity:var(--v-parathyroid,0)"><circle cx="91.5" cy="74.5" r="1.4"/><circle cx="108.5" cy="74.5" r="1.4"/><circle cx="91.5" cy="81.5" r="1.4"/><circle cx="108.5" cy="81.5" r="1.4"/></g>`,
  ];
  // 장기 → 보기 영역(viewBox)
  const R = {
    head: '62 6 76 76', neck: '66 44 68 68', chest: '46 86 108 120', abdomen: '50 182 100 124',
    pelvis: '56 252 88 100', torso: '40 60 120 280', whole: '40 4 120 348',
  };
  const REGION = {};
  const put = (r, keys) => keys.split(' ').forEach(k => (REGION[k] = r));
  put('head', 'mouth tongue parotid nose sinus brain cerebellum meninges pituitary eye ear tonsil pharynx');
  put('neck', 'larynx thyroid parathyroid');
  put('chest', 'lung bronchus pleura diaphragm mediastinum thorax heart pericard thymus breast trachea');
  put('abdomen', 'stomach pylorus duodenum jejunum ileum cecum appendix colon liver gallbladder bileduct pancreas spleen kidney adrenal omentum');
  put('pelvis', 'rectum anus bladder urethra uterus cervix endometrium ovary tube vagina vulva placenta prostate testis epididymis vas penis marrow');
  put('torso', 'esophagus aorta vein peritoneum ureter');
  put('whole', 'skin lymph nerve spinal');
  const FEMALE = 'uterus cervix endometrium ovary tube vagina vulva placenta'.split(' ');
  const MALE = 'prostate testis epididymis vas penis'.split(' ');
  return {
    defs: `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><g id="bm-g">${g.join('')}</g></defs></svg>`,
    // keys: 'colon' 또는 'aorta vein' (공백으로 여러 개) → 강조 style 문자열
    style(keys) {
      const ks = keys.split(' ').filter(Boolean);
      let st = ks.map(k => `--k-${k}:var(--hl);--v-${k}:1;`).join('');
      if (ks.includes('skin')) st += '--w-skin:4;';
      if (ks.some(k => FEMALE.includes(k))) st += '--f:.55;';
      if (ks.some(k => MALE.includes(k))) st += '--m:.55;';
      return st;
    },
    viewBox(keys, whole) { return whole ? R.whole : R[REGION[keys.split(' ')[0]] || 'whole']; },
    svg(keys, cls = 'bm', whole = false) {
      return `<svg class="${cls}" viewBox="${this.viewBox(keys, whole)}" preserveAspectRatio="xMidYMid meet" style="${this.style(keys)}" aria-hidden="true"><use href="#bm-g"/></svg>`;
    },
    keys: () => Object.keys(REGION),
  };
})();

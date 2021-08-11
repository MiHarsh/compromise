// const adverbAdj = '(dark|bright|flat|light|soft|pale|dead|dim|faux|little|wee|sheer|most|near|good|extra|all)'

export default [
  //still good
  { match: '[still] #Adjective', group: 0, tag: 'Adverb', reason: 'still-advb' },
  //still make
  { match: '[still] #Verb', group: 0, tag: 'Adverb', reason: 'still-verb' },
  // so hot
  { match: '[so] #Adjective', group: 0, tag: 'Adverb', reason: 'so-adv' },
  // way hotter
  { match: '[way] #Comparative', group: 0, tag: 'Adverb', reason: 'way-adj' },
  // way too hot
  { match: '[way] #Adverb #Adjective', group: 0, tag: 'Adverb', reason: 'way-too-adj' },
  // all singing
  { match: '[all] #Verb', group: 0, tag: 'Adverb', reason: 'all-verb' },
  // sing like an angel
  { match: '#Verb  [like]', group: 0, ifNo: '#Modal', tag: 'Adverb', reason: 'verb-like' },
  //barely even walk
  { match: '(barely|hardly) even', tag: 'Adverb', reason: 'barely-even' },
  //even held
  { match: '[even] #Verb', group: 0, tag: 'Adverb', reason: 'even-walk' },
  // even left
  { match: 'even left', tag: '#Adverb #Verb', reason: 'even-left' },
  //cheering hard - dropped -ly's
  {
    match: '#PresentTense [(hard|quick|long|bright|slow|fast|backwards|forwards)]',
    ifNo: '#Copula',
    group: 0,
    tag: 'Adverb',
    reason: 'lazy-ly',
  },
  // much appreciated
  { match: '[much] #Adjective', group: 0, tag: 'Adverb', reason: 'bit-1' },
  // is well
  { match: '#Copula [#Adverb]$', group: 0, tag: 'Adjective', reason: 'is-well' },
  // a bit cold
  { match: 'a [(little|bit|wee) bit?] #Adjective', group: 0, tag: 'Adverb', reason: 'a-bit-cold' },
  // super strong
  { match: `[super] #Adjective #Noun`, group: 0, tag: 'Adverb', reason: 'super-strong' },
  // become overly weakened
  { match: '(become|fall|grow) #Adverb? [#PastTense]', group: 0, tag: 'Adjective', reason: 'overly-weakened' },
  // a completely beaten man
  { match: '(a|an) #Adverb [#Participle] #Noun', group: 0, tag: 'Adjective', reason: 'completely-beaten' },
  //a close
  { match: '#Determiner #Adverb? [close]', group: 0, tag: 'Adjective', reason: 'a-close' },
  // a blown motor
  { match: '(the|those|these|a|an) [#Participle] #Noun', group: 0, tag: 'Adjective', reason: 'blown-motor' },
]

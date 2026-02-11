var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-axioms",
  "level": "1",
  "url": "sec-axioms.html",
  "type": "Section",
  "number": "1.1",
  "title": "Axioms",
  "body": " Axioms  add axioms of R...  "
},
{
  "id": "sec-proofs",
  "level": "1",
  "url": "sec-proofs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Proofs: The Language of Mathematics",
  "body": " Proofs: The Language of Mathematics  Add stuff about proofs...  "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors in <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Vectors in  the vector space structure of ...  "
},
{
  "id": "sec-linear-combos",
  "level": "1",
  "url": "sec-linear-combos.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Combinations of Vectors",
  "body": " Linear Combinations of Vectors  Add stuff about LCs and Spans...  "
},
{
  "id": "sec-dot-products",
  "level": "1",
  "url": "sec-dot-products.html",
  "type": "Section",
  "number": "3.1",
  "title": "Dot Products in <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Dot Products in  the geometry of ...  "
},
{
  "id": "ch-linear-trans-Rn",
  "level": "1",
  "url": "ch-linear-trans-Rn.html",
  "type": "Chapter",
  "number": "4",
  "title": "Linear Transformations of Euclidean Spaces",
  "body": " Linear Transformations of Euclidean Spaces   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-algebra-matrices",
  "level": "1",
  "url": "ch-algebra-matrices.html",
  "type": "Chapter",
  "number": "5",
  "title": "The Algebra of Matrices",
  "body": " The Algebra of Matrices   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-determinants-trace",
  "level": "1",
  "url": "ch-determinants-trace.html",
  "type": "Chapter",
  "number": "6",
  "title": "Determinants and Trace",
  "body": " Determinants and Trace   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-eigentheory",
  "level": "1",
  "url": "ch-eigentheory.html",
  "type": "Chapter",
  "number": "7",
  "title": "EigenTheory",
  "body": " EigenTheory   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-linear-spaces",
  "level": "1",
  "url": "ch-linear-spaces.html",
  "type": "Chapter",
  "number": "8",
  "title": "Linear Spaces (aka Abstract Vector Spaces)",
  "body": " Linear Spaces (aka Abstract Vector Spaces)   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-inner-product-spaces",
  "level": "1",
  "url": "ch-inner-product-spaces.html",
  "type": "Chapter",
  "number": "9",
  "title": "Inner Product Spaces",
  "body": " Inner Product Spaces   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-spectral-theorem",
  "level": "1",
  "url": "ch-spectral-theorem.html",
  "type": "Chapter",
  "number": "10",
  "title": "The Spectral Theorem",
  "body": " The Spectral Theorem   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "ch-additional-topics",
  "level": "1",
  "url": "ch-additional-topics.html",
  "type": "Chapter",
  "number": "11",
  "title": "Additional Topics",
  "body": " Additional Topics   Intro text goes here. Add later...     first item    second item    third item    fourth item    fifth item       add a conclusion paragraph...   "
},
{
  "id": "ch-applications",
  "level": "1",
  "url": "ch-applications.html",
  "type": "Chapter",
  "number": "12",
  "title": "Applications",
  "body": " Applications   Intro text goes here. Add later...    add a conclusion paragraph...   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

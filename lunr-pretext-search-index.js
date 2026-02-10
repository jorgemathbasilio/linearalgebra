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

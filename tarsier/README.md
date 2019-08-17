## Antlr Tarsier


This is used to generate visitor for our grammar file
```bash
antlr4 Tarsier.g4 -Dlanguage=JavaScript -visitor -no-listener
```
The difference between visitor and listener is 
with visitor you can't control how we traverse the tree
and with listener you can.

9 out of 10 times we don't need to control how to parse the tree.

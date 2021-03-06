#!/usr/bin/env osascript -l JavaScript

function run(argv) {
  var app = Application.currentApplication()
  app.includeStandardAdditions = true
  var word = Application('Microsoft Word.app')
  app.doShellScript('mkdir -p /tmp/word_git')
  app.doShellScript('cp "' + argv[0] + '" /tmp/word_git/doc1.docx')
  app.doShellScript('cp "' + argv[1] + '" /tmp/word_git/doc2.docx')
  word.open('/tmp/word_git/doc2.docx')
  word.documents['doc2.docx'].close()
  word.open('/tmp/word_git/doc1.docx')
  word.documents['doc1.docx'].compare({path: '/tmp/word_git/doc2.docx'})
  word.documents['doc1.docx'].close()
}

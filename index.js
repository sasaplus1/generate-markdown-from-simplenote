const { promises: fs } = require('fs');

const path = require('path');

const notes = require('./notes/source/notes.json');

const dists = path.resolve(__dirname, 'dists');

async function createMarkdown(params, prefix = '') {
  const {
    id,
    content,
    creationDate,
    lastModified,
  } = params;

  const created = new Date(creationDate);
  const updated = new Date(lastModified);

  // NOTE: UTC to JST
  created.setHours(created.getHours() + 9);
  updated.setHours(updated.getHours() + 9);

  const text = [
    '---',
    'title: |-',
    `  ${content.split(/\r\n/).filter(Boolean)[0] || ''}`,
    `created: '${created.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '')}'`,
    `updated: '${updated.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '')}'`,
    '---',
    content,
  ].join('\r\n');

  await fs.writeFile(path.join(dists, prefix, `${id}.md`), text);
}

async function main() {
  await fs.mkdir(path.join(dists, 'trash'), { recursive: true });

  for (const note of notes.activeNotes) {
    await createMarkdown(note);
  }

  for (const note of notes.trashedNotes) {
    await createMarkdown(note, 'trash');
  }
}
main();

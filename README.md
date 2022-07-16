# generate-markdown-from-simplenote

generate Markdown file from [Simplenote](https://simplenote.com/)'s `notes.json`

Useful for migrate to [Joplin](https://joplinapp.org/) from Simplenote.

## How to use

```
$ node index.js
```

see `index.js` more details.

## Notice

Can not generate Markdown file if `notes.json` is too large, because this script is not using Stream.

## Ref

- [SimplenoteからBoost Noteに移植する · nacl30d](https://www.nacl30d.com/posts/simplenote2boostnote/)

## License

The MIT license

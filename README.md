# CheckHen chat for Slidev

Vue components that show a [CheckHen](https://github.com/langd0n-labs/CheckHen) class's anonymous chat inside a [Slidev](https://sli.dev) deck. The chat shows anonymous names only.

## Install

In the deck's `package.json`:

```json
"dependencies": {
  "@checkhen/slidev-chat": "https://github.com/langd0n-labs/checkhen-slidev-chat/archive/refs/tags/v0.1.1.tar.gz"
}
```

## Use

- `@checkhen/slidev-chat/panel`: a chat strip down the right 15% of every slide, newest line at the bottom. Put it in the deck's `global-top.vue`.
- `@checkhen/slidev-chat`: a chat block to place on one slide.

Both take two props:
- `server`: the CheckHen address, for example `https://checkhen.example.edu`.
- `ticket`: the projection ticket from the CheckHen instructor dashboard.

[`example/`](example/) is a working deck with the glue code (`global-top.vue`, `chat-config.js`, `setup/main.ts`, `style.css`). Copy those files into your deck.

The CheckHen deployment must allow the deck's origin: set its `SLIDEV_ORIGIN` to the address the deck runs at, for example `http://localhost:3030`.

When CheckHen cannot be reached, the strip shows "Chat unavailable". When the ticket is refused or has expired, it asks for a new one. A print or PDF export leaves the strip out.

## Test

```sh
npm test
```

## License

MIT. A deck that uses this package can use any license.

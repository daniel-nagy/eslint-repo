### Directions

1. Clone this repo.
2. Install bun with `asdf install` or some other method. I observed the same issue with yarn workspaces if you would prefer to use yarn instead of bun.
3. Run `bun install` from the workspace root.
4. run `bun run --cwd packages/b typetest` and observe the typetest fails.

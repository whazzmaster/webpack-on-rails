# Webpack on Rails

Rails 5.2 application using webpack + react, with examples on how to enable
linting via eslint and hot module replacement for React and CSS.

## Getting Started

Clone the repo

```bash
$ git clone git@github.com:whazzmaster/webpack-on-rails.git
$ cd webpack-on-rails
```

Install dependencies

```bash
$ brew install yarn
$ bundle install
$ yarn install
```

## Following Along

Start the rails server and webpack-dev-server in **two different terminal windows**.

```bash
$ rails server # in one terminal
$ ./bin/webpack-dev-server # in another terminal
```

Now you can check out various tags and diff between them or other commits to
see what changed to enable the functionality. **Note** that you may need to
restart `webpack-dev-server` when checking out various commits as it won't
pick up certain configuration changes automatically.

Below are the relevant git tags you may jump to in the repo.

- `1-generated-structure`
- `2-integrate-javascript-packs`
- `3-configures-eslint`
- `4-fixes-eslint`
- `5-develops-application`
- `6-hot-reloading`

To check one out, use:

```bash
$ git co 1-generated-structure
```

To diff between them, use:

```bash
$ git diff 1-generated-structure 2-integrate-javascript-packs
```
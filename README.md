<div align="center">
<h1>Code challenge</h1>
Second test for the hiring process

[Application](#application)
&nbsp; &nbsp; &nbsp;
[Decisions outcomes](#decisions-outcomes)
&nbsp; &nbsp; &nbsp;
[Test improvements](#test-improvements)

<hr>
</div>

## Application

### Docker environment

The next steps are the

```
docker build -t code-challenge .

docker run -dp 3000:3000 code-challenge .

```

### Local environment

If you want to use your local environment to run the application, those 3 steps are the only thing that you'll need to
follow:

1. Make sure that you have pnpm in your device. If you haven't, you could use the
   next [Pnpm installation page](https://pnpm.io/installation)

```
 pnpm -v
```

2. Run the command to install all the dependencies pnpm install

```
 pnpm i
```

3. Run the application

```
 pnpm run start  
```

## Decisions outcomes

Used library for this test - [React js](https://reactjs.org/)

Framework used - [Astro](https://astro.build/)

Sharing application states - [nano stores](https://docs.astro.build/en/core-concepts/sharing-state/)
(Due to Astro recommendations)

Pattern of application design - [Folder organization](https://atomicdesign.bradfrost.com/chapter-2/)

Pattern of web architecture - [Dynamic Islands with Astro](https://docs.astro.build/en/concepts/islands/)

Css application - [Styled and css](https://styled-components.com/) (Not recommended by those architectures due to the
rendering of the components could be affected)

Packages manager - [pnpm instead of yarn or npm](https://pnpm.io/) (faster than other solutions)

## Test improvements

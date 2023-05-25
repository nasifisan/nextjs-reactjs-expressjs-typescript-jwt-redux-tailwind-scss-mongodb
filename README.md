This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description
A full-stack template using ExpressJs as a custom server in NextJs framework. You can clone and start working on your business logic for both backend and frontend by using this template. You can customize the folder structure as you preferred.

Others you'll find in this template- 
* Type checking javascript
* Redux toolkit integration with an example slice
* You can write tailwind class inside .scss file
* A bonus of jwt token authentication enabling TTL(Time-To-Live) indexing for refresh token mapping inside mongodb


Scopes
```bash
Rather than designing UI safely you can also upgrade the token authentication system. I've done expires time validation in this project. So other validation could be possible(depending on architecture you're following or a secret). When you'll go through the backend codebase you'll see a class for token validation. Other APIs which need the token validation can use this class.
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Note: A custom server cannot be deployed on Vercel . Before deciding to use a custom server, please keep in mind that it should only be used when the integrated router of Next.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

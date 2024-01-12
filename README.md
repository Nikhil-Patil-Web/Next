This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Here are a few things that I learned from the tutorial on creating apps that use Next JS in their frontend:

1) The routes file is not required in Next JS. In turn, the actual file directory structure becomes the routing for the page that has to be displayed.
2) So, if a file page.tsx is sotred in the file directory "src/app/user", it means that this page.tsx will load when the route /user is hit in the front end.
3) There are also 7 sets of keyword file names that we cannot use, they include layout.tsx, page.tsx, loading.tsx, error.tsx, template.tsx, head.tsx, and not-found.tsx.
4) So, page.tsx will load when we reach that respective folder. "layout.tsx" file will load the layout of the folder. "error.tsx" will load when there is an error in loading this route page. "loading.tsx" will load and display when the network calls are getting executed. And other file conventions will follow.
   

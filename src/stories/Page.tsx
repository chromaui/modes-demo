import React from 'react';

import { Header } from './Header';

const Tip = () => (
  <div className="tip-wrapper my-10 text-xs">
    <span className="tip inline-block rounded-full py-1 px-3 mr-2.5 leading-none bg-lime-100 text-lime-600 dark:bg-lime-800 dark:text-lime-400">
      Tip
    </span>{' '}
    Adjust the width of the canvas with the{' '}
    <svg
      className="inline-block h-3 w-3 align-top mt-1 mr-1"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          className="fill-blue-500 dark:fill-sky-400"
          d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
          id="a"
        />
      </g>
    </svg>
    Viewports addon in the toolbar
  </div>
);

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="text-slate-800 dark:text-slate-100 text-sm py-12 px-5 mx-auto max-w-2xl">
        <h2 className="font-bold text-3xl mb-4">Pages in Storybook</h2>
        <p className="mb-3.5">
          We recommend building UIs with a{' '}
          <a
            className="text-blue-500 dark-text-sky-500"
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p className="mb-3.5">
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </p>
        <ul className="mb-3.5 pl-8 list-disc">
          <li className="mb-2">
            Use a higher-level connected component. Storybook helps you compose
            such data from the "args" of child component stories
          </li>
          <li className="mb-2">
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </li>
        </ul>
        <p className="mb-3.5">
          Get a guided tutorial on component-driven development at{' '}
          <a
            className="text-blue-500 dark-text-sky-500"
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a
            className="text-blue-500 dark-text-sky-500"
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
          .
        </p>
        <Tip />
      </section>
    </article>
  );
};

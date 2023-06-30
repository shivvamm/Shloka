import { MouseEvent, useState } from 'react';
import { Element } from 'react-scroll';
import stringifyObject from 'stringify-object';
import CodeBlock from '~/components/codeblock';
import Header from '~/components/header';
import Layout from '~/components/Layout';
import Spinner from '~/components/spinner';
import { CodeBlock as CodeBlockType, Quote } from '~/types';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState<Quote>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);

  const requestCodeBlock: CodeBlockType = {
    language: 'javascript',
    snippet: `fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))`,
  };

  const responseCodeBlock: CodeBlockType = {
    language: 'javascript',
    snippet: stringifyObject(randomQuote),
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClickCount(clickCount + 1);
    setRandomQuote(null);
    setIsLoading(true);

    fetch('/api/random')
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setRandomQuote(json);
      });
  };

  return (
    <Layout>
      <Header />
      <Element name="tryThis">
        <div className="container relative max-w-4xl px-2 py-16 lg:mx-auto">
          <h1 className="text-4xl font-bold font-display">Try it</h1>
          <h2 className="my-5 text-lg">Run this code to get a random Shloka</h2>
          <CodeBlock {...requestCodeBlock} />
          <button
            className={`inline-flex items-center bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-3
        rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 my-8 ${
          isLoading && 'cursor-not-allowed'
        }`}
            type="button"
            disabled={isLoading}
            style={{ transition: 'all .15s ease' }}
            onClick={(e) => handleClick(e)}>
            {isLoading && <Spinner />} Run script
          </button>
          <CodeBlock {...responseCodeBlock} />
          {/*{randomQuote && (
            <p className="mt-3 text-md">
              Here is {clickCount > 1 ? 'another' : 'a'} random Shloka by -{' '}
              <span className="font-semibold">
                {randomQuote?.Sloka} <span className="font-normal">from</span>{' '}
                {randomQuote?.Class} 😃 🎉
              </span>
            </p>
          )}*/}
        </div>
      </Element>
    </Layout>
  );
}

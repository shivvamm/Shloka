import { scroller } from 'react-scroll';
import stringifyObject from 'stringify-object';
import Layout from '~/components/Layout';
import NewTag from '~/components/new-tag';
import Resource from '~/components/resource';
import { Guide as GuideType } from '~/types';

const stringify = (input: any) =>
  stringifyObject(input, { singleQuotes: false, inlineCharacterLimit: 4 });

export const API_GUIDES: GuideType[] = [
  {
    heading: 'Get a Bahgavad Gita Shloka by Chapter and Verse',
    link: '#bahgavad-gita-shloka-chapter-verse',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/bahgavad_gita/shloka?chapter=1&verse=5")
          .then((response) => response.json())
          .then((data) => console.log(data));`,
      response: stringify({ "Verse No": "...", "Shloka": "...", "EnglishTranslation": "...", "Explanation": "...", "Chapter": "..." }),
    },
  },

  {
    heading: 'Get all Bahgavad Gita Shloka by Chapter with default limit of 10',
    link: '#all-bahgavad-gita-shloka-chapter',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/bahgavad_gita/all?chapter=1")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
      response: stringify([
        { "chapter": "...", "Verse No": "...", "English Translation": '...' ,"Explanation":"..." },
         '...9 more',
        ]),
    },
  },
  {
    heading: 'Get a random Bahgavad Gita Shloka',
    link: '#random-bahgavad-gita-shloka',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/bahgavad_gita/random")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
      response: stringify({ "Verse No": '...', "Shloka": '...', "English Translation": '...',"Explanation":"..." }),
    },
  },
  {
    heading: 'Get a random Bahgavad Gita Shloka by Chapter',
    link: '#random-bahgavad-gita-shloka-by-chapter',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/bahgavad_gita/random/by?chapter=1")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify({ "Verse No": '...', "Shloka": '...', "English Translation": '...',"Explanation":"..." }),
    },
  },
  {
    heading: 'Get a random Chanakya Shloka',
    link: '#random-chanakya-shloka',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/chanakya/shloka/random")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify({ "Sloka": "....", "Class": "..."}),
    },
  },
  {
    heading: 'Get 10 Chanakya Shloka',
    link: '#10chanakya-shloka',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/chanakya/shloka")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify([
        { "Sloka": "....", "Class": "..."},
        '...9 more',
      ]),
    },
  },
  {
    heading: 'Get all Chanakya Shloka',
    link: '#all-chanakya-shloka',
    isNewlyAdded: true,
    codeSample: {
      request: `fetch('https://shloka.onrender.com/api/v1/chanakya/all')
      .then(response => response.json())
      .then(animes => console.log(animes))`,
      response: stringify([ 
        { "Sloka": "....", "Class": "..."},
        '... more',
        ]),
    },
  },
  {
    heading: 'Get a random Sanskrit Slogan',
    link: '#random-chanakya-shloka',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/sanskrit/slogan/random")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify({ "Sloka": "....", "Class": "..."}),
    },
  },
  {
    heading: 'Get 10 Sanskrit Slogan',
    link: '#10sanskrit-slogan',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/sanskrit/slogan")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify([
        { "Sloka": "....", "Class": "..."},
        '...9 more',
      ]),
    },
  },
  {
    heading: 'Get all Sanskrit Slogan',
    link: '#all-sanskrit-slogan',
    isNewlyAdded: true,
    codeSample: {
      request: `fetch('https://shloka.onrender.com/api/v1/sanskrit/all')
      .then(response => response.json())
      .then(animes => console.log(animes))`,
      response: stringify([ 
        { "Sloka": "....", "Class": "..."},
        '... more',
        ]),
    },
  },
  {
    heading: 'Get a random Vidur Niti Shlokas',
    link: '#random-vidur-niti-shlokas',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/vidur_niti/maxims/random")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify({ "Sloka": "....", "Class": "..."}),
    },
  },
  {
    heading: 'Get 10 Vidur Niti Shlokas',
    link: '#10vidur-niti-slokas',
    codeSample: {
      request: `fetch("https://shloka.onrender.com/api/v1/vidur_niti/maxims")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));`,
      response: stringify([
        { "Sloka": "....", "Class": "..."},
        '...9 more',
      ]),
    },
  },
  {
    heading: 'Get all Vidur Niti Shlokas',
    link: '#all-vidur-niti-shlokas',
    isNewlyAdded: true,
    codeSample: {
      request: `fetch('https://shloka.onrender.com/api/v1/vidur_niti/all')
      .then(response => response.json())
      .then(animes => console.log(animes))`,
      response: stringify([ 
        { "Sloka": "....", "Class": "..."},
        '... more',
        ]),
    },
  },
  {
    heading: 'Pagination',
    subHeading:
      'Pagination works only on all in Bahgavad Gita Shloka and  maxims, slogans, shloks in others query endpoints. Default pagination count is 10 Shlokas per page.',
    link: '#pagination',
    codeSample: {
      request: `fetch('https://shloka.onrender.com/api/v1/bahgavad_gita/all?chapter=1&page=1&limit=10')
      .then(response => response.json())
      .then(data => console.log(data))

      // works on character queries too 👇
      // https://shloka.onrender.com/api/v1/chanakya/shloka?page=1&limit=10,
      // https://shloka.onrender.com/api/v1/sanskrit/slogan?page=1&limit=10,
      // https://shloka.onrender.com/api/v1/vidur_niti/maxims?page=1&limit=10`,
      response: stringify([
        { "chapter": "...", "Verse No": "...", "English Translation": '...' ,"Explanation":"..." },
         '...9 more',
        ]),
    },
  },
];

export default function Guide() {
  const metaInfo = {
    title: 'Shloka – Guide',
    description: 'Documentation for all available API endpoints.',
    image: 'https://animechan.vercel.app/image/guide.jpeg',
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="container relative lg:mx-auto px-2 max-w-4xl py-16 mt-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Docs</h1>
          <h2 className="text-lg">
            Below you'll find examples using{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
              Fetch API
            </a>{' '}
            but you can use any other http library out there.
          </h2>
        </div>

        <div className="mt-10 relative">
          <hr className="mb-5" />
          <h3 className="text-2xl font-bold mb-4 text-wavy">Important Notes</h3>
          <ol className="list-disc list-inside lg:text-lg text-base">
            <li>
              Default rate limit is <i className="font-medium">100 requests</i> per hour.
            </li>
            <li>
              Default number of quotes returned from query endpoints is{' '}
              <i className="font-medium">10.</i>
            </li>
            <li>
              If you don't find the Shloka you are looking for then{' '}
              <a
                target="_blank"
                href="https://github.com/shivvamm/shloka/discussions/65">
                submit a request here.
              </a>
            </li>
          </ol>
        </div>

        <div className="my-10">
          <h1 className="text-2xl font-bold mb-4 text-wavy">Available routes</h1>
          <ul>
            {API_GUIDES.map((guide, index) => (
              <li
                key={guide.heading}
                className="my-2"
                onClick={() =>
                  scroller.scrollTo(guide.link, {
                    duration: 700,
                    delay: 100,
                    smooth: true,
                    offset: -50,
                  })
                }>
                {index + 1}. <a href={guide.link}>{guide.heading}</a>
                {guide.isNewlyAdded && <NewTag />}
              </li>
            ))}
          </ul>
        </div>
        <hr />

        <div className="my-10 space-y-40">
          {API_GUIDES.map((guide) => (
            <Resource {...guide} key={guide.heading} />
          ))}
        </div>
        <hr />
      </div>
    </Layout>
  );
}

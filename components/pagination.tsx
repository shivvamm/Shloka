import Image from 'next/image';
import { Element } from 'react-scroll';
import CodeBlock from '~/components/codeblock';

export default function pagination() {
  const requestSample = `fetch('https://shloka.onrender.com/api/v1/bahgavad_gita/all?chapter=1&page=1&limit=10')
    .then(response => response.json())
    .then(quotes => console.log(quotes))

     // works on character queries too 👇
      // https://shloka.onrender.com/api/v1/chanakya/shloka?page=1&limit=10
      // https://shloka.onrender.com/api/v1/sanskrit/slogan?page=1&limit=10
      // https://shloka.onrender.com/api/v1/vidur_niti/maxims?page=1&limit=10`

  const responseSample = `[
        { "chapter": "...", "Verse No": "...", "English Translation": '...' ,"Explanation":"..." },
         '...9 more',
        ]`;

  return (
    <Element name="#pagination">
      <div className="mt-10">
        <h2 className="lg:text-2xl text-xl font-bold mb-4 text-wavy">Pagination</h2>
        <p className="lg:text-lg text-base mb-2">
         Pagination works only on all in Bahgavad Gita Shloka and  maxims, slogans, shloks in others query endpoints. Default pagination count is 10 Shlokas per page..
        </p>

        <CodeBlock language="javascript" snippet={requestSample} />
        <p className="py-5 text-base italic flex items-center">
          <Image src="/arrow-32.png" height="18" width="18" />
          <span className="ml-2">Output</span>
        </p>
        <CodeBlock language="javascript" snippet={responseSample} />
      </div>
    </Element>
  );
}

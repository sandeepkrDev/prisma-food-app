import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Meta = () => {
  return (
    <Head>
      <title>Create Gluestack App</title>
      <meta name='description' content='Generated by node glue add web' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

const FeatureCard = ({ iconSvg, name, desc }: any) => {
  return (
    <div className='rounded-md border border-[#404040] p-4 text-left h-full w-full'>
      <div className='flex flex-row gap-2'>
        <Image
          src={`/${iconSvg}`}
          alt='document'
          width={22}
          height={22}
          priority
        />
        <h3 className='text-2xl font-normal text-white'>{name}</h3>
      </div>
      <p className='mt-2  text-[#a3a3a3]'>{desc}</p>
    </div>
  );
};

const Example = () => {
  return (
    <div className='flex flex-1 w-full'>
      <div className='absolute h-[500px] w-[500px] lg:h-[700px] lg:w-[700px]'>
        <Image src='/gradient.svg' alt='Gradient' fill priority />
      </div>
      <main className='flex flex-1 flex-col items-center justify-between  text-center mx-5 my-16 lg:mx-32 lg:my-24  z-10 '>
        <p className='self-center md:self-start  font-normal text-white bg-[#64748B33] py-2 px-6 rounded-full'>
          Get started with <Link href={"/foods"}>Food App.</Link>
        </p>
        <div className='absolute h-[400px] w-[300px] lg:h-[700px] lg:w-[400px]'>
          <Image src='/logo.svg' fill alt='logo' priority />
        </div>

        <div className='mt-6 w-11/12 flex gap-4 items-center justify-between flex-col md:flex-row'>
          <FeatureCard
            iconSvg='document-data.svg'
            name='Docs'
            desc='Find in-depth information about gluestack features and API.'
          />
          <FeatureCard
            iconSvg='lightbulb-person.svg'
            name='Learn'
            desc='Learn about gluestack in an interactive course with quizzes!'
          />
          <FeatureCard
            iconSvg='rocket.svg'
            name='Deploy'
            desc='Instantly drop your gluestack site to a shareable URL with vercel.'
          />
        </div>
      </main>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black relative'>
      <Meta />
      <Example />
    </div>
  );
};

export default Home;

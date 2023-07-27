import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Layout } from '@components/index';
import Hero from '@components/landing/hero';
import { Button } from '@components/library/button';

const inter = Inter({ subsets: ['latin'] });
import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          {/* <ButtonGroup
            spacing={4}
            className='my-4'
          >
            <Button
              colorScheme='purple'
              variant='solid'
              size='md'
              onClick={() => console.log('Button clicked')}
            >
              Click me
            </Button>
            <Button
              colorScheme='blue'
              variant='outline'
              size='md'
              // isDisabled
            >
              Disabled
            </Button>
            <Button
              colorScheme='green'
              variant='solid'
              size='md'
              isLoading
              loadingText='Loading'
            >
              Loading
            </Button>
          </ButtonGroup> */}
          <Button
            type='secondary'
            color='indigo'
            rounding='pill'
            icon={CheckCircleIcon}
            iconPosition='left'
          >
            Button text
          </Button>
        </div>
        <Hero />
      </Layout>
    </>
  );
}

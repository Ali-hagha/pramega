import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Custom404Page = () => {
  const [timer, setTimer] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (timer <= 1) {
      router.replace('/');
    }
  }, [router, timer]);

  useEffect(() => {
    const countDownTimer = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(countDownTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-[50vh] items-center justify-center flex flex-col">
      <h1 className="text-2xl md:text-4xl font-bold">404</h1>
      <h2 className="text-xl md:text-2xl text-center text-gray-500 mb-8">
        This page could not be found.
      </h2>
      <Link
        href={'/'}
        className="rounded-md px-6 py-3 bg-gray-100 hover:bg-gray-200 transition-colors active:bg-gray-300"
      >
        Back to home page in: <span className="w-6 inline-block">{timer}</span>
      </Link>
    </div>
  );
};

export default Custom404Page;

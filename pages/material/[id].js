import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import VasaFooter from '../../components/VasaFooter';
import { getMaterialById } from '../../lib/queries';

const ShowMaterial = () => {
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(async () => {
    setLoading(true);
    const materialRes = await getMaterialById(router.query.id);
    const m = {
      id: materialRes.id,
      ...materialRes.data(),
    };
    delete m.searchTerms;
    setMaterial(m);
    setLoading(false);

    return () => {
      setMaterial(null);
    };
  }, [router.query.id]);

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Head className='h-10'>
        <title>Jehrin - VasaBand music library</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mb-auto'>
        <Header />

        <div>{loading ? <Loading /> : <div>{material.title}</div>}</div>
      </main>

      <VasaFooter className='h-10' />
    </div>
  );
};

export default ShowMaterial;

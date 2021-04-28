import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading';
import Material from '../../components/Material/Material';
import VasaFooter from '../../components/VasaFooter';
import { auth } from '../../firebase';
import { getMaterialById, updateMaterialData } from '../../lib/queries';

const ShowMaterial = () => {
  const [material, setMaterial] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [user] = useAuthState(auth);

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

    return () => setMaterial(null);
  }, [router.query.id]);

  const handleStateChange = (e) =>
    setMaterial((currState) => ({
      ...currState,
      [e.target.name]: e.target.value,
    }));

  const saveMaterial = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateMaterialData(material, user);
    setLoading(false);
  };

  const goBack = () => {
    router.push(`/search/?searchString=${router.query.searchString}`);
  };

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Head className='h-10'>
        <title>Jehrin - VasaBand music library</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mb-auto'>
        <Header />

        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <button onClick={goBack}>Back</button>
              <Material
                material={material}
                handleStateChange={handleStateChange}
                saveMaterial={saveMaterial}
              />
            </div>
          )}
        </div>
      </main>

      <VasaFooter className='h-10' />
    </div>
  );
};

export default ShowMaterial;

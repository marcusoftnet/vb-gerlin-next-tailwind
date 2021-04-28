import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading';
import Material from '../../components/Material/Material';
import VasaFooter from '../../components/VasaFooter';
import { auth } from '../../firebase';
import { addNewMaterial } from '../../lib/queries';

const CreateMaterialPage = () => {
  const emptyMaterial = {
    title: '',
    seriesNumber: '',
    composer: '',
    type: '',
    comments: '',
  };
  const [material, setMaterial] = useState(emptyMaterial);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth);

  const handleStateChange = (e) =>
    setMaterial((currState) => ({
      ...currState,
      [e.target.name]: e.target.value,
    }));

  const addMaterial = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const materialId = await addNewMaterial(material, user);
      setLoading(false);
      router.push(`/material/${materialId}`);
    } catch (error) {
      console.error(error);
    }
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
              <Material
                material={material}
                handleStateChange={handleStateChange}
                saveMaterial={addMaterial}
              />
            </div>
          )}
        </div>
      </main>

      <VasaFooter className='h-10' />
    </div>
  );
};

export default CreateMaterialPage;

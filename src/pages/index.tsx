import { useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import OtherSections from '../components/Home/OtherSections';

interface IHero {
  introduction: string;
  heading: string;
  description: string;
}

interface IOtherSection {
  heading: string;
  description: string;
}

interface IIndexDataType {
  hero: IHero;
  language: IOtherSection;
  vocabulary: IOtherSection;
  progress: IOtherSection;
}

export interface IIndexSectionsProps {
  data: IIndexDataType | undefined;
}

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_SERVER_URL}/indexPage`);
        if (res.ok) {
          const data = await res.json();
          setData(data);
          return data;
        } else {
          throw new Error('Failed to fetch data, please check!');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        return {
          data: null,
          errorMessage: 'Failed to fetch data, please check!',
        };
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeroSection data={data} />
      <OtherSections data={data} />
    </>
  );
}

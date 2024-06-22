
import SearchBar from '@/components/SearchBar';
import Hero from '../components/Hero';
import CustomFilter from '@/components/CustomFilter';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='bg-gray-900 mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogue des voitures</h1>
          <p>Explore The cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}

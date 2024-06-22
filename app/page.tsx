import SearchBar from '@/components/SearchBar';
import Hero from '../components/Hero';
import CustomFilter from '@/components/CustomFilter';
import { fetchData } from '@/utils';
import CarCard from '@/components/CarCard';

export default async function Home() {

  const allCars = await fetchData()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {/* card cars */}
        {isDataEmpty ? (
          <div className='home_error-container'>
            <h2>Aucune voiture trouver!!!</h2>
            <p>{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

import SearchBar from '@/components/SearchBar';
import Hero from '../components/Hero';
import CustomFilter from '@/components/CustomFilter';
import { fetchData } from '@/utils';
import CarCard from '@/components/CarCard';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '@/components/ShowMore';

export default async function Home({ searchParams }: any) {
    const allCars = await fetchData({
        manufacture: searchParams.manufacture || "",
        year: searchParams.year || 2024,
        fuel: searchParams.fuel || "",
        model: searchParams.model || "",
        limit: searchParams.limit || 10,
    })

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

    return (
        <main className="overflow-hidden">
            <Hero />

            <div className='border mt-12 padding-x padding-y max-width' id='discover'>
                <div className='home__text-container'>
                    <h1 className='text-4xl font-extrabold'>Catalogue des voitures</h1>
                    <p>Découvrez les voitures qui pourraient vous plaire</p>
                </div>

                <div className='home__filters'>
                    <SearchBar />

                    <div className='home__filter-container'>
                        <CustomFilter title="fuel" options={fuels} />
                        <CustomFilter title="year" options={yearsOfProduction} />
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
                            {allCars?.map((car) => (
                                <CarCard car={car} />
                            ))}
                        </div>
                        <ShowMore
                            pageNumber={(searchParams.limit || 10) / 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
                        />
                    </section>
                )}
            </div>

        </main>
    );
}

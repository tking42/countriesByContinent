interface Country {
    name: {
        common: string;
    };
    capital: string[];
    languages: { [key: string]: string };
    currencies: { [key: string]: string };
}

interface ContinentProp {
    continent: Country[];
}

const CountryList = ({ continent }: ContinentProp) => {
    const sortedCountries = continent.sort((a, b) => a.name.common.localeCompare(b.name.common));

    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 p-6">
                {sortedCountries.map((country) => (
                    <div key={country.name.common} className="bg-white shadow-lg rounded-lg p-6 cursor-pointer">
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">{country.name.common}</h2>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Capital:</span> {country.capital.join(", ")}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Languages:</span> {Object.values(country.languages).join(", ")}
                        </p>
                        <p className="text-gray-700 mb-4">
                            <span className="font-semibold">Currency:</span> {Object.keys(country.currencies).join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryList;

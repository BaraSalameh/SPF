import { University } from ".";
import { useUniversity } from "./hooks/useUniversity"

export const Universities = () => {
    const universities = useUniversity();

    return(
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <University
                name={universities.aaup.name}
                logoUrl="/AAUP.png"
                location={universities.aaup.location}
                major={universities.aaup.major}
                startDate="10/2016"
                endDate="02/2021"
                website="https://www.aaup.edu"
            />
            <University
                name={universities.uu.name}
                logoUrl="/UU.jpg"
                location={universities.uu.location}
                major={universities.uu.major}
                startDate="10/2021"
                endDate="10/2023"
                website="https://uskudar.edu.tr/en"
            />
        </div>
    )
}
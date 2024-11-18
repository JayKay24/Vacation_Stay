import useHTTPClient from '../hooks/useHTTPClient';
import { Link } from 'react-router-dom';
import VacationStayCard from '../components/VacationStayCard.component';
import { APIResponseVacationStayFiltered } from '../app_types/vacation_stay';

const ListVacationStays = () => {
    const { data: vacationStays, isLoading } = useHTTPClient<APIResponseVacationStayFiltered>('filtered');

    return (
        <div>
            {isLoading && (<span>Loading...</span>)}
            {vacationStays?.data?.map(stay => (
                <Link key={stay.id} to={`/vacation_stays/${stay.id}`}>
                    <VacationStayCard key={stay.id} stay={stay} />
                </Link>
            ))}
        </div>
    );
};

export default ListVacationStays;

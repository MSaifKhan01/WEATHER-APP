
import MySearches from "../Components/GetSearches";
import Nav from "../Components/Nav";
import WeatherSearchCard from "../Components/SeacrhCard";

function WeatherCardPage(){
    return (
        <div>
        <Nav/>
        < WeatherSearchCard />
        < MySearches />
        </div>
    )
}

export default WeatherCardPage;
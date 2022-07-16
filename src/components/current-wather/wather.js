import './wather.css';

const Wather = ({data}) => {

    return (
        <div className='wather'>
            <div className='top'>
                <div>
                    <p className='city'> {data.city} </p>
                    <p className='description'> {data.weatherResponse.weather[0].main} </p>
                </div>
                <img src={`icons/${data.weatherResponse.weather[0].icon}.png`} alt='wather' className='icon' />
            </div>
            <div className='bottom'>
                <p className='temp'> {Math.round(data.weatherResponse.main.temp)}°C </p>
                <div className='details' >
                    <div className='parameter-row'> 
                        <span className='parametr-label top'>Details </span>
                     </div>
                     <div className='parameter-row'> 
                        <span className='parametr-label'>Feels like </span>
                        <span className='parametr-value'> {Math.round(data.weatherResponse.main.feels_like)}°C  </span>
                     </div>
                     <div className='parameter-row'> 
                        <span className='parametr-label'>Wind </span>
                        <span className='parametr-value'> {data.weatherResponse.wind.speed} m/s  </span>
                     </div>
                     <div className='parameter-row'> 
                        <span className='parametr-label'>Humidity </span>
                        <span className='parametr-value'> {data.weatherResponse.main.humidity}% </span>
                     </div>
                     <div className='parameter-row'> 
                        <span className='parametr-label'>Pressure</span>
                        <span className='parametr-value'>{data.weatherResponse.main.pressure} hPa</span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Wather;
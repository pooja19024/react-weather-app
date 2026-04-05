import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {

  // image address taken from umsplash app
  const INIT_URL =
  "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww"; 

 const HOT_URL= "https://images.unsplash.com/photo-1662313658524-6b1d074e41d6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

 const COLD_URL= "https://plus.unsplash.com/premium_photo-1674912033144-3a93b0c82c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";

 const RAIN_URL= "https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
     <div className='CardContainer'>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
          :info.temp > 15 
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80
          ? <ThunderstormIcon/>
          :info.temp > 15 
          ? <SunnyIcon/>
          : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component ={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>humidity = {info.humidity}</p>
         <p>tempMax = {info.tempMax}</p>
         <p>tempMin = {info.tempMin}</p>
         <p>
          The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike} .
         </p>
        </Typography>
      </CardContent>
    </Card>

    </div> 
      
    </div>
  );
}
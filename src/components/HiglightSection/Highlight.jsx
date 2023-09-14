import style from './highlight.module.css';

import TempratureCard from '../Temprature_card/TempratureCard';
import UvCard from '../UvCard/UvCard';
import AqiCard from '../AqiCard/AqiCard';

import HumidityCard from '../Humidity_card/HumidityCard';
import RainSnowChanceCard from '../R_S_ChanceCard/RainSnowChanceCard.jsx';
import '../../common.css';
function HighlightContainer() {
    return (
        <div className={style.highlight_section}>
            <div className={'black_transparent'}>
                Today's Highlight

                <div className={style.highligt_container}>

                    <div className={"three-col-grid-container"} >

                        <div className={style.highlight_card}>

                            <TempratureCard />

                        </div>

                        <div className={style.highlight_card}>
                            <UvCard />

                        </div>

                        <div className={style.highlight_card}>
                            <AqiCard />

                        </div>

                    </div>

                    <div className={"three-col-grid-container"}>

                        <div className={style.highlight_card}>

                            <HumidityCard tittle={'Humidity'} display={'12'} unit='%' percentage={'12%'} componentType={'humidity'} description={'Low Humidity'} />

                        </div>
                        <div className={style.highlight_card}>
                            <RainSnowChanceCard />
                        </div>
                        <div className={style.highlight_card}>
                            <HumidityCard tittle={'Pressure'} display={'1015'} unit='hPa' percentage={'60%'} componentType={'pressure'} description={'Very High'} />
                        </div>


                    </div>

                </div>


            </div>
        </div>
    )
}
export default HighlightContainer;
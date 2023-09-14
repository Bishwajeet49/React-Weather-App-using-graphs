import style from './RainSnowChance.module.css';
import { useEffect, useState } from 'react';
function RainSnowChanceCard() {

    const daily_is_snow = 0;

    const snowChance = 38;
    const [rainChance] = useState(60)
    const iconImg = daily_is_snow ? 'Snow' : 'Rain';



    //by default show rain Chanse , if there is possiblity of snow fall than only show snow chanse
    useEffect(() => {

        setTimeout(() =>
            document.documentElement.style.setProperty('--rain-chanses', rainChance + '%')
            , 1000);
    })

    return (
        <div className={style.fix_width_height}>
            <div className={style.flex}>
                <div className={style.wrap}>
                    <div className={style.tittle}>
                        {daily_is_snow ? 'Snow Chanse' : 'Rain Chanse'}

                    </div>
                    <div className={style.filler}>
                        {daily_is_snow ? 'Snow' : 'Rain'}

                    </div>
                    <div className={style.percentage}>
                        {daily_is_snow ? snowChance : rainChance}%
                    </div>
                    <div className={style.description}>
                        {/* very low 0-20
                        low 21-40
                        medium 41-60
                        high 61-80
                        very high 81-100  */}
                        medium
                    </div>
                </div>
                <div className={`${style.wrap} ${style.meter_container}`}>
                    <div className={style.tracker}>

                        <div className={style.progress_bar}>
                            <div className={style.inner_circle}>
                                <img src={`/public/icons/${iconImg}.svg`} alt="" srcset="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default RainSnowChanceCard;
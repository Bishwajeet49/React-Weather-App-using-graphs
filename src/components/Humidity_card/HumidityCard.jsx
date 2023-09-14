import style from './humidity.module.css';
import { useEffect } from 'react';
function HumidityCard(props) {

    let { tittle, display, unit, percentage, componentType, description, classesName } = props;

    if (componentType == 'humidity') {
        display = display + unit;
        classesName = style.progress_bar + " " + style.humidity_Bar;
    }
    else {
        display = display + " " + unit;
        classesName = style.progress_bar + " " + style.pressure_Bar;
    }

    useEffect(() => {

        setTimeout(() => {

            if (componentType == 'humidity')
                document.documentElement.style.setProperty('--progress-bar-humidity', percentage);
            else
                document.documentElement.style.setProperty('--progress-bar-pressure', percentage);


        }, 1000);
    })

    return (
        <div className={style.fix_width_height}>
            <div className={style.flex}>
                <div className={style.wrap}>
                    <div className={style.tittle}>
                        {tittle}
                    </div>

                    <div className={style.percentage}>

                        {display}
                    </div>
                    <div className={style.description}>
                        {description}
                    </div>
                </div>
                <div className={`${style.wrap} ${style.meter_container}`}>
                    <div className={style.tracker}>

                        <div className={classesName}>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default HumidityCard;
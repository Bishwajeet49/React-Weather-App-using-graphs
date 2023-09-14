import style from './aqiCard.module.css';
function AqiCard() {
    return (
        <>
            <div className={style.fix_width_height}>


                <div className={style.tittle}>
                    Air Quality
                </div>
                <div className={style.Aqi_range}>
                    Unhealthy For sensetive peoples
                </div>

                <div className={style.container}>
                    <div className={style.labels}>
                        <div>Good</div>
                        <div>Bad</div>
                    </div>
                    <div className={style.tracker}>
                        <div className={style.progress_bar}>
                            <div className={style.toolTip}>200-250</div>
                            <div className={style.triangle}>🔺</div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default AqiCard;
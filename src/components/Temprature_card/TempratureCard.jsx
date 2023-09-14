import style from './temprature.module.css';
function TempratureCard() {
    return (
        <>
            <div className={style.fix_width_height}>
                <div className={style.weather_icon}>
                    <img src="/public/images/308.png" alt="" />
                </div>
                <div className={style.current_temp}>28 C</div>

                <div className={style.weather_condition}>
                    Light Snow Fall
                </div>


                <div className={style.location}>
                    <div className={style.icon}>🌏</div>
                    <div>Dashbord</div>
                </div>



            </div>
        </>
    )
}
export default TempratureCard;
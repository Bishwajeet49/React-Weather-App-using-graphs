import style from './tody_forcast.module.css';
import '../../common.css';
import Graph from './Graph';




function Today_forCast() {

    let forcast_type = 'Temprature';





    return (
        <section className='noBgContainer common_margin_top_bottom'>

            <div className={style.layout}>

                <div className={style.navigation_tab}>

                    <div className={style.forcast_type}>
                        Today's {`${forcast_type} forcast`}
                    </div>

                    <div className={style.nav_items}>

                        <button className={style.active}><span class="material-symbols-outlined">
                            thermostat
                        </span></button>

                        <button className={style.preception_forcast_btn}>
                            <img src="public/icons/rainUmb.png" />
                        </button>

                        <button><span class="material-symbols-outlined">
                            air
                        </span></button>




                    </div>

                </div>


                <Graph />

            </div>

        </section>
    )
}
export default Today_forCast;


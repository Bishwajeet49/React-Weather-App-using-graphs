import style from './w_v_fContainer.module.css';
import '../../common.css';
function W_V_fContainer() {
    return (
        <section className='noBgContainer common_margin_top_bottom'>

            <div className="three-col-grid-container">

                <div className={style.item}>

                    <div className={style.flex}>

                        <div className={style.wrap}>
                            <div className={style.tittle}>Visiblity</div>

                            <div className={style.dataBox}> <span className={style.data}>04 </span>km</div>
                        </div>

                        <div className={`${style.wrap} ${style.right}`}>
                            <div className={`${style.desc}`}>
                                <div className={`${style.icon}`}>
                                    <span class="material-symbols-outlined">
                                        visibility
                                    </span>
                                </div>
                                <div className="txt">
                                    Haze is affecting visiblity
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                <div className={style.item}>

                    <div className={style.flex}>

                        <div className={style.wrap}>
                            <div className={style.tittle}>
                                Wind Speed

                            </div>

                            <div className={style.dataBox}> <span className={style.data}>12 </span>km/h</div>
                        </div>

                        <div className={`${style.wrap} ${style.right}`}>
                            <div className={`${style.desc}`}>
                                <div className={`${style.icon}`}>
                                    <span class="material-symbols-outlined">
                                        air
                                    </span>
                                </div>
                                <div className="txt">
                                    West Wind
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                <div className={style.item}>

                    <div className={style.flex}>

                        <div className={style.wrap}>
                            <div className={style.tittle}>
                                Fells Like

                            </div>

                            <div className={`${style.fells_like} ${style.dataBox}`}>
                                <div className={style.icon_fells_like}>
                                    <span class="material-symbols-outlined">
                                        thermometer
                                    </span>
                                </div>
                                <span className={style.data}>12 <sup><span class="material-symbols-outlined degree" >
                                    fiber_manual_record
                                </span></sup> </span>
                            </div>
                        </div>

                        <div className={`${style.wrap} ${style.right}`}>
                            <div className={`${style.desc}`}>
                                <div className="txt">
                                    Humidity is making it hotter
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
}
export default W_V_fContainer;
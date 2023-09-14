import style from './UvCard.module.css';
function UvCard() {
    return (
        <>
            <div className={style.fix_width_height}>


                <div className={style.tittle}>
                    UV Index

                </div>

                <div className={style.wraper}>
                    <div className={style.box}>
                        <div className={style.semi_circle}>
                            <div class={style.inner_circle}>
                                <div className={style.UV_txt}>
                                    5.8
                                </div>
                                <div className={style.sun_Icon}>
                                    <span class="material-symbols-outlined">
                                        flare
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={style.Description}>
                    Moderate risk
                </div>


            </div>
        </>
    )
}
export default UvCard;
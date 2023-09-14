import style from './middle.module.css';
import '../../common.css';
import HighlightContainer from '../HiglightSection/Highlight';
import Today_forCast from '../Today_forCast/Today_forCast.jsx';
import W_V_fContainer from '../W_V_fContainer/W_V_fContainer.jsx';
function MiddleSection() {

    return (
        <div className={`${style.middle_section} common_padding`}>

            <div className={'common_header'}>

                <div className={style.date_and_update}>
                    <div className={style.date_txt}>January 4, 2022</div>
                    <div className={style.update_txt}>
                        last updated 45 mints ago
                        <span className={style.update_btn} title='update'>⏲</span>
                    </div>
                </div>

                <form className={`${style.searchform}`}>
                    <button
                        className={style.submitBtn}>
                        &#128269;
                    </button>
                    <input type="text" placeholder='Search Location Here' className={style.searchInput} />
                </form>

                <div className={style.avatar}>
                    h
                    {/* <img src="https://avatars.githubusercontent.com/u/83047979?v=4" alt="avatar" /> */}
                </div>

            </div>

            {/* highlight_section */}
            <HighlightContainer />

            <W_V_fContainer />

            <Today_forCast />


        </div>
    )

}
export default MiddleSection;
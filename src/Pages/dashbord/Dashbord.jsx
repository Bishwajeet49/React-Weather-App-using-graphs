import style from './dashbord.module.css';
import TempratureCard from '../../components/Temprature_card/TempratureCard';
import UvCard from '../../components/UvCard/UvCard';
import AqiCard from '../../components/AqiCard/AqiCard';
import MiddleSection from '../../components/DashbordMiddleSection/MiddleSection';
function Dashbord() {
    return (
        <div className={style.container}>

            <div className={style.thin_transparent_sheet}>

                <div className={`${style.side_navigation_bar} ${style.common_padding}`}>
                    <div className={style.common_header}>
                        <div className={style.logo_text}>
                            Weathervault
                        </div>
                    </div>
                </div>

                {/* middleSection */}
                <MiddleSection />


                <div className={`${style.right_section} ${style.common_padding}`}>
                    <div className={style.common_header}>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashbord;
import Slider from "~/components/Slider";
import Slick from "../Slick";
import styles from "./Content.scss"
import classNames from 'classnames';
import Images from "~/assets/Images";
const cx = classNames.bind(styles);

function Content() {
    const databs = [
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
            
        },
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        }
        ,
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        },
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        },
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        },
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        },
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        },
        {
            name: "Tiến sĩ Vũ Thị Thanh Thủy",
            desc: "Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai Chủ tịch Hội loãng xương Hà NộiBác sĩ nhận bệnh nhân từ 18 tuổi trở lên",
        }
    ]
    const databv = [
        {
            name: "Bệnh viện chợ rẫy",
        },
        {
            name: "Bệnh viện chợ rẫy",
        },
        {
            name: "Bệnh viện chợ rẫy",
        },
        {
            name: "Bệnh viện chợ rẫy",
        },
        {
            name: "Bệnh viện chợ rẫy",
        },
        {
            name: "Bệnh viện chợ rẫy",
        },
        {
            name: "Bệnh viện chợ rẫy",
        },

    ]
    return ( 
        <div className={cx('container')} >
            <Slider/>
            <Slick type={1} list={databs}/>
            <Slick type={2} list={databv}/>
        </div>
     );
}

export default Content;